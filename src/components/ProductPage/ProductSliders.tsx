import { FC, useEffect, useState } from "react";
import SecondarySlider from "./SecondarySlider";
import MainSlider from "./MainSlider";
import { IProductsItem } from '../../types/productsItem';
import { ICurrentParams } from '../../pages/ProductPage/ProductPage';

interface IProps {
   currentParams: ICurrentParams,
   currentProduct: IProductsItem
}

interface IImages {
   color: string,
   url: string,
   id: string,
}

const ProductSliders: FC<IProps> = ({ currentParams, currentProduct }) => {

   const [mainSlider, setMainSlider] = useState<any>();
   const [secondarySlider, setSecondarySlider] = useState<any>();

   const [sortedImages, setSortedImages] = useState<IImages[]>([])

   useEffect(() => {

      // добавляет в начало списка фотографии с выбранным цветом, а дальше пушит остальные
      const filterImages = currentProduct?.images.filter((el) => el.color.includes(currentParams.color))

      for (let i of currentProduct.images) {
         if (!i.color.includes(currentParams.color)) {
            filterImages.push(i)
         }
      }

      setSortedImages(filterImages)

   }, [currentParams.color, currentProduct])

   return (
      <div className="product__sliders" data-test-id={'product-slider'}>

         <SecondarySlider
            sortedImages={sortedImages}
            secondarySlider={secondarySlider}
            setSecondarySlider={setSecondarySlider}
            mainSlider={mainSlider}
            setMainSlider={setMainSlider}
         />

         <MainSlider
            sortedImages={sortedImages}
            mainSlider={mainSlider}
            setSecondarySlider={setSecondarySlider}
            secondarySlider={secondarySlider}
            setMainSlider={setMainSlider}
         />
      </div>
   );
}

export default ProductSliders;