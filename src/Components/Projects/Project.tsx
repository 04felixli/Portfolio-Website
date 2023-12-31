import React from "react";
import "../../GlobalStyles.css";
import { ProjectObject } from "../../Util/ProjectObjects";
import { Link } from "react-router-dom";
import { textChangeRangeNewSpan } from "typescript";

interface Props {
    project: ProjectObject
}

const Project = ({ project }: Props) => {
    return (
        <Link to={project.URL}>
            <button className="w-80 h-96 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
                <h1 className="absolute -top-6 -left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">{project.name}</h1>
                <img src={project.imagePath} alt={`${project.name}Image`} className={`w-full h-full border border-color6 border-4 rounded-lg ${project.name !== 'Portfolio' ? 'object-cover' : 'object-contain'}`} />
                <div className="absolute -bottom-16 -right-24 rounded-lg bg-color6 w-11/12 h-4/6 text-sm p-6 z-5 shadow-md text-left flex flex-col justify-between">
                    <p>
                        {project.shortDescription}
                    </p>
                    <section className="flex flex-row flex-wrap">
                        {project.techStack.map((tech: string, index: number) => (
                            <React.Fragment key={index}>
                                <p>{tech}</p>
                                {index !== project.techStack.length - 1 && <p>&nbsp;|&nbsp;</p>}
                            </React.Fragment>
                        ))}
                    </section>
                </div>
            </button>
        </Link>
    )
}

export default Project; 