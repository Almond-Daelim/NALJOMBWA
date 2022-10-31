import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import MainPage from './MainPage';

const Home = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default Home;
