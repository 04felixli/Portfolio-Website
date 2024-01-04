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
            <button className="w-full h-[32rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md hover:z-10 duration-300 flex flex-col rounded-lg relative laptop-L:min-w-[350px] max-h-[200px] laptop-L:max-h-none mb-5 laptop-L:mb-0">
                <img src={project.cardImagePath} alt={`${project.name}Image`} className={`w-full h-full border border-color6 border-4 rounded-lg ${project.name !== 'Portfolio' ? 'object-cover' : 'object-contain'}`} />
                <h1 className="text-base mobile-L:text-2xl laptop-L:text-3xl absolute top-0 left-0 bg-color6 py-2 px-8 mt-5 ml-5 shadow-md text-center rounded-lg">{project.name}</h1>
            </button>
        </Link>
    )
}

export default Project; 