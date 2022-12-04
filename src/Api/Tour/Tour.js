import { useEffect } from 'react';
import axios from 'axios';

const Tour = props => {
  const service = props.pageNo;
  const pageNo = service;
  const setTourData = props.stateProps;
  const setDetailData = props.detailState;
  const search_KW = props.keyWord;
  const contentId = props.contentId;
  const contentTypeId = props.contentTypeId;
  const env = process.env;
  const service_check = pageNo === 2 ? 'detailIntro' : 'searchKeyword';
  const tour_cnt = props.tour_cnt;
  const list_cnt = tour_cnt === '' ? 8 : tour_cnt;

  //api Assets
  const api = {
    key: env.REACT_APP_API_KEY,
    base: env.REACT_APP_BASE_URL,
    service: service_check,
    MobileOS: env.REACT_APP_MOBILE_OS,
    MoblieApp: env.REACT_APP_MOBILE_APP,
    listYN: env.REACT_APP_LISTYN,
    arrange: env.REACT_APP_ARRANGE,
    numOfRows: list_cnt,
    pageNo: env.REACT_APP_PAGE_NO,
    _type: env.REACT_APP_TYPE,
  };

  //url
  let url = `${api.base}/${api.service}?serviceKey=${api.key}&numOfRows=${api.numOfRows}&pageNo=${api.pageNo}&MobileOS=${api.MobileOS}&MobileApp=${api.MoblieApp}&_type=${api._type}`;

  //check PageNo
  if (pageNo === 0) {
    url = url + `&listYN=${api.listYN}&arrange=${api.arrange}`;
  } else if (pageNo === 1) {
    url = url + `&keyword=${search_KW}`;
  } else if (pageNo === 2) {
    url = url + `&contentId=${contentId}&contentTypeId=${contentTypeId}`;
  }

  //api fetch
  const callGetData = async url => {
    try {
      const response = await axios.get(url);
      if (pageNo === 1) {
        setTourData(response.data.response.body.items.item);
      } else if (pageNo === 2) {
        setDetailData(response.data.response.body.items.item);
      }
    } catch (err) {
      console.log('Tour Api 불러오기 실패');
      console.log(err);
    }
  };

  //getData call
  useEffect(() => {
    callGetData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default Tour;
