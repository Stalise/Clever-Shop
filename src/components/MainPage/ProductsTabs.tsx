import { FC } from "react";
import { useDispatch } from "react-redux";

import { changeTabAction } from '../../actions/sortedReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { KeyType } from '../../types/keyType';

interface IProps {
   category: string,
}

// для сортировки товаров нужны их значения из полученных данных, а не названия
const tabsValues: KeyType<string> = {
   'NEW ARRIVALS': 'isNewArrivals',
   'SPECIALS': 'isSpecial',
   'BESTSELLERS': 'isBestseller',
   'MOST VIEWED': 'isMostViewed',
   'FEATURED PRODUCTS': 'isFeatured'
}

const ProductsTabs: FC<IProps> = ({ category }) => {

   const dispatch = useDispatch()
   const { tab } = useTypedSelector(state => state.sorted[category])

   const tabsArr = ['NEW ARRIVALS', 'SPECIALS', 'BESTSELLERS', 'MOST VIEWED', 'FEATURED PRODUCTS']

   const changeTab = (tabName: string) => {
      dispatch(changeTabAction(tabsValues[tabName], category))
   }

   return (
      <div className="products__tabs">
         <ul className="products__tabs-list">
            {tabsArr.map((elem) => {
               return (
                  <li
                     onClick={() => changeTab(elem)}
                     className={tab === tabsValues[elem] ? "products__tabs-item _active" : "products__tabs-item"}
                     key={elem}
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