import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';

import { Layout } from 'components/common/layout';

import '../styles/globals.css';

const spartanFont = localFont({
    src: '../font/Spartan.ttf',
});

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <React.Fragment>
        <Head>
            <title>Clever-Shop</title>
        </Head>
        <div className={spartanFont.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    </React.Fragment>
);

export default App;
