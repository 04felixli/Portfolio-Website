import React from "react";
import "../../GlobalStyles.css";
import { ExperienceObject } from "../../Util/ExperienceObjects";

interface Props {
    experience: ExperienceObject;
}

const Experience = ({ experience }: Props) => {
    return (
        <div className="text-color flex flex-row">
            <a href={experience.companyWebsiteLink} target="_blank" className="w-80 h-80 rounded-full border border-color6 border-4 overflow-hidden shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300">
                <img src={experience.companyLogo} alt={`${experience.companyName}Logo`} className="w-full h-full object-cover" />
            </a>

            <section className="ml-10 border-l-4 border-color6 bg-color4 shadow-md w-5/12 rounded-lg p-6 flex flex-col justify-between">
                <section>
                    <h1 className="text-3xl">{experience.companyName}</h1>
                    <p className="italic">{experience.role}, {experience.status}</p>
                    <p>{experience.cityOrState}, {experience.country}</p>
                    <p>{experience.startDate} - {experience.endDate}</p>
                    <p>{experience.techStack}</p>
                </section>

                <p>{experience.description}</p>
            </section>


        </div>
    )
}

export default Experience;