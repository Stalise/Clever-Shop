import { FC } from 'react';

import { StyledLink, Wrapper } from './styles';

const data = [
    { text: 'About Us', path: '#!' },
    { text: 'Women', path: 'women' },
    { text: 'Men', path: 'men' },
    { text: 'Beauty', path: '#!' },
    { text: 'Accessories', path: '#!' },
    { text: 'Blog', path: '#!' },
    { text: 'Contact', path: '#!' },
];

export const Navigation: FC = () => (
    <Wrapper>
        {data.map(({ text, path }) => (
            <StyledLink href={path} key={text}>
                {text}
            </StyledLink>
        ))}
    </Wrapper>
);
