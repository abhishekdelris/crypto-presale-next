import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css'; 
import '../styles/FAQAccordion.css';
import '../styles/changes.css';
import '../styles/homePage.css';
import '../styles/submitCoins.css';
// import '../styles/footer.css';
import '../styles/post.css';
// import { useState, useEffect } from 'react';
// import Loading from './loading';
// import { useRouter } from 'next/router';
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, [router]);

  return (
    <>
      <Head>
       
        <title>Crypto Presale</title>
        <meta name="description" content="Buy crypto in presale and get huge benefits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* {loading ? <Loading /> : <Component {...pageProps} />} */}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;


