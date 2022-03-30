import { FC } from "react";

interface IProps {
   isRating: number,
   setIsRating: (data: number) => void
}

const StarsRating: FC<IProps> = ({ isRating, setIsRating }) => {

   return (
      <div className="rating-container">
         {[...Array(5)].map((start, index) => {
            const ratingValue = index + 1

            return (
               <div
                  key={index}
                  className="rating-container__star"
                  onClick={() => setIsRating(ratingValue)}
               >
                  <svg width="40" height="40" viewBox="0 0 14 14" fill='none' xmlns="http://www.w3.org/2000/svg">
                     <path fill={ratingValue <= isRating ? '#F0CC84' : '#E6E6E6'} d="M6.33418 2.04895C6.54418 1.40425 7.45628 1.40425 7.66558 2.04895L8.41458 4.35335C8.46034 4.4937 8.5493 4.61598 8.66873 4.70273C8.78817 4.78948 8.93197 4.83625 9.07958 4.83635H11.503C12.1813 4.83635 12.4627 5.70435 11.9146 6.10335L9.95458 7.52715C9.83491 7.61398 9.74579 7.73646 9.70002 7.87705C9.65424 8.01764 9.65416 8.16912 9.69978 8.30975L10.4488 10.6142C10.6588 11.2589 9.92028 11.7958 9.37078 11.3968L7.41078 9.97295C7.29123 9.88616 7.14728 9.83941 6.99953 9.83941C6.85179 9.83941 6.70784 9.88616 6.58828 9.97295L4.62828 11.3968C4.07948 11.7958 3.34168 11.2589 3.55098 10.6142L4.29998 8.30975C4.34561 8.16912 4.34552 8.01764 4.29975 7.87705C4.25398 7.73646 4.16486 7.61398 4.04518 7.52715L2.08588 6.10405C1.53778 5.70505 1.81988 4.83705 2.49748 4.83705H4.92018C5.06792 4.83709 5.21188 4.79039 5.33145 4.70363C5.45103 4.61688 5.54009 4.49451 5.58588 4.35405L6.33488 2.04965L6.33418 2.04895Z" />
                  </svg>
               </div>
            )
         })}
      </div>
   );
}

export default StarsRating;