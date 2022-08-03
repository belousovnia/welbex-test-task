import MainPage from "./components/MainPage";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
