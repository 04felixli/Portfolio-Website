import React from "react";
import "../../GlobalStyles.css";
import { ProjectObject } from "../../Constants/ProjectObjects";

interface Props {
    project: ProjectObject
}

const Project = ({ project }: Props) => {
    return (
        <button className="w-80 h-96 border border-color6 border-4 rounded-lg relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md">
            <h1 className="absolute -top-6 -left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">{project.name}</h1>
            <img src={project.imagePath} alt="WorkoutHistory" className="w-full h-full object-cover" />
            <div className="absolute -bottom-16 -right-24 rounded-lg bg-color6 w-11/12 h-4/6 text-sm p-6 z-5 shadow-md text-left flex flex-col justify-between">
                <p>
                    {project.description}
                </p>
                <p>
                    {project.techStack}
                </p>
            </div>

        </button>
    )
}

export default Project; 