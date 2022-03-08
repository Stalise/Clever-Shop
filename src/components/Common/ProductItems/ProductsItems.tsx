import './ProductsItems.scss';
import { FC, useEffect, memo } from "react";
import { IProductsItem } from '../../../types/typesProductsItem';
import { dataProducts } from '../../../products';
import ProductItem from '../ProductItem/ProductItem';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { productsSortedHandler } from '../../../utils/productsSortedHandler';
import { useDispatch } from 'react-redux';
import { changeProductsAction } from '../../../store/reducers/sortedReducer/sortedReducer';

interface IProps {
   category: string,
}

const ProductsItems: FC<IProps> = ({ category }) => {
   // забираем из пропса выбранную категорию и по ней получаем массив продуктов из dataProducts.tsx   
   const { products, tab, color, size, brand, price } = useTypedSelector(state => state.sorted[category as keyof typeof state.sorted])
   const getProducts: IProductsItem[] = dataProducts[category as keyof typeof dataProducts]
   const dispatch = useDispatch()

   useEffect(() => {
      // в функции хелпер мы фильтруем массив по заданным типам
      const getSortedProducts = productsSortedHandler(getProducts, tab, color, size, brand, price)
      dispatch(changeProductsAction(getSortedProducts, category))

   }, [category, tab, color, size, brand, price])

   return (
      <div className="products__items">
         {products.length
            ?
            products.map((elem: any, index: any) => {
               if (index < 8) {
                  return (
                     <ProductItem dataProduct={elem} category={category} key={elem.id} />
                  )
               }
            })
            :
            <div className='products__items-empty'>Нет товаров данной категории</div>
         }
      </div>
   );
}

export default memo(ProductsItems);