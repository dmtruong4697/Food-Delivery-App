import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, } from "firebase/database";
import { firebaseConfig } from "../config";
import { ImageSourcePropType } from "react-native";

type FoodType = {
    id: string;
    type: string,
    name: string;
    imageUri: string;
    restaurantName: string;
    restaurantId: string,
    price: number;
}

export async function getFoodData(): Promise<FoodType[]> {
    try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
  
      const foodDataRef = ref(database, 'foods/');

      

      return new Promise((resolve, reject) => {
        onValue(foodDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const response: FoodType[] = Object.values(data);
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
    // return [] as FoodType[];
}

export async function searchFoodByType(type: string): Promise<FoodType[]> {
  try {
    const foodData = await getFoodData();
    
    return foodData.filter((Item: FoodType) => {
      return Item.type == type;
    })

  } catch (error) {
    throw error;
  }
}


