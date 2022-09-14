import '../src/styles/global.css';
import { Mobile, PC } from '../src/hooks/useMediaQuery';
import Home from '../src/pages/index';

function App() {
  return (
    <>
      <div>
        <Home></Home>
        <Mobile>
          <div className="mobile_container">이건 모바일 !!</div>
        </Mobile>
        <div className="pc_container">
          <PC>요건 PC !!!</PC>
        </div>
      </div>
      <div className="text-3xl font-bold underline">Hello world!</div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </>
  );
}

export default App;
