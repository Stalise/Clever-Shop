import { FC } from 'react';

import { productsMock } from 'data/products-mock';
import type { CategoriesType } from 'types/common';

import { Product } from 'components/common/product';

import { Wrapper } from './styles';

interface IProps {
    category: CategoriesType;
}

export const Content: FC<IProps> = ({ category }) => {
    const data = productsMock[category].filter((_, index) => index < 8);

    return (
        <Wrapper>
            {data.map((item) => (
                <Product data={item} key={item.id} />
            ))}
        </Wrapper>
    );
};
