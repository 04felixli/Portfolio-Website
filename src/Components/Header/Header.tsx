import React from "react";
import "../../GlobalStyles.css";
import { useState, useRef, useEffect } from "react";

interface Props {
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ selectedOption, setSelectedOption }: Props) => {

    const [headerHeight, setHeaderHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [headerHeight]);


    const handleHomeClick = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleProjectClick = (projectSectionId: string): void => {
        const section = document.getElementById(projectSectionId);

        if (section) {
            const offsetTop = section.offsetTop - headerHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }


    const handleExperienceClick = (): void => {
        setSelectedOption((prev: string) => {
            return prev === 'Experiences' ? '' : 'Experiences';
        })
    }

    const handleAboutClick = (): void => {
        setSelectedOption((prev: string) => {
            return prev === 'About' ? '' : 'About';
        })
    }

    const handleContactClick = (): void => {
        setSelectedOption((prev: string) => {
            return prev === 'Contact' ? '' : 'Contact';
        })
    }

    return (
        <header className="text-color px-8 py-1 w-full fixed justify-center items-center z-50" ref={ref}>
            <nav className="text-lg mt-5 flex justify-around items-center rounded-full p-4 bg-color1 shadow-lg">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={handleHomeClick}>
                    {/* <span className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gray-800 before:absolute before:left-0 before:bottom-0">Home</span> */}
                    Home
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={() => handleProjectClick('Projects')}>Projects</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={handleExperienceClick}>Experiences</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={handleAboutClick}>About</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={handleContactClick}>Contact</button>
            </nav>
        </header>
    );
}

export default Header;
