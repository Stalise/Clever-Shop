import { FC } from 'react';
import type { AppProps } from 'next/app';

import { Layout } from 'components/common/layout';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default App;
