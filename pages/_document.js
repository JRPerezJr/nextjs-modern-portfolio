import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link
            rel="preload"
            href="/fonts/Poppins-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Poppins-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-body text-white font-poppins pb-12 select-none">
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
