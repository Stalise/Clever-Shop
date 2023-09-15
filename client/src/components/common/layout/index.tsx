import React, { FC } from 'react';

import { Footer } from './footer';
import { Header } from './header';

import { Main, Wrapper } from './styles';

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => (
    <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
);
