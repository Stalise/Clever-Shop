import { css, FlattenSimpleInterpolation } from 'styled-components';

import type { FontSizeSpartan, FontWeightSpartan } from 'types/styles/fonts';

type FontSpartanType = (
    size?: FontSizeSpartan,
    weight?: FontWeightSpartan
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
