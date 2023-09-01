import React, { FC } from 'react';
import type { AppProps } from 'next/app';

import GlobalStyles from 'assets/styles/global-styles';

import { Layout } from 'components/common/layout';

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <React.Fragment>
        <GlobalStyles />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </React.Fragment>
);

export default App;
