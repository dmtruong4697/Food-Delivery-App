import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseConfig } from "../config";
import { ImageSourcePropType } from "react-native";

type RestaurantType = {
    id: string;
    name: string;
    description: string,
    imageUri: string;
    rating: number;
}

export async function getRestaurantData(): Promise<RestaurantType[]> {
    try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
  
      const restaurantDataRef = ref(database, 'restaurants/');

      return new Promise((resolve, reject) => {
        onValue(restaurantDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const response: RestaurantType[] = Object.values(data);
            // console.log(response);
            resolve(response);
          } else {
            console.error('No data available.');
            reject(new Error('No data available.'));
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }