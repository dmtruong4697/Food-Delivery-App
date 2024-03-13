import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";
import { getDatabase, onValue, ref, set } from "@firebase/database";
import { UserStore } from "../../mobx/UserStore";
import { CartStore } from "../../mobx/CartStore";
import { NavigationProp } from "@react-navigation/native";

type OrderItem = {
    id: string;
    name: string;
    type: string;
    restaurantName: string;
    restaurantId: string;
    imageUri: string;
    price: number;
    quantity: number;
}

type Order = {
    id: string,
    userId: string,
    createAt: string,
    total: number,
    orderList: OrderItem[],
    status: string,
}

export const addOrder = async (navigation: NavigationProp<any, any>,): Promise<void> => {
    try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);

      const orderData: Order = {
        id: Date.now().toString(),
        userId: UserStore.getCurrentUser().uid,
        createAt: Date.now().toString(),
        total: CartStore.total,
        orderList: CartStore.items,
        status: "Ongoing",
      }
  
      await set(ref(database, 'orders/' + orderData.id), orderData);
      navigation.navigate('PaymentSuccessfull');

    } catch (error) {
      throw error;
    }
};

export async function getOrderData(): Promise<Order[]> {
    try {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
  
      const orderDataRef = ref(database, 'orders/');

      return new Promise((resolve, reject) => {
        onValue(orderDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const response: Order[] = Object.values(data);
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