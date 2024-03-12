import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";
import { getDatabase, ref, remove } from "@firebase/database";
import { UserStore } from "../../mobx/UserStore";
import { NavigationProp } from "@react-navigation/native";

export const logout = async() => {
    const app = initializeApp(firebaseConfig);
    // const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const database = getDatabase(app);

    await remove(ref(database, 'activeUser/' + UserStore.getCurrentUser().uid));
}