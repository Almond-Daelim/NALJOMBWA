import React from 'react';
import { useParams } from 'react-router-dom';
import TourListPage from './TourListPage';

const SearchPage = () => {
  const params = useParams();
  return (
    <TourListPage
      pageNo={1}
      keyWord={params.search_KW}
    />
  );
};

export default SearchPage;
