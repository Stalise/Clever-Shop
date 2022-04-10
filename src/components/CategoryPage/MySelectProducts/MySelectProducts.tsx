import { FC } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import './MySelectProducts.scss';
import { changeTabAction } from "../../../actions/sortedReducer";

interface IProps {
   categoryName: string;
}

const MySelectProducts: FC<IProps> = ({ categoryName }) => {

   const dispatch = useDispatch()

   const options: Array<{ value: string, label: string }> = [
      { value: 'isNewArrivals', label: 'NEW ARRIVALS' },
      { value: 'isSpecial', label: 'SPECIALS' },
      { value: 'isBestseller', label: 'BESTSELLERS' },
      { value: 'isMostViewed', label: 'MOST VIEWED' },
      { value: 'isFeatured', label: 'FEATURED PRODUCTS' }
   ]

   // при смене выбранной сортировки, меняется значение в редаксе
   const selectChange = (option: any) => {
      dispatch(changeTabAction(option.value, categoryName))
   }

   return (
      <div className="products__select">
         <Select
            options={options}
            defaultValue={options[0]}
            onChange={option => selectChange(option)}
            isSearchable={false}
            className={'react-select'}
            classNamePrefix={'react-select'}
         />
      </div>
   );
}

export default MySelectProducts;