import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlier = props => {
  const tourData = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const rendering = () => {
    const result = [];
    let count = 5;
    for (let i = 0; i <= count; i++) {
      if (tourData.data[i].firstimage) {
        result.push(
          <div
            key={i}
            className="max-w-2xl h-80 relative"
          >
            <img
              className="w-[100%] object-cover brightness-50"
              src={tourData.data[i].firstimage}
              alt={tourData.data[i].title + '이미지'}
            />
            <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
              {tourData.data[i].title}
            </p>
          </div>,
        );
      } else {
        count++;
      }
    }
    return result;
  };
  return (
    <div className="shadow-md relative">
      <h2 className="text-white font-bold absolute text-2xl inset-5 z-10 before:content-[''] before:inline-block">
        오늘의 관광지 어디로 가볼까?
      </h2>
      <Slider {...settings}>{rendering()}</Slider>
    </div>
  );
};

export default CardSlier;
