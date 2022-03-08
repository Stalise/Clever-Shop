import { FC } from "react";
import { IProductsItem } from "../../types/typesProductsItem";
import Rating from "../Common/Rating/Rating";

interface IProps {
   currentProduct: IProductsItem | undefined;
}

const Reviews: FC<IProps> = ({ currentProduct }) => {

   return (
      <div className="product__reviews">
         <p className="product__reviews-title">Reviews</p>

         <div className="product__reviews-actions reviews-actions">
            <div className="reviews-actions__rating">
               <Rating
                  rating={currentProduct?.reviews ? currentProduct?.reviews.reduce((t, e, i, a) => (t += e.rating), 0) / currentProduct?.reviews.length : 0}
               />
               <a href="#!" className="reviews-actions__rating-title">{currentProduct?.reviews ? currentProduct?.reviews.length : 0} reviews</a>
            </div>

            <p className="reviews-actions__message">Write a review</p>
         </div>

         {currentProduct?.reviews.length
            ?
            <div className="product__reviews-content">
               {currentProduct?.reviews.map((elem, index) => {
                  if (index < 5) {
                     return (
                        <div className="product__reviews-item reviews-item" key={elem.id}>
                           <div className="reviews-item__top">
                              <p className="reviews-item__name">{elem.name}</p>

                              <div className="reviews-item__info">
                                 <p className="reviews-item__date">3 months ago</p>
                                 <Rating rating={elem.rating} />
                              </div>
                           </div>

                           <p className="reviews-item__text">{elem.text}</p>
                        </div>
                     )
                  }
               })}
            </div>
            :
            null
         }
      </div>
   );
}

export default Reviews;