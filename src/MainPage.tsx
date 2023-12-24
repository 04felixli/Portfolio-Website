import React, { useState } from 'react';
import logo from './logo.svg';
import './GlobalStyles.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences';
import About from './Components/About/About';

function MainPage() {
  const [selectedOption, setSelectedOption] = useState<string>('Home');

  return (
    <body className='min-h-screen bg-background flex flex-col'>
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      <section className='mt-52 p-4 pl-40 text-left'>

        <section>
          <Home />
        </section>

        <section className='mt-56'>
          <Projects />
        </section>

        <section className='mt-10'>
          <Experiences />
        </section>

      </section>

    </body>
  );
}

export default MainPage;
