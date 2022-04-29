import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import './MySelectProducts.scss';
import { optionsSelectItems } from '../../../constants/select';
import { changeTabAction } from "../../../actions/sortedReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IProps {
   categoryName: string;
}

const MySelectProducts: FC<IProps> = ({ categoryName }) => {

   const dispatch = useDispatch()
   const { tab } = useTypedSelector(state => state.sorted[categoryName])

   const options: Array<{ value: string, label: string }> = Object.values(optionsSelectItems).map(elem => elem)

   // при смене выбранной сортировки, меняется значение в редаксе
   const selectChange = (option: any) => {
      dispatch(changeTabAction(option.value, categoryName))
   }

   useEffect(() => {

   }, [])

   return (
      <div className="products__select">
         <Select
            options={options}
            defaultValue={options.filter(elem => elem.value === tab)}
            onChange={option => selectChange(option)}
            isSearchable={false}
            className={'react-select'}
            classNamePrefix={'react-select'}
         />
      </div>
   );
}

export default MySelectProducts;