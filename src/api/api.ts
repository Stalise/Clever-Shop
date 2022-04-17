import axios from 'axios';

import { IProductsItem } from '../types/productsItem';
import { IResultData } from '../components/ProductPage/ReviewsForm/ReviewsForm'

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

export const cartRequests = {
   getCountries: async () => {
      const request = await instance.get('countries');
      return request.data
   },

   getAdress: async (data: { country: string, adress: string }) => {
      const request = await instance.post('search/cities', {
         "city": data.adress,
         "country": data.country,
      })

      return request.data
   },

   sendOrder: async (data: any) => {
      const request = await instance.post('cart', data)

      return request.data.message
   }
}

export const emailRequest = async (email: string) => {
   try {
      const request = await instance.post('email', {
         "mail": email
      })

      return request.status

   } catch (error) {
      return 400
   }
}

export const reviewRequest = async (data: IResultData) => {
   try {
      const request = await instance.post('product/review', {
         ...data
      })

      return { status: request.status, data: request.data }

   } catch (error) {
      return { status: 400 }
   }
}