import { FC } from 'react';

import { Content } from './content';
import { Top } from './top';

import { Container, StyledLink, Wrapper } from './styles';

interface IProps {
    category: 'men' | 'women';
}

export const Products: FC<IProps> = ({ category }) => {
    return (
        <Wrapper>
            <Container>
                <Top />
                <Content />
                <StyledLink href={`/${category}`}>see all</StyledLink>
            </Container>
        </Wrapper>
    );
};
