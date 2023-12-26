import React from "react";
import { openLink } from "../../Util/lib";
import { AboutMe } from "../../Util/AboutMeObjects";

const Footer = () => {
    return (
        <div className="w-screen bg-color1 h-36 text-color text-lg py-8 px-40 flex flex-row justify-between" id='Footer'>
            <section className="flex flex-col justify-around">
                <p>Felix Li</p>
                <a href="mailto:04felix.li.@gmail.com" className="underline underline-offset-4">04felix.li@gmail.com</a>
            </section>

            <section className="flex flex-row justify-around">
                <button className="w-12" onClick={() => { openLink(AboutMe.linkedIn) }}>
                    <img src='/Images/LinkedInLogo.png' alt="LinkedInLogo" className="object-fit" />
                </button>

                <button className="w-12" onClick={() => { openLink(AboutMe.github) }}>
                    <img src='/Images/githubLogo.png' alt="githubLogo" className="object-fit" />
                </button>
            </section>

        </div>
    )
}

export default Footer; 