import { FC, useEffect, useState } from "react";
import { ICurrentParams } from '../../pages/ProductPage/ProductPage';

interface IProps {
   sizesList: string[] | undefined,
   currentParams: ICurrentParams,
   setCurrentParams: (obj: ICurrentParams) => void
}

const Sizes: FC<IProps> = ({ sizesList, currentParams, setCurrentParams }) => {

   // при загрузке нового товара или с первой отрисовкой ставится первый нужный размер
   useEffect(() => {
      if (sizesList && currentParams.size === '') {
         setCurrentParams({ ...currentParams, size: sizesList[0] })
      }
   }, [sizesList])

   return (
      <div className="product__tabs-size tabs-size">
         <p className="tabs-size__text">SIZE: <span>{currentParams.size}</span> </p>

         <div className="tabs-size__content">
            {sizesList?.map((elem) => {
               return <button
                  onClick={() => setCurrentParams({ ...currentParams, size: elem })}
                  type="button"
                  className={currentParams.size === elem ? "tabs-size__button-size _active" : "tabs-size__button-size"}
                  key={elem}>{elem}</button>
            })}
         </div>

         <button className="tabs-size__button-check">Size guide</button>
      </div>
   );
}

export default Sizes;