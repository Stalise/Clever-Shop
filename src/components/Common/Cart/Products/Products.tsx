import { FC } from "react";

import { IProductCart } from '../../../../types/cart';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ProductsItem from "./ProductsItem";

interface IProps {
   changeViewCart: () => void,
   setCurrentTab: (arg: string) => void,
   productsCart: IProductCart[]
}

const Products: FC<IProps> = ({ changeViewCart, productsCart, setCurrentTab }) => {

   // const buttonRef = useRef<HTMLButtonElement>(null)

   return (
      <div className="cart__products cart-products">
         <div className="cart-products__content">
            {productsCart.length
               ?
               productsCart.map((elem) => {
                  return (
                     <ProductsItem
                        product={elem}
                        key={elem.idCart}
                     />
                  )
               })
               :
               <p className="cart__empty">Rather make the first order :)</p>
            }
         </div>

         <div className="cart-products__actions">
            {productsCart.length > 0 &&
               <div className="cart-products__text">
                  <p className="cart-products__total">Total</p>
                  <p className="cart-products__price">$ {Number(productsCart.reduce((accum, elem) => accum + elem.totalPrice, 0).toFixed(1))}</p>
               </div>
            }
            <div className="cart-products__buttons">
               {productsCart.length > 0 &&
                  <button onClick={() => setCurrentTab('Delivery info')} type="button" className="cart-products__button-further">Further</button>
               }

               <button onClick={() => changeViewCart()} type="button" className="cart-products__button-back">BACK TO SHOPPING</button>
            </div>
         </div>
      </div>
   );
}

export default Products;