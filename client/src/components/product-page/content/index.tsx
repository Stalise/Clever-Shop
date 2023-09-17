import { FC, useState } from 'react';

import type { IProduct } from 'types/common';

import { Info } from './info';
import { Sliders } from './sliders';

import { Container, Wrapper } from './styles';

interface IProps {
    product: IProduct;
}

export const Content: FC<IProps> = ({ product }) => {
    const [color] = useState(product.images[0].color);

    return (
        <Wrapper>
            <Container>
                <Sliders
                    images={product.images}
                    color={color}
                    category={product.category}
                />
                <Info />
            </Container>
        </Wrapper>
    );
};
