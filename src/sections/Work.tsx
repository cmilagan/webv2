import React from "react";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import Section from "../components/section";
import StyledTitle from "../components/title";
import { Grid, Container, Typography } from "@mui/material";

const Work = () => {
  return (
    <div id="skills">
      <Section size="xs" color={BLACK} align="flex-start">
        <Container
            maxWidth="lg"
            sx={{
              paddingTop: "2.5rem",
              paddingBottom: "2rem",
            }}
            
          >
            <Grid
              container
              spacing={1}
            >
              <Grid item xs={12} textAlign="center">
                <Typography variant="h5" color={WHITE}>
                  Experience
                </Typography>
              </Grid>              
            </Grid>
        </Container>
      </Section>
    </div>
  )
}

export default Work;