import type { FC } from 'react';
import React from 'react';

import { StyledButton } from './styles';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({
    buttonTheme,
    fontSize,
    fontWeight,
    lineHeight,
    outline,
    text,
    width,
    onClick,
}) => (
    <StyledButton
        buttonTheme={buttonTheme}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        outline={outline}
        onClick={onClick}
        width={width}
    >
        {text}
    </StyledButton>
);
