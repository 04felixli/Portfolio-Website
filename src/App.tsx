import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage'; // Assuming you have a Home component
import ResumePDF from './Components/ResumePDF';
import Layout from './Components/Layout';
import IMFAT from './Components/Projects/IMFAT';
import { useState } from 'react';

const App = () => {
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />}>
                    <Route index element={<MainPage headerHeight={headerHeight} />} />
                    <Route path="/resume" element={<ResumePDF />} />
                    <Route path="/Projects/IMFAT" element={<IMFAT />} />
                    <Route path="*" element={<MainPage headerHeight={headerHeight} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
