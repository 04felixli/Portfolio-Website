export interface ProjectObject {
    name: string;
    description: string;
    techStack: string;
    imagePath: string;
}

export const IMFATProject: ProjectObject = {
    name: 'IMFAT',
    description: 'IMFAT is an Individually Managed Fitness Activity Tracker, a comprehensive web application empowering gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.',
    techStack: 'React | Node.js | Express.js | Typescript | PostgreSQL | Supabase | Tailwind CSS',
    imagePath: '/Images/WorkoutHistory.png'
}

export const ChessProject: ProjectObject = {
    name: 'PvP Chess',
    description: 'A two player chess game with features such as legal move validation and checkmate/stalemate checking.',
    techStack: 'Python | Pygame',
    imagePath: '/Images/ChessGame.png'
}

export const PortfolioProject: ProjectObject = {
    name: 'Portfolio',
    description: 'A personal website used to show others stuff about my life, my personal projects, and work experience.',
    techStack: 'React | TypeScript | Tailwind CSS',
    imagePath: '/Images/PersonalPortfolio.png'
}
