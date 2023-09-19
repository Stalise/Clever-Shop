import { FC } from 'react';

import { data } from './data';

import { Wrapper } from './styles';

export const Interaction: FC = () => (
    <Wrapper>
        {data.map(({ Icon, text }) => (
            <button key={text}>
                <Icon color='transparent' stroke='var(--dark-grey)' />
                <span>{text}</span>
            </button>
        ))}
    </Wrapper>
);
