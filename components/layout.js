import Head from 'next/head';
import MainHeader from './main-header';
import Footer from './footer';

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <meta name="”robots”" content="”nofollow”" />
        <meta
          name="description"
          content="Software Engineer Juan Perez, an empathic, proactive, detail oriented and organized individual with years of experience in automotive providing technical support and repair. ペレツ ハワン Javascript の　プログラマー です。"
        />
        <meta
          name="keywords"
          content="Javascript, Developer, Tokyo, Japan, Reactjs, Gatsbyjs, Cyber Security, HTML, CSS, Wordpress, 東京, プログラマー,  ウェブ開発者"
        />
        <meta
          name="author"
          content="Juan Perez  ペレツ ハワン All Rights Reserved."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>
          {title
            ? `${title} - Juan Perez | Software Engineer`
            : 'Juan Perez | Software Engineer'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
