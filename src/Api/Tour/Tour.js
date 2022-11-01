import { useEffect } from 'react';
import axios from 'axios';

const Tour = props => {
  const service = props.pageNo;
  const pageNo = service;
  const setTourData = props.stateProps;
  const search_KW = props.keyWord;
  const env = process.env;
  const service_check = pageNo === 0 ? 'areaBasedList' : 'searchKeyword';

  //api Assets
  const api = {
    key: env.REACT_APP_API_KEY,
    base: env.REACT_APP_BASE_URL,
    service: service_check,
    MobileOS: env.REACT_APP_MOBILE_OS,
    MoblieApp: env.REACT_APP_MOBILE_APP,
    listYN: env.REACT_APP_LISTYN,
    arrange: env.REACT_APP_ARRANGE,
    numOfRows: env.REACT_APP_NUM_OF_ROWS,
    pageNo: env.REACT_APP_PAGE_NO,
    _type: env.REACT_APP_TYPE,
  };

  //url
  let url = `${api.base}/${api.service}?serviceKey=${api.key}&numOfRows=${api.numOfRows}&pageNo=${api.pageNo}&MobileOS=${api.MobileOS}&MobileApp=${api.MoblieApp}&_type=${api._type}&listYN=${api.listYN}&arrange=${api.arrange}`;

  //check PageNo
  if (pageNo !== 0) {
    url = url + `&keyword=${search_KW}`;
  }

  //api fetch
  const callGetData = async url => {
    try {
      const response = await axios.get(url);
      setTourData(response.data.response.body.items.item);
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
