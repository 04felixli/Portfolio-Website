export interface ProjectObject {
    name: string;
    shortDescription: string;
    techStack: string[];
    imagePath: string;
    URL: string;
    reasonForBuilding: string | undefined;
    overview: string | undefined;
    featuresLine: string | undefined; // A sentence to segway into the list of features 
    featuresList: string[] | undefined;
    otherInfo: string | undefined;
    githubLink: string | undefined;
    githubLinkFE: string | undefined;
    githubLinkBE: string | undefined;
    databaseDiagramLink: string | undefined;
    status: ProjectStatus;
}

export enum ProjectStatus {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Completed = 'Completed',
    OnHold = 'On Hold',
    Cancelled = 'Cancelled'
}

export const IMFATProject: ProjectObject = {
    name: 'IMFAT',
    shortDescription: `IMFAT is an Individually Managed Fitness Activity Tracker, a comprehensive web application empowering 
                       gym-goers to track their workouts and personal metrics, monitor progress, and create customized 
                       workout templates effortlessly.`,
    techStack: ['React', 'Node.js', 'Express.js', 'Typescript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    imagePath: '/Images/WorkoutHistory.png',
    URL: "/Projects/IMFAT",
    reasonForBuilding: `As an avid gym-goer myself who started off tracking workouts using Google Sheets and then Apple Notes, 
                       I found that although they were convenient, I disliked how tedious it was to figure out if I was making 
                       short-term or long-term progress. So, I moved on to a multitude of workout tracking apps on the app store, 
                       which were great for tracking progress, but I found it annoying how many of the more advanced features, 
                       such as creating workout templates were behind a paywall.`,
    overview: `Enter IMFAT, or the “Individually Managed Fitness Activity Tracker”. It’s a comprehensive web application empowering 
               gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.
               Best of all? It’s totally free! (Or it will be…when I finish it…)`,
    featuresLine: 'Right now, it has features such as:',
    featuresList: [
        'Tracking workout date, time, and duration',
        'Ability to track various exercises',
        'Flexibility to replace exercises within your workouts as you wish',
        'Auto filling exercise tracking information with previously completed sets and reps',
        'Displaying all workout history for easy progress tracking'
    ],
    otherInfo: 'Currently, I\'m working on implementing user related features such as authentication using Supabase’s authentication functionalities. ',
    githubLink: undefined,
    githubLinkFE: 'https://github.com/04felixli/IMFAT-front-end',
    githubLinkBE: 'https://github.com/04felixli/IMFAT-back-end',
    databaseDiagramLink: 'https://lucid.app/lucidchart/c088f9d1-251f-48fc-806e-1a5ae523c894/edit?viewport_loc=-868%2C-676%2C2325%2C1031%2C0_0&invitationId=inv_20b8b30f-d3c0-404b-ae33-1dff4c2ec497',
    status: ProjectStatus.InProgress
}

export const ChessProject: ProjectObject = {
    name: 'PvP Chess',
    shortDescription: 'A two player chess game with features such as legal move validation and checkmate/stalemate checking.',
    techStack: ['Python', 'Pygame'],
    imagePath: '/Images/ChessGame.png',
    URL: "/Projects/Chess",
    reasonForBuilding: undefined,
    overview: undefined,
    featuresLine: undefined,
    featuresList: undefined,
    otherInfo: undefined,
    githubLink: 'https://github.com/04felixli/Chess-Project',
    githubLinkFE: undefined,
    githubLinkBE: undefined,
    databaseDiagramLink: undefined,
    status: ProjectStatus.Completed
}

export const PortfolioProject: ProjectObject = {
    name: 'Portfolio',
    shortDescription: 'A personal website used to show others stuff about my life, my personal projects, and work experience.',
    techStack: ['React', 'Typescript', 'Tailwind CSS'],
    imagePath: '/Images/PersonalPortfolio.png',
    URL: "/Projects/Portfolio",
    reasonForBuilding: undefined,
    overview: undefined,
    featuresLine: undefined,
    featuresList: [],
    otherInfo: undefined,
    githubLink: undefined,
    githubLinkFE: undefined,
    githubLinkBE: undefined,
    databaseDiagramLink: undefined,
    status: ProjectStatus.Completed
}
