import Work from "../types/Work";
import { FaReact  } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiDocker, SiCsharp, SiPython, SiExpress, SiSpring, SiCypress, SiJava, SiAmazonaws, SiMaterialui } from "react-icons/si";


export const TYRO: Work = {
  company: "Tyro Payments",
  role: "Quality Engineer",
  description: "Developed automation and efficiency tools to streamline development, leveraging JavaScript, Node, and other technologies.",
  technologies: [
    { tech: 'JavaScript', image: <SiJavascript fontSize="32px" /> },
    { tech: 'TypeScript', image: <SiTypescript fontSize="32px" /> },
    { tech: 'React', image: <FaReact fontSize="32px" /> },
    { tech: 'MaterialUi', image: <SiMaterialui fontSize="32px" /> },
    { tech: 'Docker', image: <SiDocker fontSize="32px" /> },
    { tech: 'AWS', image: <SiAmazonaws fontSize="32px" /> },
  ],
};

export const TRIMBLE: Work = {
  company: "Trimble Viewpoint",
  role: "Software Engineering Intern",
  description: "Worked on POCs, demos, and scalable solutions using Node, React, Express, AWS, and SpringBoot. Defined and consumed APIs for frontend integration.",
  technologies: [
    { tech: 'JavaScript', image: <SiJavascript fontSize="32px" /> },
    { tech: 'TypeScript', image: <SiTypescript fontSize="32px" /> },
    { tech: 'React', image: <FaReact fontSize="32px" /> },
    { tech: 'MaterialUi', image: <SiMaterialui fontSize="32px" /> },
    { tech: 'AWS', image: <SiAmazonaws fontSize="32px" /> },
    { tech: 'Express.js', image: <SiExpress fontSize="32px" /> },
    { tech: 'SpringBoot', image: <SiSpring fontSize="32px" /> },
    { tech: 'Java', image: <SiJava fontSize="32px" /> },
  ],
};

export const TOSHIBA: Work = {
  company: "Toshiba",
  role: "Software Engineering Intern",
  description: "Enhanced testing suites and implemented features for printer drivers and UI using .NET, JavaScript, and plugins.",
  technologies: [
    { tech: 'JavaScript', image: <SiJavascript fontSize="32px" /> },
    { tech: 'Python', image: <SiPython fontSize="32px" /> },
    { tech: 'C#', image: <SiCsharp fontSize="32px" /> },
  ],
};

export const UNSW: Work = {
  company: "UNSW Stimpact VIP",
  role: "Software Engineer",
  description: "Developed firmware in C and maintained legacy UI in Python. Evaluated optimal technologies for project needs.",
  technologies: [
    { tech: 'JavaScript', image: <SiJavascript fontSize="32px" /> },
    { tech: 'Python', image: <SiPython fontSize="32px" /> },
    { tech: 'Cypress', image: <SiCypress fontSize="32px" /> },
  ],
};
