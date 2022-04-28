import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FilterList from "./FilterList";
import { IProductsItem } from '../../types/productsItem';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { clearSortedAction } from '../../actions/sortedReducer';

interface IProps {
   isFilter: boolean,
   category: string,
}

const Filter: FC<IProps> = ({ isFilter, category }) => {

   const dispatch = useDispatch()
   const { productsSorted, color, size, brand, price } = useTypedSelector(state => state.sorted[category])
   const { products } = useTypedSelector(state => state.products)

   const categoryProducts: IProductsItem[] = products[category]

   const [filterParams, setFilterParams] = useState<any>({
      colors: [],
      sizes: [],
      brands: [],
      prices: ['$0-$50', '$50-$100', '$100-$200', '$200+']
   })

   // формирует поля в фильтре на основе значений в товарах.
   useEffect(() => {

      const uniqColors = new Set()
      const uniqSizes = new Set()
      const uniqBrands = new Set()

      // обходим все товары, и добавляем уникальные значения типов (цвет, бренд, размер) для фильтра
      categoryProducts.map((elem) => {
         elem.images.forEach((elem) => {
            uniqColors.add(elem.color)
         })

         elem.sizes.forEach((elem) => {
            uniqSizes.add(elem)
         })

         uniqBrands.add(elem.brand)
      })

      setFilterParams({
         ...filterParams,
         colors: Array.from(uniqColors),
         sizes: Array.from(uniqSizes),
         brands: Array.from(uniqBrands)
      })

      // очищает значения фильтров в редакс при смене категории товаров (c men на women напрмиер), чтобы не оставалось старых значений
      dispatch(clearSortedAction(category))

   }, [category, categoryProducts])


   return (
      <div className={`products__actions-bottom filter ${isFilter ? '_active' : ''}`} data-test-id={`filters-${category}`}>
         <div className="filter__container">
            <div className="filter__lists">
               <FilterList
                  parametr={filterParams.colors}
                  type={'Color'}
                  currentParams={color}
                  category={category}
               />

               <FilterList
                  parametr={filterParams.sizes}
                  type={'Size'}
                  currentParams={size}
                  category={category}
               />

               <FilterList
                  parametr={filterParams.brands}
                  type={'Brand'}
                  currentParams={brand}
                  category={category}
               />

               <FilterList
                  parametr={filterParams.prices}
                  type={'Price'}
                  currentParams={price}
                  category={category}
               />
            </div>
            <div className="filter__result">
               <span className="filter__result-item">{productsSorted.length} items found</span>
               {color.length > 0 && <span className="filter__result-item">Color: {color.map((elem) => elem + '. ')}</span>}
               {size.length > 0 && <span className="filter__result-item">Size: {size.map((elem) => elem + '. ')}</span>}
               {brand.length > 0 && <span className="filter__result-item">Brand: {brand.map((elem) => elem + '. ')}</span>}
               {price.length > 0 && <span className="filter__result-item">Price: {price.map((elem) => elem + '. ')}</span>}
            </div>
         </div>
      </div>
   );
}

export default Filter;