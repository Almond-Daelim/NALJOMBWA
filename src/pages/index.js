import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import MainPage from './MainPage';

const Home = () => {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default Home;
