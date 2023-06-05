import { css, FlattenSimpleInterpolation } from 'styled-components';

type FontSpartanType = (
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl',
    weight?: '400' | '500' | '600'
) => FlattenSimpleInterpolation;

export const fontSpartan: FontSpartanType = (
    size = 'xs',
    weight = '400'
) => css`
    font-weight: ${weight};
    font-size: var(--typography-spartan-size-${size});
    font-family: var(--font-spartan);
    line-height: var(--typography-spartan-height-${size});
`;

export const fontInter = css`
    font-weight: 400;
    font-size: var(--typography-inter-size-xs);
    font-family: var(--font-inter);
    line-height: var(--typography-inter-height-xs);
`;
