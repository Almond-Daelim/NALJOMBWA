import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import Button from '../components/common/Button/Button';
import ArrowButton from '../components/common/Button/ArrowButton/ArrowButton';
import Switcher from '../components/common/DarkMode/Switcher';
import MainPage from './MainPage';
import Weather from '../Api/Weather/Weather';

const Home = () => {
  const handleClickRight = () => {
    alert('right');
  };
  const handleClickLeft = () => {
    alert('left');
  };
  const moveCityData = x => {
    console.log(x);
  };

  return (
    <div>
      <Header />
      <MainPage />
      <Weather moveCityData={moveCityData} />
      <Switcher />
      <ArrowButton
        direction="left"
        onPress={() => handleClickLeft()}
      />
      <ArrowButton
        direction="right"
        onPress={() => handleClickRight()}
      />
      <Button
        title={'가평의 추천 관광지 \n 리스트 보러 가기 →'}
        onPress={() => alert('asdf')}
      />
      <Footer />
    </div>
  );
};

export default Home;
