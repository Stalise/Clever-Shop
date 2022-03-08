import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import './MySelectProducts.scss';
import { changeTabAction } from "../../../store/reducers/sortedReducer/sortedReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IProps {
   categoryName: string;
}

enum optionLabel {
   popular = 'популярности',
   max = 'цене (макс)',
   min = 'цене (мин)',
}

const MySelectProducts: FC<IProps> = ({ categoryName }) => {

   const { tab } = useTypedSelector(state => state.sorted[categoryName as keyof typeof state.sorted])
   const dispatch = useDispatch()

   const options: any[] = [
      { value: 'NEW ARRIVALS', label: 'NEW ARRIVALS' },
      { value: 'SPECIALS', label: 'SPECIALS' },
      { value: 'BESTSELLERS', label: 'BESTSELLERS' },
      { value: 'MOST VIEWED', label: 'MOST VIEWED' },
      { value: 'FEATURED PRODUCTS', label: 'FEATURED PRODUCTS' }
   ]

   // при смене выбранной сортировки, меняется значение в редаксе
   const selectChange = (option: any) => {
      dispatch(changeTabAction(option.value, categoryName))
   }

   return (
      <div className="products__select">
         <Select
            options={options}
            // defaultValue={{ value: sort, label: optionLabel[sort as keyof typeof optionLabel] }}
            defaultValue={{ value: tab, label: tab }}
            onChange={option => selectChange(option)}
            isSearchable={false}
            className={'react-select'}
            classNamePrefix={'react-select'}
         />
      </div>
   );
}

export default MySelectProducts;