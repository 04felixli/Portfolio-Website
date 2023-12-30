export interface ProjectObject {
    name: string;
    shortDescription: string;
    techStack: string[];
    imagePath: string;
    URL: string;
    overview: string;
    features: string;
    otherInfo: string;
    githubLink: string | null;
    githubLinkFE: string | null;
    githubLinkBE: string | null;
}

export const IMFATProject: ProjectObject = {
    name: 'IMFAT',
    shortDescription: 'IMFAT is an Individually Managed Fitness Activity Tracker, a comprehensive web application empowering gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.',
    techStack: ['React', 'Node.js', 'Express.js', 'Typescript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    imagePath: '/Images/WorkoutHistory.png',
    URL: "/Projects/IMFAT",
    overview: '',
    features: '',
    otherInfo: '',
    githubLink: null,
    githubLinkFE: '',
    githubLinkBE: ''
}

export const ChessProject: ProjectObject = {
    name: 'PvP Chess',
    shortDescription: 'A two player chess game with features such as legal move validation and checkmate/stalemate checking.',
    techStack: ['Python', 'Pygame'],
    imagePath: '/Images/ChessGame.png',
    URL: "/Projects/Chess",
    overview: '',
    features: '',
    otherInfo: '',
    githubLink: '',
    githubLinkFE: null,
    githubLinkBE: null
}

export const PortfolioProject: ProjectObject = {
    name: 'Portfolio',
    shortDescription: 'A personal website used to show others stuff about my life, my personal projects, and work experience.',
    techStack: ['React', 'Typescript', 'Tailwind CSS'],
    imagePath: '/Images/PersonalPortfolio.png',
    URL: "/Projects/Portfolio",
    overview: '',
    features: '',
    otherInfo: '',
    githubLink: '',
    githubLinkFE: '',
    githubLinkBE: ''
}
