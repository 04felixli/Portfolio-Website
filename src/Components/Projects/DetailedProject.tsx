import React from "react"
import { useEffect } from "react";
import { ProjectObject } from "../../Util/Objects/ProjectObjects";
import { ProjectStatus } from "../../Util/Objects/ProjectObjects";

interface Props {
    project: ProjectObject;
}

const DetailedProject = ({ project }: Props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-color min-h-screen flex flex-col bg-gradient-to-r from-background to-color3 items-center">
            <div className="mt-5 laptop:mt-36 py-8 px-8 tablet:px-20 text-left max-w-[1920px] w-full">
                <section className="flex flex-row items-center border-b-4 border-color2">
                    <h1 className="text-5xl laptop-L:text-6xl">{project.name}</h1>
                    <p className={`px-4 py-1 rounded-lg ml-4 text-nowrap hidden mobile-M:flex ${project.status === ProjectStatus.InProgress ? 'bg-yellow-300' : 'bg-green-300'}`}>{project.status}</p>
                </section>

                <p className={`px-4 py-1 rounded-lg text-nowrap mobile-M:hidden w-fit mt-1 ${project.status === ProjectStatus.InProgress ? 'bg-yellow-300' : 'bg-green-300'}`}>{project.status}</p>


                <section className="flex flex-col-reverse laptop:flex-row mt-8 text-lg">
                    <section className="w-full">
                        {
                            project.detailedImagePath &&
                            <section className="w-full mb-5 laptop:mx-5 laptop:w-fit flex justify-center items-center laptop:float-right">
                                <img
                                    src={project.detailedImagePath}
                                    alt={`detailed${project.name}Image`}
                                    className="w-full max-w-[400px] h-full object-contain border border-color6 border-4 rounded-lg overflow-hidden"
                                />
                            </section>

                        }
                        {project.reasonForBuilding && <p>{project.reasonForBuilding}</p>}
                        {project.overview && <p className="mt-5">{project.overview}</p>}
                        <p className="mt-5">{project.featuresLine}</p>
                        <ul className="mt-3">
                            {project.featuresList?.map((feature: string, index: number) => (
                                <li key={index} className="border-b-2 border-color2 m-3 w-fit">{feature}</li>
                            ))}
                        </ul>

                        {project.otherInfo && <p className="mt-5">{project.otherInfo}</p>}

                        <section className="flex flex-col mt-8 text-lg">
                            <p>Tech Stack:</p>
                            <ul className="flex flex-row mt-5 flex-wrap">
                                {project.techStack.map((tech: string, index: number) => (
                                    <li key={index} className="px-4 py-1 rounded-lg m-1 bg-color3 text-center text-nowrap">{tech}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-8 text-lg">
                            <p>Want to see more?</p>

                            <div className="flex flex-row mt-5 flex-wrap">
                                {project.githubLink && <a href={project.githubLink} target="_blank" className="px-4 py-1 shadow-md rounded-full m-1 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg text-center text-nowrap">Github Repo</a>}
                                {project.githubLinkFE && <a href={project.githubLinkFE} target="_blank" className="px-4 py-1 shadow-md rounded-full m-1 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg text-center text-nowrap">Front-end Repo</a>}
                                {project.githubLinkBE && <a href={project.githubLinkBE} target="_blank" className="px-4 py-1 shadow-md rounded-full m-1 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg text-center text-nowrap">Back-end Repo</a>}
                                {project.databaseDiagramLink && <a href={project.databaseDiagramLink} target="_blank" className="px-4 py-1 shadow-md rounded-full m-1 bg-color6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg text-center text-nowrap">Database Diagrams</a>}
                            </div>

                        </section>


                    </section>
                </section>
            </div>
        </div>
    )

}

export default DetailedProject; 