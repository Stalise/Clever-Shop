import { FC } from 'react';

import type { CategoriesType } from 'types/common';

import { Content } from './content';
import { Top } from './top';

import { Container, StyledLink, Wrapper } from './styles';

interface IProps {
    category: CategoriesType;
}

export const Products: FC<IProps> = ({ category }) => {
    return (
        <Wrapper>
            <Container>
                <Top />
                <Content category={category} />
                <StyledLink href={`/${category}`}>see all</StyledLink>
            </Container>
        </Wrapper>
    );
};
