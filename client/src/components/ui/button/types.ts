import { ReactNode } from 'react';

import { RuleSet } from 'styled-components';

import type { ColorVariablesType } from 'types/styles/color-variables';
import type { FontSizeSpartan, FontWeightSpartan } from 'types/styles/fonts';

type SizeType = 's' | 'm' | 'l';
type ViewType = 'accent' | 'primary' | 'secondary';

export interface IStyledProps {
    styles: RuleSet;
    view: ViewType;
    size: SizeType;
    block: boolean;
    outline: boolean;
}

export interface IProps extends Partial<IStyledProps> {
    children: ReactNode;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ViewsConfigType = {
    [key in ViewType]: {
        color: ColorVariablesType;
        backgroundColor: ColorVariablesType;
        outline: string;
        hover: {
            color?: ColorVariablesType;
            backgroundColor?: ColorVariablesType;
        };
        active: {
            color?: ColorVariablesType;
            backgroundColor?: ColorVariablesType;
        };
    };
};

export type DimensionsType = {
    [key in SizeType]: {
        width: string;
        padding: string;
    };
};

export type TypographyType = {
    [key in SizeType]: {
        size: FontSizeSpartan;
        weight: FontWeightSpartan;
    };
};
