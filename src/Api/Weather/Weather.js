import { useState, useEffect } from 'react';
import WeatherData from './Datas/WeatherData';
import axios from 'axios';
const Weather = ({ moveCityData }) => {
  const [weather, setWeather] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [clearDay, setClearDay] = useState(null);

  useEffect(() => {
    const api = {
      key: '15b219f6bddece5f0895da2453e11ccb',
      base: 'https://api.openweathermap.org/data/2.5/',
      lang: 'kr',
      units: 'metric',
    };
    const shuffleWeather = shuffle(WeatherData);
    const dataList = shuffleWeather.map(data => {
      return data.city_id;
    });
    const city_id = dataList.join();
    const url = `${api.base}group?id=${city_id}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    if ((Date.now() - localStorage.getItem('saveDate')) / 1000 / 60 > 60) {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          console.log('성공');
          setWeather({
            data: data.list,
          });
          localStorage.setItem('cityData', JSON.stringify(data.list));
          localStorage.setItem('saveDate', Date.now());
          setData(data.list);
        })
        .catch(err => {
          console.log('실패');
          console.log(err);
          setApiError(err);
        });
    } else {
      setWeather({
        data: JSON.parse(localStorage.getItem('cityData')),
      });
      setData(JSON.parse(localStorage.getItem('cityData')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const shuffle = arr => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const setData = weather => {
    const isClear = element => {
      if (element.weather[0].main === 'Clear') {
        return true;
      }
    };
    const isClouds = element => {
      if (element.weather[0].main === 'Clouds') {
        return true;
      }
    };
    const isAbout = element => {
      return true;
    };
    const trName = clear => {
      let city = null;
      WeatherData.map(data => {
        if (clear.id === parseInt(data.city_id)) {
          city = data.kr;
        }
        return null;
      });
      return city;
    };
    let clear = weather.find(isClear);
    if (clear === undefined) {
      clear = weather.find(isClouds);
      if (clear === undefined) {
        clear = weather.find(isAbout);
      }
    }
    setCityName(trName(clear));
    moveCityData(trName(clear));
    setClearDay(clear);
  };

  const makeWeatherInfo = () => {
    return (
      <div>
        <ul>
          <li className="block text-center font-bold dark:text-white">{`${cityName}`}</li>
          <img
            src={`http://openweathermap.org/img/wn/${clearDay.weather[0].icon.slice(
              0,
              -1,
            )}d@2x.png`}
            alt="weatherIcon"
          />
          <li className="block text-center font-bold dark:text-white">{`${clearDay.main.temp}`}</li>
          <li className="block text-center font-bold dark:text-white">{`${clearDay.weather[0].main}`}</li>
        </ul>
      </div>
    );
  };
  // eslint에서 삼항연산자 중첩 사용시 Do not nest ternary expressions이 발생
  const check = () => {
    if (apiError) {
      return <div>정보없음</div>;
    } else if (weather) {
      return makeWeatherInfo();
    } else {
      <div>정보없음</div>;
    }
  };

  return (
    <div className="flex w-[256px] h-[286px] rounded-lg shadow-lg bg-white dark:bg-gray-900">
      <div className="m-auto">{check()}</div>
    </div>
  );
};

export default Weather;
