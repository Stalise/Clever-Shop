import { FC, useEffect, useState } from "react";
import FilterList from "./FilterList";
import { dataProducts } from '../../products';
import { IProductsItem } from '../../types/typesProductsItem';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { clearSortedAction } from '../../store/reducers/sortedReducer/sortedReducer';

interface IProps {
   isFilter: boolean,
   category: string,
}

const Filter: FC<IProps> = ({ isFilter, category }) => {

   const dispatch = useDispatch()
   const { products, tab, color, size, brand, price } = useTypedSelector(state => state.sorted[category as keyof typeof state.sorted])

   const getProducts: IProductsItem[] = dataProducts[category as keyof typeof dataProducts]

   const [filterParams, setFilterParams] = useState<any>({
      colors: [],
      sizes: [],
      brands: [],
      prices: ['$0-$50', '$50-$100', '$100-$200', '$200+']
   })

   // формирует поля в фильтре на основе значений в товарах.
   useEffect(() => {

      console.log(color, size)

      const uniqColors = new Set()
      const uniqSizes = new Set()
      const uniqBrands = new Set()

      // обходим все товары, и добавляем уникальные значения типов (цвет, бренд, размер) для фильтра
      getProducts.map((elem) => {
         for (let i of elem.images) {
            uniqColors.add(i.color)
         }

         for (let i of elem.sizes) {
            uniqSizes.add(i)
         }

         uniqBrands.add(elem.brand)
      })

      setFilterParams({
         ...filterParams,
         colors: Array.from(uniqColors),
         sizes: Array.from(uniqSizes),
         brands: Array.from(uniqBrands)
      })

      // очищает значения фильтров в редакс при смене категории товаров, чтобы не оставалось старых значений
      dispatch(clearSortedAction(category))

   }, [category])


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
               <span className="filter__result-item">{products.length} items found</span>
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