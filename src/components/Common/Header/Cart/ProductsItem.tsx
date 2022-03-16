import { FC } from "react";
import { Link } from "react-router-dom";
import { IProductCart } from '../../../../types/cartItem';
import { deleteCartAction, changeCountCartAction }
   from '../../../../store/reducers/cartReducer/cartReducer';
import { useDispatch } from "react-redux";

interface IProps {
   product: IProductCart,
}

const ProductsItem: FC<IProps> = ({ product }) => {

   const dispatch = useDispatch()

   // удаляем товар из корзины по его id в ней.
   const deleteCart = () => {
      dispatch(deleteCartAction(product.idCart))
   }

   // в зависимости от передачи + или -, мы меняем количество определенного товара в заказе
   const changeCount = (operator: string) => {
      const copyProduct = { ...product }

      if (operator === '+' && product.count < 100 && product.count >= 1) {
         copyProduct.count += 1
         // если получается большое число, то обрезаем до 2-десятой, и убираем лишние дробные нули через Number
         copyProduct.totalPrice = Number((copyProduct.totalPrice + copyProduct.price).toFixed(2))

      } else if (operator === '-' && product.count > 1) {
         copyProduct.count -= 1
         copyProduct.totalPrice = Number((copyProduct.totalPrice - copyProduct.price).toFixed(2))
      }

      dispatch(changeCountCartAction(copyProduct))
   }

   return (
      <div className="cart__product cart-product" data-test-id={'cart-card'}>
         <Link to={`/category/${product.category}/${product.idCart.split(`${product.color}`)[0]}`}>
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
                  <button onClick={() => changeCount('-')} type="button" className="cart-product__counter-button--minus" data-test-id={'minus-product'}>-</button>
                  <div className="cart-product__counter-field">{product.count}</div>
                  <button onClick={() => changeCount('+')} type="button" className="cart-product__counter-button--plus" data-test-id={'plus-product'}>+</button>
               </div>
               <p className="cart-product__price">${product.totalPrice}</p>
               <button onClick={() => deleteCart()} type="button" className="cart-product__delete" data-test-id={'remove-product'}></button>
            </div>
         </div>
      </div>
   );
}

export default ProductsItem;