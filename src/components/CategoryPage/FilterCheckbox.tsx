import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeParamsAction } from '../../store/reducers/sortedReducer/sortedReducer';

interface IProps {
   type: string,
   text: string,
   currentParams: string[],
   category: string,
}

const FilterCheckbox: FC<IProps> = ({ type, text, currentParams, category }) => {

   const dispatch = useDispatch()
   const [isChecked, setIsChecked] = useState(false)

   const changeParams = () => {
      // разворачиваем текущие параметры из стейта в редакс
      let getParams = [...currentParams]

      // в зависимости от статуса чекбокса мы меняем данные в редакс. Добавляя или убирая параметр в массиве значений.
      if (!isChecked) {
         getParams.push(text)

         setIsChecked(true)

         dispatch(changeParamsAction(getParams, category, type))

      } else {
         getParams = getParams.filter((elem) => elem !== text)

         setIsChecked(false)

         dispatch(changeParamsAction(getParams, category, type))

      }
   }

   return (
      <label className="filter__checkbox-label">
         <input onChange={() => changeParams()} type="checkbox" className="filter__checkbox-input" />
         <span className={`filter__checkbox-field${isChecked ? ' _active' : ''}`}></span>
         {type && <span style={{ backgroundColor: text }} className="filter__checkbox-color"></span>}
         <span className={`filter__checkbox-text`}>{text}</span>
      </label>
   );
}

export default FilterCheckbox;