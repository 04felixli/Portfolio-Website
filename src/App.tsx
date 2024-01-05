import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import ResumePDF from './Components/ResumePDF';
import Layout from './Util/Components/Layout';
import DetailedProject from './Components/Projects/DetailedProject';
import { useState } from 'react';
import { setScrollPaddingForHeader } from './Util/lib';
import { IMFATProject, ChessProject, PortfolioProject } from './Util/Objects/ProjectObjects';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';



const App = () => {
    const [headerHeight, setHeaderHeight] = useState<number>(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        setScrollPaddingForHeader();
    }, [screenWidth]) // re-calculate scroll padding for header when screen width changes

    // Event listener to update screenWidth when the window is resized
    useEffect(() => {

        inject();

        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);



    return (
        <Router>
            <Routes>
                <Route element={<Layout headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />}>
                    <Route index element={<MainPage headerHeight={headerHeight} />} />
                    <Route path="/resume" element={<ResumePDF />} />
                    <Route path={IMFATProject.URL} element={<DetailedProject project={IMFATProject} />} />
                    <Route path={ChessProject.URL} element={<DetailedProject project={ChessProject} />} />
                    <Route path={PortfolioProject.URL} element={<DetailedProject project={PortfolioProject} />} />
                    <Route path="*" element={<MainPage headerHeight={headerHeight} />} />
                </Route>
            </Routes>
            <SpeedInsights />
        </Router>
    );
};

export default App;
