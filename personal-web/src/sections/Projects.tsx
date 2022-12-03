import React from "react";
import Section from "../components/section";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import { Container, Stack } from "@mui/material";
import StyledTitle from "../components/title";

const Projects = () => {
    
  return (
    <Section size="sm" color={DARKGREY}>
      <Container
        maxWidth="lg"
        sx={{
          paddingRight: "2rem",
        }}
      >
        <Stack
          direction="column"
          spacing={4}
        >
          <StyledTitle variant="h5" color={WHITE}>
            Selected Projects
          </StyledTitle>
        </Stack>

      </Container>
    </Section>
  )
}

export default Projects