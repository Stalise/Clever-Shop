import { FC } from 'react';

import type { IProduct } from 'types/common';

import { Colors } from './colors';

import { Wrapper } from './styles';

interface IProps {
    product: IProduct;
    selectedColor: string;
    handleColorChange: (value: string) => void;
}

export const Info: FC<IProps> = ({
    product: { images, category },
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
    </Wrapper>
);
