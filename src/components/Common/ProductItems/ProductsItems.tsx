import './ProductsItems.scss';
import { FC, useEffect, Fragment } from "react";
import { useDispatch } from 'react-redux';

import { IProductsItem } from '../../../types/productsItem';
import ProductItem from '../ProductItem/ProductItem';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { productsSortedHandler } from '../../../utils/productsSortedHandler';
import { changeProductsAction } from '../../../store/reducers/sortedReducer/sortedReducer';
import ErrorMessage from '../../Common/ErrorMessage/ErrorMessage';

import Loader from '../Loader/Loader';

interface IProps {
   category: string,
}

const ProductsItems: FC<IProps> = ({ category }) => {
   const dispatch = useDispatch()

   const { productsSorted, tab, color, size, brand, price } = useTypedSelector(state => state.sorted[category as keyof typeof state.sorted])
   const { products, isLoading, isError } = useTypedSelector(state => state.products)

   const getProducts: IProductsItem[] = products[category as keyof typeof products]

   useEffect(() => {

      // в функции хелпер мы фильтруем массив по заданным типам
      const getSortedProducts = productsSortedHandler(getProducts, tab, color, size, brand, price)

      dispatch(changeProductsAction(getSortedProducts, category))

   }, [products, category, tab, color, size, brand, price])


   return (
      <Fragment>
         {!isLoading && <Loader />}

         {isError && <ErrorMessage text={'Error request products'} />}

         <div className="products__items">
            {productsSorted.length > 0
               ?
               productsSorted.map((elem, index) => {
                  if (index < 8) {
                     return (
                        <ProductItem
                           dataProduct={elem}
                           category={category}
                           key={elem.id}
                        />
                     )
                  }
               })
               :
               <div className='products__items-empty'>Нет товаров данной категории</div>
            }
         </div>
      </Fragment>
   )
}

export default ProductsItems;