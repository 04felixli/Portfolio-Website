import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import ResumePDF from './Components/ResumePDF';
import Layout from './Util/Layout';
import DetailedProject from './Components/Projects/DetailedProject';
import { useState } from 'react';
import { setScrollPaddingForHeader } from './Util/lib';
import { IMFATProject, ChessProject, PortfolioProject } from './Util/ProjectObjects';

const App = () => {
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    useEffect(() => {
        setScrollPaddingForHeader();
    }, [])

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
        </Router>
    );
};

export default App;
