import { createGlobalStyle } from 'styled-components';

import { colorVariables } from './color-variables-styles';
import { nullStyles } from './null-styles';
import { typographyVariables } from './typography-variables-styles';

export default createGlobalStyle`
    ${nullStyles}
    ${colorVariables}
    ${typographyVariables}

    * {
        font-weight: 400;
        font-size: 14px;
        font-family: var(--font-spartan);
        line-height: 12px;
    }
`;
