import Category from "../types/Category";
import Project from "../types/Project";
import Motify from "../assets/images/motify.png";
import StimPact from "../assets/images/stimpact.jpg";
import BSRentals from "../assets/images/bsrentals.png"

const REACTJS: Category = {
  title: 'ReactJS',
  color: '#5ED3F3',
};
  
const FRONTEND: Category = {
  title: 'Frontend',
  color: '#a5c174',
};

const BACKEND: Category = {
  title: 'Backend',
  color: '#4285F4',
};

const UX_UI_DESIGN: Category = {
  title: 'UX/UI',
  color: '#7c43be',
};

const PYTHON: Category = {
  title: 'Python',
  color: '#8A8AF6',
};

const FIRMWARE: Category = {
  title: 'Firmware',
  color: '#ebb734',
};

const HARDWARE: Category = {
  title: 'Hardware',
  color: '#cc1f44',
};
const PROJECTS: Project[] = [
  {
    title: 'Motify - Chrome Extension',
    description: 'A Chrome extension for creating and managing reminder notifications.',
    img: Motify,
    categories: [REACTJS, FRONTEND, UX_UI_DESIGN],
    github: 'https://github.com/cmilagan/MotifY',
  },
  {
    title: 'StimPact - Neural Stimulator',
    description: 'A cost-effective neural stimulator for researchers with real-time control.',
    img: StimPact,
    categories: [FIRMWARE, HARDWARE, BACKEND, FRONTEND],
    link: 'https://www.youtube.com/watch?v=gLptQHzC2mA',
  },
  {
    title: 'Blue Space Rentals - Booking System',
    description: 'A car parking booking system with ReactJS frontend and Django backend.',
    img: BSRentals,
    categories: [REACTJS, PYTHON, FRONTEND, BACKEND],
    github: 'https://github.com/unsw-cse-comp3900-9900-22T2/capstone-project-3900-m12a-blue',
  },
];

export default PROJECTS