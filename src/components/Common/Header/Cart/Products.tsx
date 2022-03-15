import { FC } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ProductsItem from "./ProductsItem";

const Products: FC = () => {

   const { productsCart } = useTypedSelector(state => state.cart)

   return (
      <div className="cart__products">
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
   );
}

export default Products;