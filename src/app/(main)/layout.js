
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../styles/globals.css'; 
import '../../styles/FAQAccordion.css';
import '../../styles/changes.css';
import '../../styles/homePage.css';
import '../../styles/submitCoins.css';
import '../../styles/post.css';
import '../../styles/ico.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthProvider } from '../../hooks/authContext';
import "@/app/api/cron/route"; // Import cron job so it starts
// import { SessionProvider } from 'next-auth/react';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
        <link rel="icon" href="/favicon.ico" />
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          />
           <link 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>
      </head>
      <body suppressHydrationWarning={true} className='layout121'>
      <AuthProvider>
        <Header />
        <main className='content121'>
        {/* <SessionProvider> */}
        {children}
        {/* </SessionProvider> */}
        </main>
      
        <Footer />
     
      
          </AuthProvider>
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha384-oP2pQ3brw2rJ5K6l9tgtZyT/9fuNfw3h4a7lHXuW5RAyghA1Jf9Yc3ybVnt9rUt9"
            crossOrigin="anonymous"
          ></script>
      </body>
    </html>
  );
}
  

