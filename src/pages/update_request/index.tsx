import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Update_request from '../../components/Update_request'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Update_request />
    <Footer />
    </>
  );
};

export default Home;