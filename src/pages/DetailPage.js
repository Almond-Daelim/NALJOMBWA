import { useLocation } from 'react-router-dom';
import Header from '../components/common/Layout/Header';
const Detail = () => {
  const location = useLocation();
  const title = location.state.title;
  const firstimage = location.state.firstimage;
  const addr1 = location.state.addr1;
  return (
    <>
      <Header />
      <div className="flex justify-center min-w-[730.25px]">
        <div className="flex-wrap justify-center row-auto">
          <div className="flex justify-center w-[730.25px] h-[730.75px] bg-slate-500 rounded-[15px]">
            <img
              className="w-[100%] object-cover rounded-[15px]"
              src={firstimage}
              alt={title + '이미지'}
            />
          </div>
          <div className="flex w-[730.25px] ">
            <ul>
              <li>{title}</li>
              <li>{addr1}</li>
            </ul>
          </div>
          <div className="flex w-[732.25px] h-[54px] bg-slate-200">
            <div className="flex justify-center w-[243px] h-[54px] bg-slate-300">
              <ul className="flex items-center">
                <li>기본정보</li>
              </ul>
            </div>
            <div className="flex justify-center w-[243px] h-[54px] bg-slate-300">
              <ul className="flex items-center">
                <li>소개</li>
              </ul>
            </div>
            <div className="flex justify-center w-[243px] h-[54px] bg-slate-300">
              <ul className="flex items-center">
                <li>선호도</li>
              </ul>
            </div>
          </div>
          <div className="flex-wrap w-[730.25px] h-[508px] bg-slate-200">
            <div className=" w-[243px] h-[74px] bg-lime-100">주소</div>
            <div className="  w-[243px] h-[74px] bg-lime-300">개장일</div>
            <div className="  w-[243px] h-[74px] bg-lime-500">쉬는날</div>
            <div className="  w-[243px] h-[74px] bg-lime-700">이용시간</div>
            <div className="  w-[243px] h-[74px] bg-teal-50">주차시설</div>
            <div className="  w-[243px] h-[74px] bg-teal-200">홈페이지</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
