import '../src/styles/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/index';
import SearchPage from './pages/SearchPage';

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
    </Routes>
  );
}

export default App;
