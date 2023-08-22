import { RuleSet } from 'styled-components';

export type SizeType = 's' | 'm' | 'l';

export interface IStyledProps {
    styles: RuleSet;
}

export interface IProps extends Partial<IStyledProps> {
    rating: number;
    size?: SizeType;
    onClick?: (value: number) => void;
}

export type DimensionsType = {
    [key in SizeType]: number;
};
