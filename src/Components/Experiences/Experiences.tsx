import React from "react";
import "../../GlobalStyles.css";
import { RIFOExperience, RogersExperience } from "../../Constants/ExperienceObjects";
import Experience from "./Experience";

const Experiences = () => {
    return (
        <div className="text-color" id={'Experiences'}>
            <h1 className="text-6xl">Experiences</h1>

            <section className="flex flex-col mt-20">

                <section><Experience experience={RIFOExperience} /></section>

                <section className="mt-20"><Experience experience={RogersExperience} /></section>

            </section>

        </div>


    )
}

export default Experiences;