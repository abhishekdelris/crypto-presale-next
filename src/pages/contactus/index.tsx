import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import ContactUs from '../../components/ContactUs'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <ContactUs />
    <Footer />
    </>
  );
};

export default Home;