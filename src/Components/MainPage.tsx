import React, { useState } from 'react';
import logo from './logo.svg';
import '../GlobalStyles.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experiences';
import About from './About/About';
import Footer from './Footer/Footer';

interface Props {
  headerHeight: number;
}

function MainPage({ headerHeight }: Props) {
  // const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-background to-color3 items-center'>

      <div id="Home"></div>

      <section className='mt-52 py-8 px-40 text-left max-w-[1920px]'>
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
