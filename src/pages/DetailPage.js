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
            <div className="flex-wrap w-[486px] h-[100%] ">
              <div className=" w-[424px] h-[74px] flex items-center">
                {addr1}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center">
                {restdate}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center">
                <p dangerouslySetInnerHTML={{ __html: usetime }} />
              </div>
              <div className="  w-[424px] h-[74px] flex items-center">
                {parking}
                {post.parkingfee ? '/' + post.parkingfee : <> </>}
                {/* 무료 주차시설인지 확인 */}
              </div>
              <div className="  w-[424px] h-[74px] flex items-center">
                {tel}
              </div>
              {/* 주요 메뉴가 있는지 검사 */}
              {post.treatmenu ? (
                <div className="  w-[424px] h-[74px] flex items-center">
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
    <>
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
            <div
              className="flex justify-center w-[243px] h-[54px] bg-slate-300 cursor-pointer"
              onClick={() => {
                setClickTab(0);
              }}
            >
              <ul className="flex items-center">
                <li>기본정보</li>
              </ul>
            </div>
            <div
              className="flex justify-center w-[243px] h-[54px] bg-slate-300 cursor-pointer"
              onClick={() => {
                setClickTab(1);
              }}
            >
              <ul className="flex items-center">
                <li>소개</li>
              </ul>
            </div>
            <div
              className="flex justify-center w-[243px] h-[54px] bg-slate-300 cursor-pointer"
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
              <div className="flex-wrap h-[100%] bg-slate-200">
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
                  <div className="flex items-center justify-center w-[243px] h-[370px] bg-slate-200 ">
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
                <div className="flex items-center">
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
    </>
  );
};
export default Detail;
