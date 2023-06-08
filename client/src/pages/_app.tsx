import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { interFont, spartanFont } from 'styles/fonts';
import GlobalStyles from 'styles/global-styles';

import { Layout } from 'components/common/layout';

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <React.Fragment>
        <Head>
            <title>Clever-Shop</title>
        </Head>
        <div className={`${spartanFont.variable}  ${interFont.variable}`}>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    </React.Fragment>
);

export default App;
