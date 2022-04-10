import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IProductCart } from '../../../../types/cartItem';
import { deleteCart, changeCount } from '../../../../utils/cartActions';

interface IProps {
   product: IProductCart,
}

const ProductsItem: FC<IProps> = ({ product }) => {

   const dispatch = useDispatch()

   const productId = product.idCart.split(`${product.color}`)[0]

   return (
      <div className="cart__product cart-product" data-test-id={'cart-card'}>
         <Link to={`/category/${product.category}/${productId}`}>
            <div className="cart-product__img-container">
               <img src={`https://training.cleverland.by/shop${product.img}`} alt="product" className="cart-product__img" />
            </div>
         </Link>
         <div className="cart-product__content">
            <div className="cart-product__info">
               <p className="cart-product__name">{product.name}</p>
               <div className="cart-product__parameters">
                  <p className="cart-product__color">{product.color},</p>
                  <p className="cart-product__size">{product.size}</p>
               </div>
            </div>
            <div className="cart-product__actions">
               <div className="cart-product__counter">
                  <button
                     onClick={() => changeCount('-', product, dispatch)}
                     type="button"
                     className="cart-product__counter-button--minus"
                  >-
                  </button>

                  <div className="cart-product__counter-field">{product.count}</div>

                  <button
                     onClick={() => changeCount('+', product, dispatch)}
                     type="button"
                     className="cart-product__counter-button--plus"
                  >+
                  </button>
               </div>
               <p className="cart-product__price">${product.totalPrice}</p>
               <button
                  onClick={() => deleteCart(product.idCart, dispatch)}
                  type="button"
                  className="cart-product__delete"
               ></button>
            </div>
         </div>
      </div>
   );
}

export default ProductsItem;