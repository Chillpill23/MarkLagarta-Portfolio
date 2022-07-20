import React from 'react';
import Home from './components/Pages/Home';
import Navbar from './components/Js/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='app-wrapper'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/MarkLagarta-Portfolio/' element={<Home/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
