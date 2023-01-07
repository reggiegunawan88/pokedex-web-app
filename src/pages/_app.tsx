import { ReactNode } from 'react';

import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <>
      <Head>
        <title>Pokedex Apps</title>
        <meta name="description" content="Pokedex Web Apps by Reggie Gunawan" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="theme-color" content="#61C7B5" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          key="icon16"
        /> */}
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
