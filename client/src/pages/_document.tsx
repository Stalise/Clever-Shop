/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./static/clevertec.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="./static/clevertec.ico"
          sizes="180x180"
          type="image/x-icon"
        />
        <title>Clever-Shop</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
