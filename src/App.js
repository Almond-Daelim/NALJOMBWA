import '../src/styles/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/index';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

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
    </Routes>
  );
}

export default App;
