import React from "react";
import { AboutMe } from "../../Util/AboutMeObjects";
import { Link } from "react-router-dom";

interface Props {
    headerHeight: number;
}

const About = ({ headerHeight }: Props) => {
    return (
        <div className="text-color" id={'About'}>
            <h1 className="section-names">About</h1>


            <section className="text-lg mt-10 laptop:mt-20 flex flex-row">

                <section className="w-full laptop:w-4/12">
                    <p>{AboutMe.intro}</p>
                    <p className="mt-3">{AboutMe.professionalInterests}</p>
                    <p className="mt-3">{AboutMe.otherInterests}</p>
                    <p className="mt-3">{AboutMe.introduceTechStack}</p>
                    <section className="ml-5">
                        <section className="mt-3">
                            <p className="font-bold">Languages: </p>
                            <ul className="flex flex-row mt-1 flex-wrap">
                                {AboutMe.languages.map((language: string, index: number) => (
                                    <li key={`language${index}`} className="px-4 py-1 rounded-lg m-1 bg-color3 text-center text-nowrap">{language}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-3">
                            <p className="font-bold">Technologies/Frameworks: </p>
                            <ul className="flex flex-row mt-1 flex-wrap">
                                {AboutMe.technologies.map((technology: string, index: number) => (
                                    <li key={`technology${index}`} className="px-4 py-1 rounded-lg m-1 bg-color3 text-center text-nowrap">{technology}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-3">
                            <p className="font-bold">Dev Tools: </p>
                            <ul className="flex flex-row mt-1 flex-wrap">
                                {AboutMe.devTools.map((tool: string, index: number) => (
                                    <li key={`tool${index}`} className="px-4 py-1 rounded-lg m-1 bg-color3 text-center text-nowrap">{tool}</li>
                                ))}
                            </ul>
                        </section>
                    </section>
                    <p className="mt-5">{AboutMe.conclusion} <Link to="#Contact" className="bg-color6 p-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-md">{AboutMe.linkToContact}</Link></p>
                </section>

                <section className="w-80 h-96 ml-40 hidden laptop:flex">
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