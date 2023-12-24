export interface ProjectObject {
    name: string;
    description: string;
    techStack: string;
    imagePath: string;
}

export const IMFATObject: ProjectObject = {
    name: 'IMFAT',
    description: 'IMFAT is an Individually Managed Fitness Activity Tracker, a comprehensive web application empowering gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.',
    techStack: 'React | Node.js | Express.js | Typescript | PostgreSQL | Supabase | Tailwind CSS',
    imagePath: '/Images/WorkoutHistory.png'
}

export const ChessObject: ProjectObject = {
    name: 'PvP Chess',
    description: 'A 2 player chess game with features such as legal move validation and checkmate/stalemate checking.',
    techStack: 'Python | Pygame',
    imagePath: '/Images/ChessGame.png'
}
