import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        /** Colors */

        --dark: #121212;
        --dark-grey: #9c9c9c;
        --grey: #e5e5e5;
        --gr-white: #f8f8f8;
        --white: #fff;
        --pink: #e91e63;
        --yellow: #f0cc84;
        --red: #d61313;
        --green: #0bb17f;

        /** With transparency */

        --dark-shadow: rgb(18 18 18 / 40%);
        --white-08: rgb(255 255 255 / 80%);
    }
`;
