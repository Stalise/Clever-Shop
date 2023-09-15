import { FC, useEffect, useState } from 'react';

import { productsMock } from 'data/products-mock';

import { Product } from 'components/common/product';
import { ProductSkeleton } from 'components/common/product/skeleton';

import { Container, Wrapper } from './styles';

const data = productsMock.men.filter((_, index) => index < 8);

export const Products: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Wrapper>
            <Container>
                {isLoading
                    ? [1, 2, 3, 4].map((item) => <ProductSkeleton key={item} />)
                    : data.map((item) => <Product data={item} key={item.id} />)}
            </Container>
        </Wrapper>
    );
};
