
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { useState } from 'react';
import SobreMi from './components/SobreMi';
import Timeline from './components/Timeline';

function App() {
  
  
  return (
    
    <div className='appDiv'>
        <NavBar />
        <Home />
        <Timeline />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
