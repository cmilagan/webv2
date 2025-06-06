import React from "react";
import Section from "../components/section/Section";
import { DARKGREY } from "../utils/constants";
import { Stack } from "@mui/material";
import PROJECTS from "../data/projects";
import ProjectCard from "../components/card/ProjectCard";

const Projects = () => {
    
  return (
    <div id="projects">
      <Stack
        sx={{ align: "flex-start" }}
      >
        <Stack
          direction="column"
          spacing={4}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.title}
              position={index}
              title={project.title}
              description={project.description}
              img={project.img}
              categories={project.categories}
              github={project.github}
              deploy={project.deploy}
              link={project.link}
            />
          ))}
        </Stack>
      </Stack>
    </div>
  )
}

export default Projects