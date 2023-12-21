import React from "react";
import "../../GlobalStyles.css";

interface Props {
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setSelectedOption }: Props) => {

    const handleHomeClick = (): void => {
        setSelectedOption((prev: string) => {
            return prev === 'Home' ? '' : 'Home';
        })
    }

    const handleProjectClick = (): void => {
        setSelectedOption((prev: string) => {
            return prev === 'Projects' ? '' : 'Projects';
        })
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
        <header className="text-color p-8 w-full fixed justify-center items-center">
            <nav className="text-lg mt-5 flex justify-around items-center rounded-full p-4 bg-color1 shadow-lg">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4" onClick={handleHomeClick}>
                    <span className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gray-800 before:absolute before:left-0 before:bottom-0">Home</span>
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4 link link-underline link-underline-black" onClick={handleProjectClick}>Projects</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4 link link-underline link-underline-black" onClick={handleExperienceClick}>Experiences</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4 link link-underline link-underline-black" onClick={handleAboutClick}>About</button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-color4 duration-300 hover:shadow-md rounded-full px-4 link link-underline link-underline-black" onClick={handleContactClick}>Contact</button>
            </nav>
        </header>

    );
}

export default Header;
