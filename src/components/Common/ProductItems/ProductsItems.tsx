import './ProductsItems.scss';
import { FC, useEffect, useState } from "react";
import { IProductsItem } from '../../../types/typesProductsItem';
import { fakeDataProducts } from '../../../tempProducts';
import ProductItem from '../ProductItem/ProductItem';

interface IProps {
   category: string,
}

const ProductsItems: FC<IProps> = ({ category }) => {

   const [products, setProducts] = useState<IProductsItem[]>([])

   useEffect(() => {
      // забираем из пропса выбранную категорию и по ней получаем массив продуктов из fakeDataProducts.tsx 
      if (category.length > 0) {
         const getProducts: IProductsItem[] = fakeDataProducts[category as keyof typeof fakeDataProducts]
         setProducts([...getProducts])
      }
   }, [category])

   return (
      <div className="products__items">
         {
            products.map((elem) => {
               return (
                  <ProductItem dataProduct={elem} category={category} key={elem.id} />
               )
            })
         }
      </div>
   );
}

export default ProductsItems;