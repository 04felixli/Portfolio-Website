interface AboutMeObject {
    intro: string;
    professionalInterests: string;
    otherInterests: string;
    introduceTechStack: string;
    conclusion: string;
    linkToContact: string;
    linkedIn: string;
    github: string;
    email: string;
    languages: string[];
    technologies: string[];
    devTools: string[];
}

export const AboutMe: AboutMeObject = {
    intro: 'Hey there! My name is Felix Li and I\'m a second year computer engineering student at the University of Waterloo.',
    professionalInterests: 'I just finished my co-op at RIFO Holdings Group as a full stack developer, and now I\'m looking for summer 2024 internships.',
    otherInterests: 'When I\'m not studying, you can find me at the gym, eating, playing basketball, swimming, or learning about random stuff like Star Wars and Marvel! Recently I\'ve been really into web/full stack dev, which is the reason this website exists!',
    introduceTechStack: `Here are the technologies I've worked with:`,
    conclusion: 'Want to chat about anything? Just',
    linkToContact: 'reach out!',
    linkedIn: 'https://www.linkedin.com/in/04felixli',
    github: 'https://github.com/04felixli',
    email: '04felix.li@gmail.com',
    languages: ['Javascript', 'Typescript', 'C#', 'Python', 'C++', 'Java', 'SQL'],
    technologies: ['React', 'ASP.Net Core', '.Net Core', 'Entity Framework Core', 'Node.js', 'Express.js', 'Tailwind CSS'],
    devTools: ['MySQL', 'PostgreSQL', 'Supabase', 'Postman', 'Jira', 'Confluence', 'Bitbucket', 'Git', 'Sourcetree'],
}