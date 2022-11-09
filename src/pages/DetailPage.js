import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Layout/Footer';
import Header from '../components/common/Layout/Header';
import TourListPage from './TourListPage';
const Detail = () => {
  const location = useLocation();
  const title = location.state.title;
  const firstimage = location.state.firstimage;
  const addr1 = location.state.addr1;
  const contentId = location.state.contentId;
  const contentTypeId = location.state.contentTypeTd;
  const restDate = location.state.restDate;
  console.log(restDate);
  return (
    <>
      <Header />
      <TourListPage
        pageNo={2}
        contentId={contentId}
        contentTypeId={contentTypeId}
      />
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
          <div className="flex">
            <div className="flex-wrap h-[424px] bg-slate-200">
              <div className=" w-[243px] h-[74px] ">주소</div>
              <div className="  w-[243px] h-[74px] ">개장일</div>
              <div className="  w-[243px] h-[74px] ">쉬는날</div>
              <div className="  w-[243px] h-[74px] ">이용시간</div>
              <div className="  w-[243px] h-[74px] ">주차시설</div>
              <div className="  w-[243px] h-[74px] ">홈페이지</div>
            </div>
            <div className="flex-wrap h-[424px]">
              <div className=" w-[486px] h-[74px] ">{addr1}</div>
              <div className="  w-[486px] h-[74px] ">개장일</div>
              <div className="  w-[486px] h-[74px] ">쉬는날</div>
              <div className="  w-[486px] h-[74px] ">이용시간</div>
              <div className="  w-[486px] h-[74px] ">주차시설</div>
              <div className="  w-[486px] h-[74px] ">홈페이지</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detail;
