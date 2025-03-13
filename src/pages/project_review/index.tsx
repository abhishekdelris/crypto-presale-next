import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; 
import Project_review from '../../components/Project_review'; 

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Project_review />
    <Footer />
    </>
  );
};

export default Home;