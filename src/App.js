import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>   
    </div>
  );
}

export default App;
