import type { FC } from 'react';
import React from 'react';

import { StyledIconButton } from './styles';
import { IIconButtonProps } from './types';

export const IconButton: FC<IIconButtonProps> = ({
    children,
    isFill,
    onClick,
}) => (
    <StyledIconButton isFill={isFill} onClick={onClick}>
        {children}
    </StyledIconButton>
);
