import { FC } from "react";
import FilterCheckbox from "./FilterCheckbox";

interface IProps {
   type: string,
   parametr: [],
   currentParams: string[],
   category: string,
}

const FilterList: FC<IProps> = ({ type, parametr, currentParams, category }) => {

   return (
      <div className="filter__list-container" data-test-id={`filters-${type.toLocaleLowerCase()}`}>
         <p className="filter__list-title">{type}</p>
         <ul className={`filter__list${type === 'Color' ? '--color' : ''}`}>
            {parametr.map((elem) => {
               return (
                  <li className="filter__list-item" key={category + elem} data-test-id={`filters-${type.toLocaleLowerCase()}-${elem}`}>
                     <FilterCheckbox
                        type={type}
                        text={elem}
                        currentParams={currentParams}
                        category={category}
                     />
                  </li>
               )
            })}
         </ul>
      </div>
   );
}

export default FilterList;