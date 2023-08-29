import { FC } from 'react';
import { useRouter } from 'next/router';

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

export const Navigation: FC = () => {
    const {
        query: { category },
    } = useRouter();

    return (
        <Wrapper>
            <ul>
                {data.map(({ text, path }) => (
                    <li key={text}>
                        <StyledLink href={path} selected={path === category}>
                            {text}
                        </StyledLink>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};
