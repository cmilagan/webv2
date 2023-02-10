import Techonology from "../types/Technology";
import { FaReact, FaHtml5, FaCss3Alt  } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiExpress, SiPython, SiDocker, SiSpring, SiBootstrap, SiMysql, SiJava, SiAmazonaws, SiCsharp, SiMaterialui } from "react-icons/si";
import { DiDjango } from "react-icons/di";

export const FRONTEND: Techonology[] = [
  {
    tech: 'React',
    image: <FaReact fontSize="32px"/>,
  },
  {
    tech: 'HTML',
    image: <FaHtml5 fontSize="32px"/>,
  },
  {
    tech: 'CSS',
    image: <FaCss3Alt fontSize="32px"/>,
  },
  {
    tech: 'JavaScript',
    image: <SiJavascript fontSize="32px"/>,
  },
  {
    tech: 'TypeScript',
    image: <SiTypescript fontSize="32px"/>,
  },
  {
    tech: 'MaterialUi',
    image: <SiMaterialui fontSize="32px"/>,
  },
  {
    tech: 'Bootstrap',
    image: <SiBootstrap fontSize="32px"/>,
  },
]

export const BACKEND: Techonology[] = [
  {
    tech: 'Express.js',
    image: <SiExpress fontSize="32px"/>,
  },
  {
    tech: 'SpringBoot',
    image: <SiSpring fontSize="32px"/>,
  },
  {
    tech: 'MySQL',
    image: <SiMysql fontSize="32px"/>,
  },
  {
    tech: 'Java',
    image: <SiJava fontSize="32px"/>,
  },
  {
    tech: 'JavaScript',
    image: <SiJavascript fontSize="32px"/>,
  },
  {
    tech: 'Django',
    image: <DiDjango fontSize="32px"/>,
  },
  {
    tech: 'Python',
    image: <SiPython fontSize="32px"/>,
  },
  {
    tech: 'C#',
    image: <SiCsharp fontSize="32px"/>,
  },
  
]

export const QUALITYENGINEERING: Techonology[] = [
  {
    tech: 'K6',
    image: '',
  },
  {
    tech: 'Playwright',
    image: '',
  },
]

export const CLOUD: Techonology[] = [
  {
    tech: 'AWS',
    image: <SiAmazonaws fontSize="32px"/>,
  },
  {
    tech: 'Docker',
    image: <SiDocker fontSize="32px"/>,
  },
]