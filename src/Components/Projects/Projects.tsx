import React from "react";
import "../../GlobalStyles.css";
import Project from "./Project";
import { IMFATProject, ChessProject, PortfolioProject } from "../../Util/Objects/ProjectObjects";

const Projects = () => {

    return (
        <div className="text-color" id={'Projects'}>
            <h1 className="section-names">Projects</h1>

            <section className="flex laptop-L:flex-row flex-wrap mt-10 laptop:mt-20 justify-around flex-col">

                <section className="w-full laptop-L:w-[31%]"><Project project={IMFATProject} /></section>

                <section className="w-full laptop-L:w-[31%]"><Project project={ChessProject} /></section>

                <section className="w-full laptop-L:w-[31%]"><Project project={PortfolioProject} /></section>

            </section>
        </div>
    )
}

export default Projects;

