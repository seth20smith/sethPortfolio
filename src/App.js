import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Aboutme from './pages/Aboutme';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/work' element={<Work />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
