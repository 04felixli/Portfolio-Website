import React from "react";
import "../../GlobalStyles.css";
import Project from "./Project";
import { IMFATProject, ChessProject, PortfolioProject } from "../../Util/ProjectObjects";

const Projects = () => {

    return (
        <div className="text-color" id={'Projects'}>
            <h1 className="text-6xl border-b-4 border-color2">Projects</h1>

            <section className="flex laptop-L:flex-row flex-wrap mt-20 justify-around tablet:max-laptop-L:flex-col">

                <section className="w-3-5-12 tablet:max-laptop-L:w-full"><Project project={IMFATProject} /></section>

                <section className="w-3-5-12 tablet:max-laptop-L:w-full"><Project project={ChessProject} /></section>

                <section className="w-3-5-12 tablet:max-laptop-L:w-full"><Project project={PortfolioProject} /></section>

            </section>
        </div>
    )
}

export default Projects;

