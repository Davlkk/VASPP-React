import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Cadastro from './pages/Cadastro.tsx';
import Login from './pages/Login.tsx';
import LandingPage from './pages/LandingPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;