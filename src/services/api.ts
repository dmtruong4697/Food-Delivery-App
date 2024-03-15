import { create } from "apisauce";

const apiEndPoint = 'https://dummyjson.com';

const api = create({
    baseURL: apiEndPoint,
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export async function getExample() {
    try {
      const response = await api.get('/carts');
      console.log("Response data:", response.data);
  
    } catch (error) {
      throw error;
    }
  }