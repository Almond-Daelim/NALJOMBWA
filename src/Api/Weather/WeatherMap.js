import { useState, useEffect } from 'react';
import WeatherData from './Datas/WeatherData';
import axios from 'axios';
import img from '../../assets/map.jpg';

const WeatherMap = () => {
  const [weather, setWeather] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const api = {
      key: '15b219f6bddece5f0895da2453e11ccb',
      base: 'https://api.openweathermap.org/data/2.5/',
      lang: 'kr',
      units: 'metric',
    };
    const dataList = WeatherData.map(data => {
      return data.city_id;
    });
    const city_id = dataList.join();
    const url = `${api.base}group?id=${city_id}&appid=${api.key}&units=${api.units}&lang=${api.lang}`;
    axios
      .get(url)
      .then(res => {
        const data = res.data;
        console.log('성공');
        setWeather({
          data: data.list,
          loading: false,
        });
      })
      .catch(err => {
        console.log('실패');
        console.log(err);
        setApiError(err);
      });
  }, []);

  const test = test => {
    let city = null;
    let location = null;
    WeatherData.map(data => {
      if (test.id === parseInt(data.city_id)) {
        city = data.kr;
        location = data.location;
      }
      return null;
    });
    return {
      city,
      location,
    };
  };

  const makeWeatherMap = () => {
    return (
      <div className="max-w-xl relative mx-auto p-5 bg-blue-100 border-black dark:border-white border-x-4 border-b-4 shadow-xl dark:bg-slate-400">
        <img
          className="object-fill dark:invert"
          src={img}
          alt="weather-map"
        />
        {weather.data.map((city, idx) => {
          let aa = test(city);
          let temp = Math.round(city.main.temp);
          return (
            <div
              key={idx}
              className={aa.location}
            >
              <span>{aa.city}</span>
              <span>{temp}°C</span>
              <img
                className="inline-block"
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon.slice(
                  0,
                  -1,
                )}d.png`}
                alt="weatherIcon"
              />
            </div>
          );
        })}
      </div>
    );
  };

  const check = () => {
    if (apiError) {
      return <div>정보없음</div>;
    } else if (weather) {
      return makeWeatherMap();
    } else {
      <div>정보없음</div>;
    }
  };

  return <div className="m-auto">{check()}</div>;
};

export default WeatherMap;
