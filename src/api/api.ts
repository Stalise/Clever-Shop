import axios from 'axios';
import { IProductsItem } from '../types/productsItem';

const instance = axios.create({
   baseURL: 'https://training.cleverland.by/shop/',
});

export const productsRequests = {
   getProducts: async () => {
      const request = await instance.get('products');
      return request.data
   },

   getProduct: async (id: string): Promise<IProductsItem> => {
      const request = await instance.get(`product/${id}`);
      return request.data
   }
}