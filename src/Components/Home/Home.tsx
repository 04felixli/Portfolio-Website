import React from "react";
import "../../GlobalStyles.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => {
    return (
        // <div className="text-color pt-52 p-8 pl-40 text-left">
        <div className="text-color">
            <div>
                <p className="text-4xl">What's up?</p>
                <p className="text-4xl mt-5">I'm</p>
                <p className="text-9xl">Felix Li</p>
                <p className="text-lg mt-5">I'm an aspiring software/full stack developer, engineer, or whatever you want to call it, currently studying computer engineering at the University of Waterloo.</p>
                <p className="text-xl mt-1">Welcome!</p>
            </div>
        </div>
    )
}

export default Home;
