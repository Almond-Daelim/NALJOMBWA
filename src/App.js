import '../src/styles/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/index';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;
