import React from "react"
import { useEffect } from "react";
import { ProjectObject } from "../../Util/ProjectObjects";
import { ProjectStatus } from "../../Util/ProjectObjects";

interface Props {
    project: ProjectObject;
}

const DetailedProject = ({ project }: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-color min-h-screen flex flex-col bg-gradient-to-r from-background to-color3">
            <div className="mt-36 p-4 pl-40 text-left">
                <section className="flex flex-row items-center border-b-4 border-color2">
                    <h1 className="text-6xl">{project.name}</h1>
                    <p className={`px-4 py-1 rounded-lg ml-4 ${project.status === ProjectStatus.InProgress ? 'bg-yellow-300' : 'bg-green-300'}`}>{project.status}</p>
                </section>

                <section className="flex flex-row mt-8 text-lg">
                    <section className="w-6/12">
                        <p>{project.reasonForBuilding}</p>
                        <p className="mt-5">{project.overview}</p>
                        <p className="mt-5">{project.featuresLine}</p>
                        <ul className="mt-3 ml-5">
                            {project.featuresList?.map((feature: string, index: number) => (
                                <li key={index}> - {feature}</li>
                            ))}
                        </ul>

                        <p className="mt-5">{project.otherInfo}</p>
                    </section>

                    <div className="w-6/12 flex flex-row justify-center">
                        <div className="w-6/12 h-full border border-color6 border-4 rounded-lg">
                            image(s) goes here
                        </div>
                    </div>
                </section>

                <section className="flex flex-col mt-8 text-lg">
                    <p>Tech Stack:</p>
                    <ul className="flex flex-row mt-5">
                        {project.techStack.map((tech: string, index: number) => (
                            <li key={index} className="px-4 py-1 rounded-lg ml-4 bg-color3">{tech}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8 text-lg">
                    <p>Want to see more?</p>

                    <div className="flex flex-row mt-5">
                        {project.githubLink ? <a href={project.githubLink} target="_blank" className="px-4 py-1 shadow-md rounded-full ml-4 bg-color6 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg">Repo</a> : ''}
                        {project.githubLinkFE ? <a href={project.githubLinkFE} target="_blank" className="px-4 py-1 shadow-md rounded-full ml-4 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg">Front-end</a> : ''}
                        {project.githubLinkBE ? <a href={project.githubLinkBE} target="_blank" className="px-4 py-1 shadow-md rounded-full ml-4 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg">Back-end</a> : ''}
                        {project.databaseDiagramLink ? <a href={project.databaseDiagramLink} target="_blank" className="px-4 py-1 shadow-md rounded-full ml-4 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg">Database Diagrams</a> : ''}
                    </div>

                </section>
            </div>
        </div>
    )

}

export default DetailedProject; 