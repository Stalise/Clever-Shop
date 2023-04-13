import React, { FC } from 'react';

import { Wrapper } from './styles';

interface IProps {
    children: React.ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => (
    <React.Fragment>
        <Wrapper>{children}</Wrapper>
    </React.Fragment>
);
