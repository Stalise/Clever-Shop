/* eslint-disable @next/next/no-title-in-document-head */
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class AppDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        // gets the styles from all the components inside <App>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                // 👇 insert the collected styles to the html document
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='icon'
                        href='./static/clevertec.ico'
                        type='image/x-icon'
                    />
                    <link
                        rel='apple-touch-icon'
                        href='./static/clevertec.ico'
                        sizes='180x180'
                        type='image/x-icon'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
