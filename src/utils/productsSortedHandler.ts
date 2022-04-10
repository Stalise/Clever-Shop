import { IProductsItem } from '../types/productsItem';

interface IArguments {
   (
      products: IProductsItem[],
      tab: string,
      color: string[],
      size: string[],
      brand: string[],
      price: string[],
   ): IProductsItem[],
}

// функция хелпер сортирует общий список товаров при изменении любого значения фильтра.
export const productsSortedHandler: IArguments = (products, tab, color, size, brand, price) => {

   let result = products.filter((elem) => {
      return elem.particulars[tab] === true
   })

   // проверяем массив товаров на каждый фильтр при его наличии в передаваемых массивах.
   if (color?.length > 0) {
      result = result.filter((elem) => {
         for (let i of elem.images) {
            for (let j of color) {
               if (i.color === j) return true
            }
         }
      })
   }

   if (size?.length > 0) {
      result = result.filter((elem) => {
         for (let i of elem.sizes) {
            for (let j of size) {
               if (i === j) return true
            }
         }
      })
   }

   if (brand?.length > 0) {
      result = result.filter((elem) => {
         for (let i of brand) {
            if (i === elem.brand) return true
         }
      })
   }

   if (price?.length > 0) {

      const numberPrices = price.reduce((accum, elem): any => {

         // разделяем полученные цены по -. Из $100-$200 получаем [$100, $200] 
         let getArrNumbers = elem.split('-')

         if (getArrNumbers.length === 2) {
            // преобразуем полученные строки с ценой в числа. Пример "[$100, $200]" в числовой массив [100, 200] и пушим его в общий массив результат
            accum.push([Number(getArrNumbers[0].replace(/[^0-9, ]/g, "")), Number(getArrNumbers[1].replace(/[^0-9, ]/g, ""))])
            return accum

         } else if (getArrNumbers.length === 1) {
            accum.push([Number(getArrNumbers[0].replace(/[^0-9, ]/g, ""))])
            return accum

         }
      }, [] as any[])


      // проходим по каждому товару и проверяем на совпадение цены фильтра в массиве numberPrices.
      result = result.filter((elem) => {
         for (let i of numberPrices) {
            if (i.length === 2) {
               if (elem.price > i[0] && elem.price < i[1]) {
                  return true
               }
            } else if (i.length === 1) {
               if (elem.price > i[0]) {
                  return true
               }
            }
         }
      })
   }

   // возвращаем отфильтрованный список товаров.
   return result
}