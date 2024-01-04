import React from "react";
import "../../GlobalStyles.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <nav className="">

                <div className="flex laptop:hidden">
                    <button
                        className="HAMBURGER-ICON space-y-2"
                    >
                        <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
                    </button>
                </div>

                <div className="hidden laptop:flex text-lg mt-5 justify-around items-center rounded-full p-4 bg-color1 shadow-lg">
                    <Link to="/#Home" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                        Home
                    </Link>

                    <Link to="/#Projects" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                        Projects
                    </Link>

                    <Link to="/#Experiences" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                        Experiences
                    </Link>

                    <Link to="/#About" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                        About
                    </Link>

                    <Link to="/#Contact" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4">
                        Contact
                    </Link>
                </div>

            </nav>
        </header>
    );
}

export default Header;
