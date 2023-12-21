import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage'; // Assuming you have a Home component
import ResumePDF from './Components/ResumePDF';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/resume" element={<ResumePDF />} />
            </Routes>
        </Router>
    );
};

export default App;
