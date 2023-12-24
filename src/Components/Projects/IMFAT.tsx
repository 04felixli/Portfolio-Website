import React from "react";
import "../../GlobalStyles.css";

const IMFAT = () => {
    return (
        <button className="w-80 h-96 border border-color6 border-4 rounded-lg relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md">
            <h1 className="absolute -top-6 -left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">IMFAT</h1>
            <img src="/Images/WorkoutHistory.png" alt="WorkoutHistory" className="w-full h-full object-cover" />
            <div className="absolute -bottom-16 -right-24 rounded-lg bg-color6 w-11/12 h-4/6 text-sm p-6 z-5 shadow-md text-left">
                <p>
                    IMFAT is an Individually Managed Fitness Activity Tracker, a comprehensive web application empowering gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.
                </p>
                <p className="mt-7">
                    React | Node.js | Express.js | Typescript | PostgreSQL | Supabase | Tailwind CSS
                </p>
            </div>

        </button>
    )
}

export default IMFAT; 