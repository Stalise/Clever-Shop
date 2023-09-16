import { createGlobalStyle } from 'styled-components';

import { colorVariables } from './color-variables-styles';
import { nullStyles } from './null-styles';
import { typographyVariables } from './typography-variables-styles';

import 'swiper/css';

export default createGlobalStyle`
    ${nullStyles}
    ${colorVariables}
    ${typographyVariables}

    * {
        font-weight: 400;
        font-size: var(--typography-spartan-size-m);
        font-family: var(--font-spartan);
        line-height: var(--typography-spartan-height-m);
    }
`;
