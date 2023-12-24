import React from "react";

const Chess = () => {
    return (
        <button className="w-80 h-96 border border-color6 border-4 rounded-lg relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-md">
            <h1 className="absolute -top-6 -left-6 rounded-full w-4/6 text-4xl text-center py-1 bg-color6 shadow-lg z-5">PvP Chess</h1>
            <img src="/Images/ChessGame.png" alt="WorkoutHistory" className="w-full h-full object-cover" />
            <div className="absolute -bottom-16 -right-24 rounded-lg bg-color6 w-11/12 h-4/6 text-sm p-6 z-5 shadow-md text-left flex flex-col justify-between">
                <p>
                    A 2 player chess game with features such as legal move validation and checkmate/stalemate checking.
                </p>
                <p>
                    Python | Pygame
                </p>
            </div>

        </button>
    )
}

export default Chess; 