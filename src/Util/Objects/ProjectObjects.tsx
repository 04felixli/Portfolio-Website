export interface ProjectObject {
    name: string;
    shortDescription: string; // description for project card
    techStack: string[];
    cardImagePath: string; // image path for card
    detailedImagePath: string | undefined; // path to image to display on detailed project page
    URL: string; // URL to the detailed project page
    reasonForBuilding: string | undefined;
    overview: string | undefined;
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
    cardImagePath: '/Images/WorkoutHistory.png',
    detailedImagePath: '/Images/StartWorkout.png',
    URL: "/Projects/IMFAT",
    reasonForBuilding: `As an avid gym-goer myself who started off tracking workouts using Google Sheets and then Apple Notes, 
                       I found that although they were convenient, I disliked how tedious it was to figure out if I was making 
                       short-term or long-term progress. So, I moved on to a multitude of workout tracking apps on the app store, 
                       which were great for tracking progress, but I found it annoying how many of the more advanced features, 
                       such as creating workout templates were behind a paywall.`,
    overview: `Enter IMFAT, or the “Individually Managed Fitness Activity Tracker”. It’s a comprehensive web application empowering 
               gym-goers to track their workouts and personal metrics, monitor progress, and create customized workout templates effortlessly.
               Best of all? It’s totally free! (Or it will be…when I finish it…)`,
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
    cardImagePath: '/Images/ChessGame.png',
    detailedImagePath: '/Images/ChessGame.png',
    URL: "/Projects/Chess",
    reasonForBuilding: 'The goal of this project was to create an interactive Player vs. Player chess game using Python and the Pygame library.',
    overview: undefined,
    featuresList: [
        'Interactive GUI',
        'Piece Movement and Rules',
        'Game State Management',
        'Endgame Conditions'
    ],
    otherInfo: `This project helped me better understand Object-Oriented Programming, as 
                I used OOP principles to architect the game's structure, 
                encapsulate functionalities, and manage interactions between different game components.`,
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
    cardImagePath: '/Images/PersonalPortfolio.png',
    detailedImagePath: undefined,
    URL: "/Projects/Portfolio",
    reasonForBuilding: `I'd be lying a bit (possibly a lot) if I told you I built this site as a "representation of my passion for creating intuitive and 
                        visually appealing digital experiences".
                        So, let's be honest here, I definitely built this site just so people would have a one-stop-shop to see a 
                        detailed explaination of all the projects and experiences I've done or had in the past. 
                        Making pixels on a screen look pretty is also pretty theraputic, so there's that as well I guess :)`,
    overview: `And considering you spent more than 10 seconds on this website and made it this to this page, I'd say this "project" needs no further explanation or picture to go with it.`,
    featuresList: [
        'Responsive Design',
        'Project Showcase',
        'Interactive Elements',
        'Smooth Navigation'
    ],
    otherInfo: undefined,
    githubLink: 'https://github.com/04felixli/Portfolio-Website',
    githubLinkFE: undefined,
    githubLinkBE: undefined,
    databaseDiagramLink: undefined,
    status: ProjectStatus.Completed
}
