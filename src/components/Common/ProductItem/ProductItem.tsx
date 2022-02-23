import "./ProductItem.scss"
import { FC, useEffect, useState } from "react";
import { IProductsItem } from '../../../types/typesProductsItem';
import { Link } from "react-router-dom";

interface IProps {
   dataProduct: IProductsItem,
   category: string,
}

const ProductItem: FC<IProps> = ({ dataProduct, category }) => {

   const path = process.env.REACT_APP_GITHUB_PATH
   const [priceSale, setPriceSale] = useState<number>(0)

   useEffect(() => {
      if (dataProduct.sale > 0) {
         // считаем цену по формуле с учетом процентов скидки
         setPriceSale(dataProduct.price - (dataProduct.price / 100 * dataProduct.sale))
      }
   }, [])

   return (
      <div className="products__item products-item" data-test-id={`clothes-card-${category}`}>
         <Link to={`/category/${category}/${dataProduct.id}`} className="products-item__link">
            <div className="products-item__img-container">
               <img className="products-item__img" src={`${path}/images/${dataProduct.img}`} alt="product"></img>
               {dataProduct.sale ? <div className="products-item__label">{dataProduct.sale}%</div> : null}
            </div>

            <p className="products-item__title">{dataProduct.name}</p>

            <div className="products-item__info">
               <div className="products-item__price">
                  <p className="products-item__price-now">$ {priceSale > 0 ? priceSale : dataProduct.price}</p>
                  {dataProduct.sale !== 0 ? <p className="products-item__price-old">$ {dataProduct.price}</p> : null}
               </div>
               <div className="products-item__rating">
                  <img className="products-item__rating-img" src={`${path}/images/rating.png`} alt="rating"></img>
               </div>
            </div>
         </Link>
      </div>
   );
}

export default ProductItem;