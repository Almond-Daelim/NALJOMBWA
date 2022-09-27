import React from 'react';
import Header from '../components/common/Layout/Header';
import Footer from '../components/common/Layout/Footer';
import Button from '../components/common/Button/Button';
import ArrowButton from '../components/common/Button/ArrowButton/ArrowButton';

const Home = () => {
  const handleClickRight = () => {};
  const handleClickLeft = () => {};

  return (
    <div>
      <Header />
      <ArrowButton
        direction={'left'}
        onPress={() => alert('left')}
      />
      <ArrowButton
        direction={'right'}
        onPress={() => alert('right')}
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
