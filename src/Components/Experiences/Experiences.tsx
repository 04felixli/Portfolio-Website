import React from "react";
import "../../GlobalStyles.css";
import { RIFOExperience, RogersExperience } from "../../Util/ExperienceObjects";
import Experience from "./Experience";

const Experiences = () => {
    return (
        <div className="text-color" id={'Experiences'}>
            <h1 className="section-names">Experiences</h1>

            <section className="flex flex-col mt-10 laptop:mt-20">

                <section><Experience experience={RIFOExperience} /></section>

                <section className="mt-5 laptop:mt-20"><Experience experience={RogersExperience} /></section>

            </section>

        </div>


    )
}

export default Experiences;