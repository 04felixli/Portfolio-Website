import React from "react";
import "../../GlobalStyles.css";
import IMFAT from "./IMFAT";
import Chess from "./Chess";

const Projects = () => {
    return (
        // <div className="text-color h-screen flex items-center justify-center">
        //     <div className="w-8/12 h-4/6 rounded-md flex flex flex-row justify-around">
        //         <div className="border-style relative w-5/12">

        //             <img src="/Images/WorkoutHistory.png" alt="WorkoutHistory" className="border-style w-full h-full object-cover" />
        //             <div className="absolute bottom-0 left-0 text-4xl font-bold px-4 py-1">IMFAT</div>

        //         </div>


        //         <div className="border-style w-5/12 p-8 text-4xl">
        //             PvP Chess
        //         </div>
        //     </div>
        // </div>

        <div className="text-color" id={'Projects'}>
            <h1 className="text-6xl">Projects</h1>

            <section className="flex flex-row mt-20">

                <section><IMFAT /></section>

                {/* <section className="ml-10"><Chess /></section> */}

            </section>


        </div>


    )
}

export default Projects;

