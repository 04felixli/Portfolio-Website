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
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-background to-color3'>
      {/* <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} /> */}

      <div id="Home"></div>

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

      {/* <section className=''>
        <Footer />
      </section> */}

    </div>
  );
}

export default MainPage;
