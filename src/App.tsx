import React from 'react';
import Home from './components/Pages/Home';
import Navbar from './components/Js/Navbar';
import './App.css';

function App() {
  return (
    <>
      <div className='app-wrapper'>
          <Navbar />
          <Home />
      </div>
    </>
  );
}

export default App;
