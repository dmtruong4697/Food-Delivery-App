import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseConfig } from "../config";
import { ImageSourcePropType } from "react-native";

type FoodType = {
    id: string;
    type: string,
    name: string;
    imageUri: string;
    restaurantName: string;
    price: number;
}

export const getFoodData = () => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const foodDataRef = ref(db, 'foods/');

    var responce: FoodType[] = [];
    onValue(foodDataRef, (snapshot) => {
        const data = snapshot.val();
        responce = data;
        console.log(data);
    });

    return responce;
}