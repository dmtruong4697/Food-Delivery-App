import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";
import { getDatabase, ref, remove, set } from "@firebase/database";
import { UserStore } from "../../mobx/UserStore";
import { NavigationProp } from "@react-navigation/native";
import { UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthStore } from "../../mobx/AuthStore";
import { getDownloadURL, getStorage,ref as sref, uploadBytes } from "firebase/storage";

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
      // console.log(UserStore.getCurrentUser());

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

        AuthStore.setIsLoading(true);

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

          AuthStore.setIsLoading(false);
          AuthStore.setErrorMessage("");
          return user;
        }
    }
    
    catch (error) {
      console.log(error);
      AuthStore.setErrorMessage("Error");
      AuthStore.setIsLoading(false);
        throw error;
    }
    return {} as User;
}

export async function signUp(
  navigation: NavigationProp<any, any>,
  email: string,
  password: string,
): Promise<void> {
  try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const auth = getAuth(app);

      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
          navigation.navigate('SignIn');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
    }
  catch (error) {
    console.log(error);
    throw error;
  }
}

export async function editProfile(
  navigation: NavigationProp<any, any>,
  displayName: string,
  imageUri: any,
): Promise<void> {
  try {

      UserStore.setIsEditLoading(true);
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const user = auth.currentUser;

      let avatarUrl = '';
      if(imageUri){
        avatarUrl = await uploadImage(imageUri);
      } 
      await updateProfile(user!, {
        displayName: displayName, 
        photoURL: avatarUrl,
      }).then(() => {
          UserStore.setCurrentUserName(displayName);
          UserStore.setCurrentUserAvatar(avatarUrl);
          navigation.goBack();
      }).catch((error) => {
          console.log(error);
      });

      UserStore.setIsEditLoading(false);
    }
  catch (error) {
    console.log(error);
    UserStore.setIsEditLoading(false);
    throw error;
  }
}

export async function uploadImage(
  imageUri: any,
): Promise<string> {

  try {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const image = await fetch(imageUri);
    const blob = await image.blob();
    const fileName = Date.now().toString();
    const storageRef = sref(storage, `avatarImage/${fileName}`);
    await uploadBytes(storageRef, blob);

    const url = await getDownloadURL(storageRef);
    console.log(url);
    return url;
  } catch(error) {
    console.log(error);
    throw error;
  }
}