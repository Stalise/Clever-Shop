import type { ReactNode } from 'react';

import { RuleSet } from 'styled-components';

import type { ColorVariablesType } from 'types/styles/color-variables';
import { SvgSisezType } from 'types/ui';

type ViewType = 'accent' | 'filled';

export interface IStyledProps {
    $styles: RuleSet;
    $size: SvgSisezType;
    $view: ViewType;
    $isActive: boolean;
}

export interface IProps {
    children: ReactNode;
    color?: ColorVariablesType | 'transparent';
    outline?: ColorVariablesType | 'none';
    styles?: RuleSet;
    size?: SvgSisezType;
    view?: ViewType;
    isActive?: boolean;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type DimensionsType = {
    [key in SvgSisezType]: {
        width: string;
        height: string;
    };
};
