import { FC } from 'react';

import { IBreadcrumb } from 'types/breadcrumbs';

import { List, StyledLink, Wrapper } from './styles';

interface IProps {
    breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs: FC<IProps> = ({ breadcrumbs }) => (
    <Wrapper>
        <List>
            {breadcrumbs.map(({ text, path }, index) => (
                <li key={index}>
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
