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
    description:
      'Motify is a Google Chrome extension which allows users to create reminder notifications through a custom built user interface. The user is given a reminder at the specified time through a custom built notification popup that appears in the middle of their screen. Users can edit, delete and make notifications recurring.',
    img: Motify,
    categories: [REACTJS, FRONTEND, UX_UI_DESIGN ],
    link: '',
    github: 'https://github.com/cmilagan/MotifY',
    deploy: '',
  },
  {
    title: 'StimPact - Neural Stimulator',
    description:
      'Stimpact is an Engineered product that allows reaserchers to effectively study the effects of Neuralstimulation, whilst being widely accessible and cost effective. This product utilises off the shelf components in conjunction with custom built/coded software and firmware that allows precise real-time commands to be outputted and read through the user interface.',
    img: StimPact,
    categories: [FIRMWARE, HARDWARE, BACKEND, FRONTEND ],
    link: 'https://www.youtube.com/watch?v=gLptQHzC2mA',
    github: '',
    deploy: '',
  },
  {
    title: 'Blue Space Rentals - Booking System',
    description:
      'Blue Space Rentals is a car parking spot booking system which allows users to book, list and view available parking spaces near a specified area. This project used ReactJS as the frontend and Django as the backend, utilising the Stripe API to confirm and process payments/booking requests, and google maps api to view created and available parking spots geographically.',
    img: BSRentals,
    categories: [REACTJS, PYTHON, FRONTEND, BACKEND ],
    link: '',
    github: 'https://github.com/unsw-cse-comp3900-9900-22T2/capstone-project-3900-m12a-blue',
    deploy: '',
  },
]

export default PROJECTS