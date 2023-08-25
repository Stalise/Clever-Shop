import { FC } from 'react';

import { Wrapper } from './styles';

const data = [
    'new arrivals',
    'specials',
    'bestsellers',
    'most viewed',
    'featured products',
];

export const Top: FC = () => {
    return (
        <Wrapper>
            <h2>WOMEN&apos;S</h2>
            <ul>
                {data.map((item) => (
                    <li key={item}>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};
