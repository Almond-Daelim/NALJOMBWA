import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlier = props => {
  const tourData = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="shadow-md relative">
      <h2 className="text-white font-bold absolute text-2xl inset-5 z-10 before:content-[''] before:inline-block">
        오늘의 관광지 어디로 가볼까?
      </h2>
      <Slider {...settings}>
        <div className="max-w-2xl h-80 relative">
          <img
            className="w-[100%] object-cover brightness-50"
            src={tourData.data[0].firstimage}
            alt={tourData.data[0].title + '이미지'}
          />
          <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
            {tourData.data[0].title}
          </p>
        </div>
        <div className="max-w-2xl h-80 relative">
          <img
            className="w-[100%] object-cover brightness-50"
            src={tourData.data[1].firstimage}
            alt={tourData.data[1].title + '이미지'}
          />
          <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
            {tourData.data[1].title}
          </p>
        </div>
        <div className="max-w-2xl h-80 relative">
          <img
            className="w-[100%] object-cover brightness-50"
            src={tourData.data[2].firstimage}
            alt={tourData.data[2].title + '이미지'}
          />
          <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
            {tourData.data[2].title}
          </p>
        </div>
        <div className="max-w-2xl h-80 relative">
          <img
            className="w-[100%] object-cover brightness-50"
            src={tourData.data[3].firstimage}
            alt={tourData.data[3].title + '이미지'}
          />
          <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
            {tourData.data[3].title}
          </p>
        </div>
        <div className="max-w-2xl h-80 relative">
          <img
            className="w-[100%] object-cover brightness-50"
            src={tourData.data[4].firstimage}
            alt={tourData.data[4].title + '이미지'}
          />
          <p className="absolute text-white left-16 top-1/4 z-20 text-xl">
            {tourData.data[4].title}
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlier;
