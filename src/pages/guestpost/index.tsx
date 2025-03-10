import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import GuestPost from '../../components/GuestPost'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <GuestPost />
    <Footer />
    </>
  );
};

export default Home;