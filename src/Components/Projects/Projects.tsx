import React from "react";
import "../../GlobalStyles.css";
import Project from "./Project";
import { IMFATProject, ChessProject } from "../../Constants/ProjectObjects";

const Projects = () => {

    return (
        <div className="text-color" id={'Projects'}>
            <h1 className="text-6xl">Projects</h1>

            <section className="flex flex-row mt-20">

                <section><Project project={IMFATProject} /></section>

                <section className="ml-36"><Project project={ChessProject} /></section>

            </section>
        </div>
    )
}

export default Projects;

