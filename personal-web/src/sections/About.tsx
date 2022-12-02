import React from "react";
import Section from "../components/section";
import styled from "styled-components";
import { DARKGREY, LIGHTGREY, PURPLE, WHITE } from "../utils/constants";
import { Stack, Container, useTheme, Typography, Grid } from "@mui/material";
import ME from "../assets/images/me.jpg"


const StyledTitle = styled(Typography)`
  &:after {
    content:" ";
    height: 2px;
    width: 140px;
    background: ${PURPLE};
    display: block;
    top: 50%;
  }
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  object-fit: contain;
`


const About = () => {
  const theme = useTheme();
  return (
    <Section size="md" color={DARKGREY}>
      <Container maxWidth="lg" style={{paddingTop: "6rem"}}>
        <Stack
          direction="column"
          spacing={4}
        >
          <StyledTitle variant="h5" color={WHITE}>
            About Me
          </StyledTitle>
          <Grid
            container
            spacing={2}  
          >
            <Grid item md={6} xs={12}>
              <Typography variant="body1">
                Hello! I'm Christian, a recent graduate of Computer Science at UNSW. I am
                interested in areas of full stack development, including that of web and mobile
                applications. Currently I'm working as full stack intern working with the .NET framework
                at Trimble.
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
  )
}

export default About