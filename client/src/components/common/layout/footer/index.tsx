import { FC } from 'react';

import { Bottom } from './bottom';
import { Content } from './content';
import { Top } from './top';

import { Wrapper } from './styles';

export const Footer: FC = () => {
    return (
        <Wrapper>
            <Top />
            <Content />
            <Bottom />
        </Wrapper>
    );
};
