import { FC } from 'react';

import { Socials } from 'components/common/socials';

import { Info } from './info';

import { Container, Wrapper } from './styles';

export const Top: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Info />
                <Socials />
            </Container>
        </Wrapper>
    );
};
