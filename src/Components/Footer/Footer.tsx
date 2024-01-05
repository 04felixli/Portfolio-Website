import React from "react";
import { AboutMe } from "../../Util/Objects/AboutMeObjects";

const Footer = () => {
    return (
        <div className="w-screen bg-color1 h-36 text-color text-lg py-8 px-20 flex flex-col mobile-L:flex-row justify-between items-center" id='Footer'>
            <p>Felix Li</p>

            <section className="flex flex-row justify-around items-center w-1/6 max-w-[200px] min-w-[150px]">
                <a href={AboutMe.linkedIn} target="_blank" className="w-12">
                    <img src='/Images/LinkedInLogo.png' alt="LinkedInLogo" className="object-fit" />
                </a>

                <a href={`mailto:${AboutMe.email}`} className="w-12">
                    <img src='/Images/GmailLogo.png' alt="gmailLogo" className="object-fit" />
                </a>

                <a href={AboutMe.github} target="_blank" className="w-12">
                    <img src='/Images/githubLogo.png' alt="githubLogo" className="object-fit" />
                </a>
            </section>

        </div>
    )
}

export default Footer; 