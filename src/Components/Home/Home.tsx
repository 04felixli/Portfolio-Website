import React from "react";
import "../../GlobalStyles.css";

const Home = () => {
    return (
        <div className="text-color flex flex-row">
            <section className="w-6/12">
                <p className="text-4xl">What's up?</p>
                <p className="text-4xl mt-5">I'm</p>
                <p className="text-9xl">Felix Li</p>
                <p className="text-lg mt-5">I'm an aspiring software/full stack developer, engineer, or whatever you want to call it, currently studying computer engineering at the University of Waterloo.</p>
            </section>

            <section className="w-96 h-96 rounded-full border border-color6 border-4 overflow-hidden relative shadow-md">
                <img src='/Images/Pfp.jpeg' alt="ProfilePic" className="w-full h-full object-cover" />
                <h1 className="absolute bottom-10 left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">Welcome!</h1>
            </section>
        </div>
    )
}

export default Home;
