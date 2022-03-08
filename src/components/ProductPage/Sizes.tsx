import { FC, useEffect, useState } from "react";

interface IProps {
   sizesList: string[] | undefined,
}

const Sizes: FC<IProps> = ({ sizesList }) => {

   const [currentSize, setSize] = useState<string>('')

   useEffect(() => {
      if (sizesList && currentSize === '') {
         setSize(sizesList[0])
      }
   }, [sizesList])

   return (
      <div className="product__tabs-size tabs-size">
         <p className="tabs-size__text">SIZE: <span>{currentSize}</span> </p>

         <div className="tabs-size__content">
            {sizesList?.map((elem) => {
               return <button
                  onClick={() => setSize(elem)}
                  type="button"
                  className={currentSize === elem ? "tabs-size__button-size _active" : "tabs-size__button-size"}
                  key={elem}>{elem}</button>
            })}
         </div>

         <button className="tabs-size__button-check">Size guide</button>
      </div>
   );
}

export default Sizes;