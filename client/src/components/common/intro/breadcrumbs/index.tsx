import { FC } from 'react';

import { IBreadcrumbs } from 'types/breadcrumbs';

import { List, StyledLink, Wrapper } from './styles';

interface IProps {
    breadcrumbs: IBreadcrumbs;
}

export const Breadcrumbs: FC<IProps> = ({ breadcrumbs }) => (
    <Wrapper>
        <List>
            {breadcrumbs.map(({ text, path }) => (
                <li key={text}>
                    {path ? (
                        <StyledLink href={path ? path : ''}>
                            {text}&nbsp;<em>&raquo;</em>&nbsp;
                        </StyledLink>
                    ) : (
                        <span>{text}</span>
                    )}
                </li>
            ))}
        </List>
    </Wrapper>
);
