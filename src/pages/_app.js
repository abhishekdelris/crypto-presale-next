import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css'; 
import '../styles/FAQAccordion.css';
import '../styles/changes.css';
import '../styles/homePage.css';
import '../styles/submitCoins.css';
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       
        <title>Crypto Presale</title>
        <meta name="description" content="Buy crypto in presale and get huge benefits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
