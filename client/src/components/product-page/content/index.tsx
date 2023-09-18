import { FC, useState } from 'react';

import type { IProduct } from 'types/common';

import { Info } from './info';
import { Sliders } from './sliders';

import { Container, Wrapper } from './styles';

interface IProps {
    product: IProduct;
}

export const Content: FC<IProps> = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.images[0].color);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <Wrapper>
            <Container>
                <Sliders
                    images={product.images}
                    selectedColor={selectedColor}
                    category={product.category}
                />
                <Info
                    product={product}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}
                />
            </Container>
        </Wrapper>
    );
};
