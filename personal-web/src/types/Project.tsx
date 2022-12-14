import Category from "./Category";

type Project = {
    title: string;
    description: string;
    img: string;
    categories: Category[];
    link?: string;
    github?: string;
    deploy?: string;
  };
  
  export default Project;