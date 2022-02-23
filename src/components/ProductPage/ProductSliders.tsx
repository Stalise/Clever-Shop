import { FC, useState } from "react";
import SecondarySlider from "./SecondarySlider";
import MainSlider from "./MainSlider";


const ProductSliders: FC = () => {

   const [firstSwiper, setFirstSwiper] = useState<any>(null);

   return (
      <div className="product__sliders" data-test-id={'product-slider'}>
         <SecondarySlider
            setFirstSwiper={setFirstSwiper}
         />

         <MainSlider
            firstSwiper={firstSwiper}
         />
      </div>
   );
}

export default ProductSliders;