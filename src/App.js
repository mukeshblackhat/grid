
import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Home'
import Result from './Result'

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/results" element={<Result/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
