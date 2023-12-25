import React from "react";
import "../../GlobalStyles.css";
import { openLink } from "../../Util/lib";

const Home = () => {

    return (
        <div className="text-color flex flex-row">
            <section className="w-6/12">
                <p className="text-4xl">What's up?</p>
                <p className="text-4xl mt-5">I'm</p>
                <p className="text-9xl border-b-4 border-color2 w-11/12">Felix Li</p>
                <p className="text-lg mt-5">I'm an aspiring software/full stack developer, engineer, or whatever you want to call it, currently studying computer engineering at the University of Waterloo.</p>
            </section>

            <button className="w-96 h-96 rounded-full border border-color6 border-4 overflow-hidden relative shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg" onClick={() => openLink('https://www.linkedin.com/in/04felixli')}>
                <img src='/Images/Pfp.jpeg' alt="ProfilePic" className="w-full h-full object-cover" />
                <h1 className="absolute bottom-10 left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">Welcome!</h1>
            </button>
        </div>
    )
}

export default Home;
