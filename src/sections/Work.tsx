import React from "react";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import Section from "../components/section";
import StyledTitle from "../components/title";
import { Grid, Container, Typography, Stack } from "@mui/material";
import toshiba from "../assets/images/toshiba.png";
import trimble from "../assets/images/trimble.png";
import tyro from "../assets/images/tyro.png";
import unsw from "../assets/images/unsw.png";
import styled from "styled-components";


const StyledImage = styled.img`
  float: left;
  width:  100px;
  height: 100px;
  object-fit: scale-down;
`

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
            <Stack
              spacing={8}
            >
              <Typography variant="h5" color={WHITE} textAlign="center">
                I've worked with
              </Typography>
              <Stack direction="row" rowGap={3} spacing={6} flexWrap="wrap" justifyContent="space-around">
                <StyledImage src={unsw} height="80px" /> 
                <StyledImage src={toshiba} height="80px" /> 
                <StyledImage src={trimble} height="80px" /> 
                <StyledImage src={tyro} height="80px" /> 
              </Stack>
            </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default Work;