import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TourList from '../components/common/Layout/TourCard';
import Tour from '../Api/Tour/Tour';

const MainPage = () => {
  return <Tour pageNo={0} />;
};

export default MainPage;
