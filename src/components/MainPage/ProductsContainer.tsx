import { FC } from "react";
import ProductsItems from "../Common/ProductItems/ProductsItems";
import ProductsTabs from "./ProductsTabs";

interface IProps {
   dataTestId: string,
   title: string,
   category: string
}

const ProductsContainer: FC<IProps> = ({ dataTestId, title, category }) => {

   return (
      <section className="products" data-test-id={dataTestId}>
         <div className="products__container">
            <div className="products__top">
               <p className="products__title">{title}</p>
               <ProductsTabs category={category} />
            </div>

            <ProductsItems
               category={category}
            />

            <div className="products__bottom">
               <a href="!#" className="products__bottom-button">SEE ALL</a>
            </div>
         </div>
      </section>
   );
}

export default ProductsContainer;