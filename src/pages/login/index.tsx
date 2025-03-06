import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Login from '../../components/Login'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Login />
    <Footer />
    </>
  );
};

export default Home;