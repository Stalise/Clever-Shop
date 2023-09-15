import styled from 'styled-components';

import { interFont, spartanFont } from 'assets/styles/fonts';

export const Wrapper = styled.div.attrs({
    className: `${spartanFont.variable}  ${interFont.variable}`,
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

export const Main = styled.main`
    flex: 1 0 auto;
    width: 100%;
`;
