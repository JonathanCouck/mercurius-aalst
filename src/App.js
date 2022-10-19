import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Geschiedenis from './pages/Geschiedenis';
import Clublied from './pages/Clublied';
import Praesidium from './pages/Praesidium';
import Kalender from './pages/Kalender';
// import Clubcafe from './pages/Clubcafe';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import ErrorPagina from './pages/ErrorPagina';

function App() {
  return (
    <div className="App font-rockwell">
      <BrowserRouter>
        <NavMenu />

        <Routes>
          <Route path=''>
            <Route path='' element={<Home/>} />
            <Route path='geschiedenis' element={<Geschiedenis/>} />
            <Route path='clublied' element={<Clublied/>} />
            <Route path='praesidium' element={<Praesidium/>} />
            <Route path='kalender' element={<Kalender/>} />
            {/* <Route path='clubcafe' element={<Clubcafe/>} /> */}

            <Route path="404" element={<ErrorPagina/>} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
