import type { ReactNode } from 'react';

import { RuleSet } from 'styled-components';

import type { ColorVariablesType } from 'types/styles/color-variables';

type SizeType = 's' | 'm' | 'l' | 'xl';
type ViewType = 'accent' | 'filled';

export interface IStyledProps {
    styles: RuleSet;
    size: SizeType;
    view: ViewType;
    isActive: boolean;
}

export interface IProps extends Partial<IStyledProps> {
    color?: ColorVariablesType | 'transparent';
    outline?: ColorVariablesType | 'none';
    children: ReactNode;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type DimensionsType = {
    [key in SizeType]: {
        width: string;
        height: string;
    };
};
