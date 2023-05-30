import './index.css';

// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/work' element={<Work/>} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
