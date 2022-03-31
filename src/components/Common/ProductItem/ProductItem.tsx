import "./ProductItem.scss";
import { FC } from "react";
import { IProductsItem } from '../../../types/productsItem';
import { Link } from "react-router-dom";
import Rating from '../Rating/Rating';

interface IProps {
   dataProduct: IProductsItem,
   category: string,
}

const ProductItem: FC<IProps> = ({ dataProduct, category }) => {


   return (
      <div className="products__item products-item" data-test-id={`clothes-card-${category}`}>
         <Link to={`/${category}/${dataProduct.id}`} className="products-item__link">
            <div className="products-item__img-container">
               <img className="products-item__img" src={`https://training.cleverland.by/shop${dataProduct.images[0].url}`} alt="product"></img>
               {dataProduct.discount ? <div className="products-item__label">{dataProduct.discount}</div> : null}
            </div>

            <p className="products-item__title">{dataProduct.name}</p>

            <div className="products-item__info">
               <div className="products-item__price">
                  <p className="products-item__price-now">$ {dataProduct.price}</p>
                  {/* {dataProduct.sale !== 0 ? <p className="products-item__price-old">$ {dataProduct.price}</p> : null} */}
               </div>
               <Rating rating={dataProduct.rating} />
            </div>
         </Link>
      </div>
   );
}

export default ProductItem;