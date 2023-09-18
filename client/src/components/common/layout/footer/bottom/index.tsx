import { FC } from 'react';
import Image from 'next/image';

import { data } from './data';

import { Container, Content, StyledLink, Wrapper } from './styles';

export const Bottom: FC = () => {
    return (
        <Wrapper>
            <Container>
                <span>Copyright © 2023 all rights reserved</span>
                <Content>
                    {data.map(({ path, width }) => (
                        <div key={path}>
                            <Image
                                src={path}
                                priority
                                width={width}
                                height={16}
                                alt='payment'
                            />
                        </div>
                    ))}
                </Content>
                <StyledLink href='https://github.com/Stalise' target='_blank'>
                    Stalise
                </StyledLink>
            </Container>
        </Wrapper>
    );
};
