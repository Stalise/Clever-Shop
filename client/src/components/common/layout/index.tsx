import React, { FC } from 'react';

import { interFont, spartanFont } from 'assets/styles/fonts';

import { Footer } from './footer';
import { Header } from './header';

import { Main, Wrapper } from './styles';

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => (
    <Wrapper className={`${spartanFont.variable}  ${interFont.variable}`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
);
