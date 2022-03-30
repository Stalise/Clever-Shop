import { FC, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { IProductsItem } from "../../types/productsItem";
import Rating from "../Common/Rating/Rating";
import MyModal from '../Common/MyModal/MyModal';
import ReviewsForm from './ReviewsForm/ReviewsForm';

interface IProps {
   currentProduct: IProductsItem | undefined;
}

const Reviews: FC<IProps> = ({ currentProduct }) => {

   const [isModal, setIsModal] = useState(false)

   return (
      <div className="product__reviews">
         <p className="product__reviews-title">Reviews</p>

         <div className="product__reviews-actions reviews-actions">
            <div className="reviews-actions__rating">
               <Rating
                  rating={currentProduct?.reviews ? currentProduct?.reviews.reduce((t, e) => (t += e.rating), 0) / currentProduct?.reviews.length : 0}
               />
               <a href="#!" className="reviews-actions__rating-title">{currentProduct?.reviews ? currentProduct?.reviews.length : 0} reviews</a>
            </div>

            <p onClick={() => setIsModal(true)} className="reviews-actions__message" data-test-id={'review-button'}>Write a review</p>
         </div>

         {currentProduct?.reviews.length
            ?
            <div className="product__reviews-content">
               {[...currentProduct.reviews].reverse().map((elem, index) => {
                  if (index < 5) {
                     return (
                        <div className="product__reviews-item reviews-item" key={uuidv4()}>
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

         <MyModal isModal={isModal} setIsModal={setIsModal}>
            {currentProduct && <ReviewsForm currentProduct={currentProduct} setIsModal={setIsModal} />}
         </MyModal>
      </div>
   );
}

export default Reviews;