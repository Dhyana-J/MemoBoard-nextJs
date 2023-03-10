import Document, { Html, Head, Main, NextScript } from 'next/document';
import Notes from 'src/Data';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
