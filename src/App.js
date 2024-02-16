import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Header from './components/Header';
import AboutUsPage from './pages/AboutUsPage';
import InfoPage from './pages/InfoPage';
import RegistrationPage from './pages/RegistrationPage';

import VanillaPage from './pages/servers/VanillaPage';
import HiTechPage from './pages/servers/HiTechPage';
import MagicPage from './pages/servers/MagicPage';

import MagicRPGPage from './pages/servers/MagicRPGPage';
import TopVanillaPage from './pages/servers/TopVanillaPage';
import UltraTechPage from './pages/servers/UltraTechPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (  
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} /> 
          <Route path="/info_guid" element={<InfoPage />} /> 
          
          <Route path="/registrationpage" element={<RegistrationPage />} />

          <Route path="/VanillaPage" element={<VanillaPage />} />
          <Route path="/HiTechPage" element={<HiTechPage />} />
          <Route path="/MagicPage" element={<MagicPage />} />

          <Route path="/MagicRPGPage" element={<MagicRPGPage />} />
          <Route path="/TopVanillaPage" element={<TopVanillaPage />} />
          <Route path="/UltraTechPage" element={<UltraTechPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
