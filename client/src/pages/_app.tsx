import React, { FC } from 'react';
import type { AppProps } from 'next/app';

import isValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

import GlobalStyles from 'assets/styles/global-styles';

import { Layout } from 'components/common/layout';

StyleSheetManager;

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <React.Fragment>
        <StyleSheetManager shouldForwardProp={isValid}>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyleSheetManager>
    </React.Fragment>
);

export default App;
