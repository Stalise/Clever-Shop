import { FC } from 'react';

import { Content } from './content';
import { Top } from './top';

import { Wrapper } from './styles';

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Top />
            <Content />
            <div style={{ height: '540px' }} />
        </Wrapper>
    );
};
