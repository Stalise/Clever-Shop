import { FC } from 'react';

import { Bottom } from './bottom';
import { Top } from './top';

import { Wrapper } from './styles';

export const Header: FC = () => {
    return (
        <Wrapper>
            <Top />
            <Bottom />
        </Wrapper>
    );
};
