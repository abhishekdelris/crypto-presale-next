import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import HomePage from '../components/HomePage'; 

const Home: NextPage = () => {
  return (
    <>
 
    <Header />
    <HomePage />
    <Footer />
    </>
  );
};

export default Home;