import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";
import { getDatabase, ref, remove, set } from "@firebase/database";
import { UserStore } from "../../mobx/UserStore";
import { NavigationProp } from "@react-navigation/native";
import { UserCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";

type User = {
    uid: string;
    userEmail: string | null,
    phoneNumber: string | null,
    photoURL: string | null,
    displayName: string | null,
    token: string,
    refreshToken: string,
    expirationTime: number,
}

export const logout = async (navigation: NavigationProp<any, any>): Promise<void> => {
    try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
  
      await remove(ref(database, 'activeUser/' + UserStore.getCurrentUser().uid));
      navigation.navigate('SignIn');

      UserStore.logoutUser();
      console.log(UserStore.getCurrentUser());

    } catch (error) {
      throw error;
    }
  };

export async function signIn(
    navigation: NavigationProp<any, any>,
    email: string,
    password: string,
): Promise<User> {
    try {
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const auth = getAuth(app);
        const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

        if (userCredential && userCredential.user) {
          const user: User = {
            uid: userCredential.user.uid,
            userEmail: userCredential.user.email || '',
            phoneNumber: userCredential.user.phoneNumber || '',
            photoURL: userCredential.user.photoURL || '',
            displayName: userCredential.user.displayName || '',
            token: userCredential.user.stsTokenManager.accessToken || '',
            expirationTime: userCredential.user.stsTokenManager.expirationTime || 0,
            refreshToken: userCredential.user.stsTokenManager.refreshToken || '',
          };
    
          UserStore.setCurrentUser(user);
        //   console.log(user);
          navigation.navigate('Home');
    
          await set(ref(database, 'activeUser/' + user.uid), user);
          return user;
        }
    } catch (error) {
        throw error;
    }
    return {} as User;
}