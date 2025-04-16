// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import '../styles/globals.css'; 
// import '../styles/FAQAccordion.css';
// import '../styles/changes.css';
// import '../styles/homePage.css';
// import '../styles/submitCoins.css';
// import '../styles/post.css';
// import React from 'react'
// import Head from 'next/head'
// import Header from '../components/Header'; 
// import Footer from '../components/Footer';
// import AdminHeader from '../components/admin/AdminHeader';
// import AdminFooter from '../components/admin/AdminFooter';

// function MyApp({ Component, pageProps }) {
//   const isAdminRoute = Component?.name?.toLowerCase().includes('admin') || pageProps?.isAdmin;

//   return isAdminRoute ?  (
//   <>
//   <Head>
       
//        <title>Crypto Presale</title>
//        <meta name="description" content="Buy crypto in presale and get huge benefits." />
//        <link rel="icon" href="/favicon.ico" />
//      </Head>

//     <AdminHeader />
//       <Component {...pageProps} />
//     <AdminFooter />
//   </>
//   ) :  (
//     <>
//       <Head>
       
//         <title>Crypto Presale</title>
//         <meta name="description" content="Buy crypto in presale and get huge benefits." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Header />
//       {/* {loading ? <Loading /> : <Component {...pageProps} />} */}
//       <Component {...pageProps}  class="content"/>
//       <Footer />
//     </>
//   )
// }

// export default MyApp;

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css'; 
import '../styles/FAQAccordion.css';
import '../styles/changes.css';
import '../styles/homePage.css';
import '../styles/submitCoins.css';
import '../styles/post.css';
import '../styles/ico.css';
import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminFooter from '../../components/admin/AdminFooter';
import { AuthProvider } from '../../hooks/authContext';

function MyApp({ Component, pageProps }) {
  const isAdminRoute = Component?.name?.toLowerCase().includes('admin') || pageProps?.isAdmin;

  return isAdminRoute ? (
    <>
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminHeader />
      <Component {...pageProps} />
      <AdminFooter />
    </>
  ) : (
    <div className="layout121">
      <Head>
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
      <Header />
      <main className="content121">
      <Component {...pageProps} />
      </main>
      </AuthProvider>
      <Footer />
    </div>
  )
}

export default MyApp;
