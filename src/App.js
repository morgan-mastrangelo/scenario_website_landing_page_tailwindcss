import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Content1 from './components/Content1';

import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import React, { useEffect, useState, useRef } from 'react'
// import App2 from './App2';


function App() {



  return (
    <div className='bg-mainGray '>
      <Hero/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
    </div>
  );
}

export default App;
