import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTabAction } from '../../store/reducers/sortedReducer/sortedReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IProps {
   category: string,
}

enum checkValues {
   'NEW ARRIVALS' = 'isNewArrivals',
   'SPECIALS' = 'isSpecial',
   'BESTSELLERS' = 'isBestseller',
   'MOST VIEWED' = 'isMostViewed',
   'FEATURED PRODUCTS' = 'isFeatured'
}

const ProductsTabs: FC<IProps> = ({ category }) => {

   const tabsArr = ['NEW ARRIVALS', 'SPECIALS', 'BESTSELLERS', 'MOST VIEWED', 'FEATURED PRODUCTS']
   const { tab } = useTypedSelector(state => state.sorted[category as keyof typeof state.sorted])
   const dispatch = useDispatch()

   console.log(checkValues["NEW ARRIVALS"])

   const changeTab = (tabName: string) => {
      dispatch(changeTabAction(tabName, category))
   }

   return (
      <div className="products__tabs">
         <ul className="products__tabs-list">
            {tabsArr.map((elem) => {
               return (
                  <li
                     onClick={() => changeTab(elem)}
                     className={tab === elem ? "products__tabs-item _active" : "products__tabs-item"}
                     key={elem}
                     data-test-id={`clothes-${category}-${checkValues[elem as keyof typeof checkValues]}`}
                  >
                     {elem}
                  </li>
               )
            })}
         </ul>
      </div>
   );
}

export default ProductsTabs;