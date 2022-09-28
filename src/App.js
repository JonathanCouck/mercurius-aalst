import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Geschiedenis from './pages/Geschiedenis';
import Clublied from './pages/Clublied';
import Praesidium from './pages/Praesidium';
import Kalender from './pages/Kalender';
import Clubcafe from './pages/Clubcafe';
import Media from './pages/Media';
import Contact from './pages/Contact';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-rockwell">
      <BrowserRouter>
        <NavMenu />

        <Routes>
          <Route path='/'>
            <Route path='' element={<Home/>} />
            <Route path='geschiedenis' element={<Geschiedenis/>} />
            <Route path='clublied' element={<Clublied/>} />
            <Route path='praesidium' element={<Praesidium/>} />
            <Route path='kalender' element={<Kalender/>} />
            <Route path='clubcafe' element={<Clubcafe/>} />
            <Route path='media' element={<Media/>} />
            <Route path='contact' element={<Contact/>} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
