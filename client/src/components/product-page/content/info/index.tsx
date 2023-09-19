import { FC } from 'react';

import type { IProduct } from 'types/common';

import { Actions } from './actions';
import { Colors } from './colors';
import { Description } from './description';
import { Details } from './details';
import { Interaction } from './interaction';
import { Payment } from './payment';
import { Reviews } from './reviews';
import { Sizes } from './sizes';

import { Wrapper } from './styles';

interface IProps {
    product: IProduct;
    selectedColor: string;
    handleColorChange: (value: string) => void;
}

export const Info: FC<IProps> = ({
    product: {
        images,
        category,
        sizes,
        price,
        discount,
        colors,
        materials,
        reviews,
        rating,
    },
    selectedColor,
    handleColorChange,
}) => (
    <Wrapper>
        <Colors
            images={images}
            selectedColor={selectedColor}
            category={category}
            handleColorChange={handleColorChange}
        />
        <Sizes sizes={sizes} />
        <Actions price={price} discount={discount} />
        <Interaction />
        <Payment />
        <Description />
        <Details colors={colors} sizes={sizes} materials={materials} />
        <Reviews rating={rating} reviews={reviews} />
    </Wrapper>
);
