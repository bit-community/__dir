import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#062c3f" />
                    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
