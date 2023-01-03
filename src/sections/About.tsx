import React, {useRef} from "react";
import Section from "../components/section";
import styled from "styled-components";
import { DARKGREY, PURPLE, WHITE } from "../utils/constants";
import { Stack, Container, Typography, Grid } from "@mui/material";
import ME from "../assets/images/me.jpg"
import StyledTitle from "../components/title";


const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  object-fit: contain;
`


const About = () => {
  return (
    <div id="about">
      <Section size="sm" color={DARKGREY} align="flex-start">
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: "6rem",
            paddingBottom: "6rem",
            paddingRight: "2rem",
          }}
          
        >
          <Stack
            direction="column"
            spacing={4}
          >
            <StyledTitle variant="h5" color={WHITE} size="sm">
              About Me
            </StyledTitle>
            <Grid
              container
              spacing={1}  
            >
              <Grid item md={6} xs={12}>
                <Typography variant="body1">
                  Hello! I'm Christian, a recent graduate of Computer Science at UNSW. I am
                  interested in areas of full stack development, including that of web and mobile
                  applications. Currently I'm working as a Software Engineering Intern working at Trimble.
                </Typography>
                <Typography variant="body1">
                  Aside from academics, I enjoy challenging myself through creation of my own personal
                  projects, targeting problems I face. Some of my favourite projects will be displayed
                  here :D.
                </Typography>
                <Typography variant="body1">
                  Technical work aside, I am a person who is always open to exploration and trying out new ideas.
                  Many of my passions include the gym and sports such as Basketball, Volleyball and more recently MMA such as
                  Kickboxing and Mauythai.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Stack
                  direction="row"
                  spacing={1}
                >
                  <StyledImage src={ME} alt="pic_of_me" />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default About