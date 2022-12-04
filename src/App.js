import '../src/styles/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/index';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import MapPage from './pages/MapPage';
import RecPage from './pages/RecPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/search/:search_KW"
        element={<SearchPage />}
      />
      <Route
        path="/detail/:title"
        element={<DetailPage />}
      />
      <Route
        path="/map"
        element={<MapPage />}
      />
      <Route
        path="/rec"
        element={<RecPage />}
      />
      <Route
        path="detail/rec"
        element={<RecPage />}
      />
    </Routes>
  );
}

export default App;
