import React, { useState } from 'react';
import Button from '../components/common/Button/Button';
import Weather from '../Api/Weather/Weather';
import TourListPage from './TourListPage';
import Slick from '../components/common/Slick/Slick';

const MainPage = () => {
  const [cityName, setCityName] = useState(null);
  const moveCityData = x => {
    console.log(x);
    setCityName(x);
  };
  return (
    <>
      <div class="lg:flex lg:justify-evenly lg:items-center lg:mt-7 mb-16 max-w-screen-2xl mx-auto">
        <div class="lg:flex-auto bg-slate-200 w-full lg:max-w-2xl dark:bg-slate-600 shadow-md">
          <div class="flex justify-evenly items-center lg:py-4 py-24 max-w-2xl mx-auto">
            <div class="flex-initial">
              <Weather moveCityData={moveCityData} />
            </div>
            <div class="flex-initial text-center">
              <h3 class="mx-auto text-2xl font-bold dark:text-white">
                오늘의 관광지 추천!
              </h3>
              <div class="text-2xl my-6 dark:text-white">{cityName}</div>
              <Button
                title={`${cityName}의 추천 관광지 \n 리스트 보러 가기 →`}
                onPress={() => alert('asdf')}
              />
            </div>
          </div>
        </div>
        <div class="lg:flex-auto lg:max-w-2xl lg:mt-0 mt-5">
          <div class="max-w-2xl mx-auto bg-slate-400">
            {cityName ? (
              <Slick
                pageNo={1}
                keyWord={cityName}
              />
            ) : (
              <div>정보없음</div>
            )}
          </div>
        </div>
      </div>
      <div class="max-w-screen-2xl mx-auto">
        <h3 class="text-2xl font-bold mb-4 md:text-left text-center md:ml-20 ml-0 dark:text-white">
          오늘의 관광지 {cityName}과 함께 찾으면 좋은곳! PICK!
        </h3>
        {cityName ? (
          <TourListPage
            pageNo={1}
            keyWord={cityName}
          />
        ) : (
          <div>정보없음</div>
        )}
      </div>
    </>
  );
};

export default MainPage;
