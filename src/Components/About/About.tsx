import React from "react";
import { AboutMe } from "../../Util/AboutMeObjects";
import { Link } from "react-router-dom";

interface Props {
    headerHeight: number;
}

const About = ({ headerHeight }: Props) => {
    return (
        <div className="text-color" id={'About'}>
            <h1 className="text-6xl border-b-4 border-color2">About</h1>


            <section className="text-lg mt-20 flex flex-row">

                <section className="w-4/12">
                    <p>{AboutMe.intro}</p>
                    <p className="mt-3">{AboutMe.professionalInterests}</p>
                    <p className="mt-3">{AboutMe.otherInterests}</p>
                    <p className="mt-3">{AboutMe.conclusion} <Link to="#Contact" className="bg-color6 p-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-md">{AboutMe.linkToContact}</Link></p>
                </section>

                <section className="w-80 h-96 ml-40">
                    <img
                        src="/Images/AboutPic.jpg"
                        alt="AboutMePic"
                        className="w-full h-full object-cover border border-color6 border-4 rounded-lg shadow-md"
                    />
                </section>


            </section>


        </div>
    )
}

export default About; 