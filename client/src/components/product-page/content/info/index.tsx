import { FC } from 'react';

import type { IProduct } from 'types/common';

import { Actions } from './actions';
import { Colors } from './colors';
import { Description } from './description';
import { Interaction } from './interaction';
import { Payment } from './payment';
import { Sizes } from './sizes';

import { Wrapper } from './styles';

interface IProps {
    product: IProduct;
    selectedColor: string;
    handleColorChange: (value: string) => void;
}

export const Info: FC<IProps> = ({
    product: { images, category, sizes, price, discount },
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
    </Wrapper>
);
