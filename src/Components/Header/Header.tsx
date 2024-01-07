import React from "react";
import "../../GlobalStyles.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import GrayBg from "../../Util/Components/GrayedBg";

interface Props {
    headerHeight: number;
    setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ headerHeight, setHeaderHeight }: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [headerHeight]);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen((prev: boolean) => !prev);
    }

    return (
        <header className="text-color px-8 py-1 w-full fixed z-50" ref={ref} id='Header'>
            <nav className="flex justify-end tablet:justify-center tablet:items-center relative">

                <>
                    <button
                        className="HAMBURGER-ICON space-y-1 tablet:hidden mt-5 rounded-full p-4 bg-color1 shadow-lg z-50"
                        onClick={toggleMobileMenu}
                        id='MobileMenuButton'
                    >
                        <span className="block h-1 w-6 bg-gray-900 rounded-lg"></span>
                        <span className="block h-1 w-6 bg-gray-900 rounded-lg"></span>
                        <span className="block h-1 w-6 bg-gray-900 rounded-lg"></span>
                    </button>

                    {
                        isMobileMenuOpen &&
                        <div className="tablet:hidden">
                            <div className="flex flex-col justify-around items-center rounded-lg shadow-lg p-4 origin-bottom-right absolute right-0 mt-20 w-35 bg-color1 z-50">
                                <Link to="/#Home" onClick={toggleMobileMenu}>
                                    Home
                                </Link>

                                <Link to="/#Projects" onClick={toggleMobileMenu} className="mt-2">
                                    Projects
                                </Link>

                                <Link to="/#Experiences" onClick={toggleMobileMenu} className="mt-2">
                                    Experiences
                                </Link>

                                <Link to="/#About" onClick={toggleMobileMenu} className="mt-2">
                                    About
                                </Link>

                                <Link to="/#Contact" onClick={toggleMobileMenu} className="mt-2">
                                    Contact
                                </Link>
                            </div>

                            <GrayBg onClick={toggleMobileMenu} />

                        </div>
                    }
                </>

                <div className="hidden tablet:flex text-lg mt-5 justify-around items-center rounded-full p-4 bg-color1 shadow-lg w-full">
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
