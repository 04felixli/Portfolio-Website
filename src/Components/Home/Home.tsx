import React from "react";
import "../../GlobalStyles.css";
import { AboutMe } from "../../Util/AboutMeObjects";

const Home = () => {

    return (
        <div className="text-color flex flex-row items-center">
            <section className="w-full tablet:w-6/12 flex flex-col">
                <p className="text-3xl laptop-L:text-4xl">What's up?</p>
                <p className="text-3xl laptop-L:text-4xl mt-5">I'm</p>
                <p className="text-7xl laptop-L:text-9xl border-b-4 border-color2 w-11/12">Felix Li</p>
                <p className="text-lg mt-5">I'm an aspiring software/full stack developer, engineer, or whatever you want to call it, currently studying computer engineering at the University of Waterloo.</p>
            </section>

            <a href={AboutMe.linkedIn} target="_blank" className="hidden tablet:flex w-72 h-72 laptop:w-80 laptop:h-80 laptop-L:w-96 laptop-L:h-96 rounded-full border border-color6 border-4 overflow-hidden relative shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                <img src='/Images/Pfp.jpeg' alt="ProfilePic" className="w-full h-full object-cover" />
                <h1 className="absolute bottom-5 left-4  laptop:bottom-10 laptop-L:left-6 laptop:laptop-L:left-5 rounded-full w-4/6 text-3xl laptop:text-4xl text-center py-1 bg-color6 shadow-lg z-5">Welcome!</h1>
            </a>
        </div>
    )
}

export default Home;
