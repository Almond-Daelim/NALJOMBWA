import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Layout/Footer';
import Header from '../components/common/Layout/Header';
import Tour from '../Api/Tour/Tour';
import TourDetailCommon from '../Api/Tour/TourDetailCommon';
const Detail = () => {
  // console.log('detatil');
  const location = useLocation();
  const title = location.state.title;
  const firstimage = location.state.firstimage;
  const addr1 = location.state.addr1;
  const contentId = location.state.contentId;
  const contentTypeId = location.state.contentTypeTd;
  const [detailData, setDetailData] = useState([]);
  const [overview, setOverView] = useState([]);
  let [clickTab, setClickTab] = useState(0);
  let overviewData;
  let hompage;
  let restdate;
  let usetime;
  let parking;
  let tel;
  let menu;

  const setContentData = newData => {
    setDetailData(newData);
  };
  const setOverViewData = newData => {
    setOverView(newData);
  };

  overview.map((post, idx) => {
    overviewData = post.overview;
    hompage = post.hompage;

    if (!hompage) {
      hompage = '홈페이지 정보 없음';
    }
    return idx;
  });

  detailData.map((post, idx) => {
    restdate =
      post.restdate ||
      post.restdatefood ||
      post.restdateculture ||
      post.restdateleports;
    usetime =
      post.opentimefood ||
      post.usetimeculture ||
      post.usetim ||
      post.usetimeleports;
    parking =
      post.parking ||
      post.parkingfood ||
      post.parkingculture ||
      post.parkingleports;

    tel =
      post.infocenter ||
      post.infocenterfood ||
      post.infocenterculture ||
      post.infocenterleports ||
      post.infocenterlodging;

    menu = post.treatmenu;

    if (!restdate) {
      restdate = '휴일 정보가 없습니다';
    }
    if (!usetime) {
      usetime = '이용시간 정보가 없습니다';
    }
    if (!parking) {
      parking = '주차시설 정보가 없습니다';
    }
    if (!tel) {
      tel = '전화번호 정보가 없습니다';
    }
    return idx;
  });
  // console.log(detailData);
  const check = () => {
    return detailData.length !== 0 ? (
      <>
        {detailData.map((post, idx) => (
          <div key={idx}>
            <div className="flex-wrap w-[485.25px] h-[100%] border-y-2 border-r-2">
              <div className=" w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                {addr1}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                {restdate}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                <p dangerouslySetInnerHTML={{ __html: usetime }} />
              </div>
              <div className="  w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                {parking}
                {post.parkingfee ? '/' + post.parkingfee : <> </>}
                {/* 무료 주차시설인지 확인 */}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                {tel}
              </div>
              {/* 주요 메뉴가 있는지 검사 */}
              {post.treatmenu ? (
                <div className="  w-[424px] h-[74px] flex items-center ml-3 dark:text-white">
                  {post.treatmenu}
                </div>
              ) : (
                <> </>
              )}
            </div>
          </div>
        ))}
      </>
    ) : (
      <p>정보 조회중...</p>
    );
  };

  return (
    <div class="dark:bg-slate-900">
      <Header />
      {/* Tab Menu */}
      {clickTab === 0 ? (
        <Tour
          pageNo={2}
          detailState={setContentData}
          contentId={contentId}
          contentTypeId={contentTypeId}
        />
      ) : (
        <TourDetailCommon
          pageNo={3}
          overviewState={setOverViewData}
          contentId={contentId}
          contentTypeId={contentTypeId}
        />
      )}
      <div className="flex justify-center min-w-[730.25px]">
        <div className="flex-wrap justify-center row-auto">
          <div className="flex justify-center w-[730.25px] h-[730.75px] bg-slate-500 rounded-[15px] mt-10">
            <img
              className="w-[100%] object-cover rounded-[15px] shadow-md"
              src={firstimage}
              alt={title + '이미지'}
            />
          </div>
          <div className="flex w-[730.25px] ">
            <ul>
              <li className="font-bold mt-5 text-3xl dark:text-white">
                {title}
              </li>
              <li className="mt-2.5 mb-5 relative text-xl dark:text-white">
                {' '}
                {addr1}
                <p className="before:content-[''] before:inline-block w-[100%] h-[20px] bg-yellow-200 absolute top-2 mix-blend-multiply dark:bg-gray-500">
                  <span className="hidden">{addr1}</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex w-[732.25px] h-[54px] border-2">
            <div
              className="flex justify-center w-[243px] h-[54px] bg-indigo-200 cursor-pointer hover:bg-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:text-white"
              onClick={() => {
                setClickTab(0);
              }}
            >
              <ul className="flex items-center ">
                <li>기본정보</li>
              </ul>
            </div>
            <div
              className="flex justify-center w-[243px] h-[54px] bg-indigo-200 cursor-pointer hover:bg-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:text-white"
              onClick={() => {
                setClickTab(1);
              }}
            >
              <ul className="flex items-center">
                <li>소개</li>
              </ul>
            </div>
            <div
              className="flex justify-center w-[243px] h-[54px] bg-indigo-200 cursor-pointer hover:bg-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:text-white"
              onClick={() => {
                setClickTab(2);
              }}
            >
              <ul className="flex items-center">
                <li>홈페이지</li>
              </ul>
            </div>
          </div>
          {/* Tab Menu E */}
          {/* 기본정보 */}
          {clickTab === 0 ? (
            <div className="flex ">
              <div className="flex-wrap h-[100%] bg-sky-100 dark:bg-sky-900 dark:text-white border-2">
                <div className=" w-[243px] h-[74px] flex items-center justify-center">
                  <p>주소</p>
                </div>
                <div className="  w-[243px] h-[74px] flex items-center justify-center">
                  <p>쉬는날</p>
                </div>
                <div className="  w-[243px] h-[74px] flex items-center justify-center">
                  <p>이용시간</p>
                </div>
                <div className="  w-[243px] h-[74px] flex items-center justify-center">
                  <p>주차시설</p>
                </div>
                <div className="  w-[243px] h-[74px] flex items-center justify-center">
                  <p>전화번호</p>
                </div>
                {/* 주요 메뉴가 있는지 검사 */}
                {menu ? (
                  <div className="  w-[243px] h-[74px] flex items-center justify-center">
                    <p>주요메뉴</p>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
              {check()}
            </div>
          ) : (
            // 소개
            <>
              {clickTab === 1 ? (
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-[243px] h-[480px] bg-sky-100 ">
                    <p>소개</p>
                  </div>
                  <div className="w-[486px]">
                    {overviewData ? (
                      <p dangerouslySetInnerHTML={{ __html: overviewData }} />
                    ) : (
                      <p> 정보 조회중입니다...</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center  w-[100%] h-[370px]">
                  {hompage ? (
                    <p dangerouslySetInnerHTML={{ __html: hompage }} />
                  ) : (
                    <p> 정보 조회중입니다...</p>
                  )}
                </div>
              )}{' '}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
