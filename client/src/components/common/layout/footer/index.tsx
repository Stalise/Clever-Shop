import { FC } from 'react';

import { Top } from './top';

import { Wrapper } from './styles';

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Top />
            <div style={{ height: '540px' }} />
        </Wrapper>
    );
};
