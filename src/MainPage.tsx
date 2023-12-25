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
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />

      <section className='mt-52 p-4 pl-40 text-left'>

        <section>
          <Home />
        </section>

        <section className='mt-56'>
          <Projects />
        </section>

        <section className='mt-56'>
          <Experiences />
        </section>

        <section className='mt-56'>
          <About headerHeight={headerHeight} />
        </section>

        <section className='mt-56'>
          <Contact />
        </section>

      </section>

    </div>
  );
}

export default MainPage;
