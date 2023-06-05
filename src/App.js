import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Home from './routes/Home';
import Resume from './routes/Resume';
import Aboutme from './routes/Aboutme';
import Work from './routes/Work';



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
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
