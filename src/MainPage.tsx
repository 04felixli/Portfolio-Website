import React, { useState } from 'react';
import logo from './logo.svg';
import './GlobalStyles.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences';
import About from './Components/About/About';
import { COLORS } from './Constants/Colors';

function App() {
  const [selectedOption, setSelectedOption] = useState<string>('Home');

  return (
    <div className='w-screen min-h-screen bg-background'>
      <Header setSelectedOption={setSelectedOption} />

      {selectedOption === 'Home' && <Home />}
      {selectedOption === 'Projects' && <Projects />}
      {selectedOption === 'Contact' && <Contact />}
      {selectedOption === 'Experiences' && <Experiences />}
      {selectedOption === 'About' && <About />}
    </div>
  );
}

export default App;
