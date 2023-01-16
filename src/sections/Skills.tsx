import React from "react";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import Section from "../components/section";
import StyledTitle from "../components/title";
import { Grid, Container, Typography, Stack } from "@mui/material";

const Skills = () => {
  return (
    <div id="skills">
      <Section size="xs" color={BLACK} align="flex-start">
        <Container
            maxWidth="xl"
            sx={{
              paddingTop: "2.5rem",
              paddingBottom: "2rem",
              paddingRight: "2.5rem",
            }}
            
          >
            <Stack
              spacing={14}
            >
              <Typography variant="h5" color={WHITE} textAlign="center">
                Skills
              </Typography>
              <Stack
                direction="row"
                spacing={5}
                justifyContent="space-around"
              >
                <div>
                  hi
                </div>
                <div>
                  hi
                </div>
                <div>
                  hi
                </div>
              </Stack>
            </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default Skills;