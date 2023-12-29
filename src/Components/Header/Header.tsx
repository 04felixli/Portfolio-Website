import React from "react";
import "../../GlobalStyles.css";
import { useState, useRef, useEffect } from "react";
import { scrollToTop, goToSection } from "../../Util/lib";

interface Props {
    headerHeight: number;
    setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ headerHeight, setHeaderHeight }: Props) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [headerHeight]);

    return (
        <header className="header" ref={ref}>
            <nav className="text-lg mt-5 flex justify-around items-center rounded-full p-4 bg-color1 shadow-lg">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={scrollToTop}>
                    {/* <span className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gray-800 before:absolute before:left-0 before:bottom-0">Home</span> */}
                    Home
                </button>
                <a href="/#Projects" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                    Projects
                </a>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={() => goToSection('Experiences', headerHeight)}>Experiences</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={() => goToSection('About', headerHeight)}>About</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={() => goToSection('Contact', headerHeight)}>Contact</button>
            </nav>
        </header>
    );
}

export default Header;
