export interface ExperienceObject {
    companyName: string;
    description: string;
    startDate: string;
    endDate: string;
    techStack: string;
    cityOrState: string;
    country: string;
    status: string;
    companyLogo: string;
    companyWebsiteLink: string;
    role: string;
}

export const RIFOExperience: ExperienceObject = {
    companyName: 'RIFO Holdings Group',
    description: 'Utilized React, ASP.NET Core, and MySQL to create a comprehensive realtor tool, processing extensive Canadian housing data for informed decision-making. Also developed a C# WinForms app for multimedia display across multiple screens.',
    startDate: 'Sept. 2023',
    endDate: 'Dec. 2023',
    techStack: 'React | ASP.Net Core | MySQL | .NET Core | WinForms',
    cityOrState: 'Toronto',
    country: 'Canada',
    status: 'Co-op',
    companyLogo: '/Images/RifoLogo.jpg',
    companyWebsiteLink: 'https://www.rifo.com/',
    role: 'Full Stack Developer'
}

export const RogersExperience: ExperienceObject = {
    companyName: 'Rogers Communications Inc.',
    description: 'Enhanced fiber optic transport link reliability across various speeds, through collaborative testing methods while supporting a broad spectrum of Rogers customers across GSM, UMTS, LTE, and 5G technologies.',
    startDate: 'Jan. 2023',
    endDate: 'Apr. 2023',
    techStack: 'GSM(2G) | UMTS(3G) | LTE(4G) | 5G | RFC 2544 | BERT | Networks',
    cityOrState: 'Toronto',
    country: 'Canada',
    status: 'Co-op',
    companyLogo: '/Images/RogersLogo.png',
    companyWebsiteLink: 'https://about.rogers.com/?icid=R_COR_JOR_OB4PMA',
    role: 'Switch Technician'
}