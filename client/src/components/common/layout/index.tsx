import React, { FC } from 'react';

import { interFont, spartanFont } from 'assets/styles/fonts';

import { Wrapper } from './styles';

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => (
    <Wrapper className={`${spartanFont.variable}  ${interFont.variable}`}>
        {children}
    </Wrapper>
);
