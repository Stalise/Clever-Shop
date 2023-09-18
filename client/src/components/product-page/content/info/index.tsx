import { FC } from 'react';

import type { IProduct } from 'types/common';

import { Colors } from './colors';
import { Sizes } from './sizes';

import { Wrapper } from './styles';

interface IProps {
    product: IProduct;
    selectedColor: string;
    handleColorChange: (value: string) => void;
}

export const Info: FC<IProps> = ({
    product: { images, category, sizes },
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
    </Wrapper>
);
