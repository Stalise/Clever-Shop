import { FC } from 'react';

import { Socials } from 'components/common/socials';

import { Subscribe } from './subscribe';

import { Container, Text, Wrapper } from './styles';

export const Top: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Text>BE IN TOUCH WITH US:</Text>
                <Subscribe />
                <Socials />
            </Container>
        </Wrapper>
    );
};
