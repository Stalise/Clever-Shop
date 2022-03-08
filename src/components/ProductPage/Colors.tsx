import { FC } from "react";

interface IProps {
   images: IImages[] | undefined,
   currentColor: string,
   setCurrentColor: (color: string) => void
}

interface IImages {
   color: string,
   url: string,
   id: string,
}

const Colors: FC<IProps> = ({ images, currentColor, setCurrentColor }) => {

   const uniqueColor: any = {}

   if (images) {
      for (let i of images) {
         if (!uniqueColor.hasOwnProperty(i.color)) {
            uniqueColor[i.color as keyof typeof uniqueColor] = i.url
         }
      }
   }

   return (
      <div className="product__tabs-color tabs-color">
         <p className="tabs-color__text">COLOR: <span>{currentColor}</span> </p>

         <div className="tabs-color__content">
            {Object.entries(uniqueColor).map((elem) => {
               return (
                  <div
                     onClick={() => setCurrentColor(elem[0])}
                     className={currentColor === elem[0] ? "tabs-color__item _active" : "tabs-color__item"}
                     key={elem[0]}
                  >
                     <img className="tabs-color__item-img" src={`https://training.cleverland.by/shop${elem[1]}`} alt="wear"></img>
                  </div>
               )
            })}
         </div>
      </div>
   );
}

export default Colors;