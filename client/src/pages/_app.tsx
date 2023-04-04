import '../styles/globals.css';
import type {AppProps} from 'next/app';

import {Layout} from 'components/common/layout';

import {FC} from 'react';

const App: FC<AppProps> = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
