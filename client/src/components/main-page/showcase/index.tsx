import { FC } from 'react';

import { Categories } from './categories';
import { Slider } from './slider';

import { Container, Wrapper } from './styles';

export const Showcase: FC = () => (
    <Wrapper>
        <Container>
            <Slider />
            <Categories />
        </Container>
    </Wrapper>
);
