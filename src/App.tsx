import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Cadastro from './pages/Cadastro.tsx';
import Login from './pages/Login.tsx';
import LandingPage from './pages/LandingPage.tsx';
import MatchDetails from './pages/MatchDetails.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/match/:id' element={<MatchDetails/>} />
        <Route path="*" element={<div className="min-h-screen bg-[#020074] flex items-center justify-center text-white text-2xl">Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;