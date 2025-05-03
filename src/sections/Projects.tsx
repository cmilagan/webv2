import React from "react";
import Section from "../components/section";
import { DARKGREY, WHITE } from "../utils/constants";
import { Container, Stack } from "@mui/material";
import StyledTitle from "../components/title";
import PROJECTS from "../data/projects";
import ProjectCard from "../components/card/ProjectCard";

const Projects = () => {
    
  return (
    <div id="projects">
      <Section size="lg" color={DARKGREY} align="flex-start">
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <Stack
            direction="column"
            spacing={4}
          >
            <StyledTitle variant="h5" color={WHITE} size="lg">
              Selected Projects
            </StyledTitle>
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

        </Container>
      </Section>
    </div>
  )
}

export default Projects