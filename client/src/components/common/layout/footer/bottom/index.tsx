import { FC } from 'react';
import Image from 'next/image';

import { Container, Content, Copyright, StyledLink, Wrapper } from './styles';

const data = [
    { path: '/static/stripe_monochrome.png', width: 43, height: 16 },
    { path: '/static/aes_monochrome.png', width: 31, height: 16 },
    { path: '/static/paypal_monochrome.png', width: 61, height: 16 },
    { path: '/static/visa_monochrome.png', width: 52, height: 16 },
    { path: '/static/mastercard_monochrome.png', width: 27, height: 16 },
    { path: '/static/discover_monochrome.png', width: 50, height: 16 },
    { path: '/static/american-express_monochrome.png', width: 47, height: 16 },
];

export const Bottom: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Copyright>Copyright © 2023 all rights reserved</Copyright>
                <Content>
                    {data.map(({ path, width, height }) => (
                        <div key={path}>
                            <Image
                                src={path}
                                priority
                                width={width}
                                height={height}
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
