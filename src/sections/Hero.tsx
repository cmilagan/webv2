import React from "react";
import Section from "../components/section";
import { Stack, Typography, useTheme } from "@mui/material";
import { PURPLE, WHITE, BLACK } from "../utils/constants";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import ParticleBackground from "../components/particles/ParticleBackground";

const StyledButton = styled.button`
  color: ${WHITE};
  border: 1px solid ${PURPLE};
  padding: 10px 16px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  background-color: unset;
  transition: all 0.3s ease;
  & * {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(213, 184, 255, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`

const Hero = () => {
  const theme = useTheme()
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cmilaganresume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cmilaganresume.pdf';
            alink.click();
        })
    })
}
  return (
    <div id="hero">
      <ParticleBackground/>
      <Section size="sm" color={BLACK} align="center">

        <Stack
          sx={{
            height: "100%",
            marginLeft: "2rem",
            marginRight: "2rem",
            zIndex: 1,
          }}
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <Typography variant="h5">
            Hello there! I'm
          </Typography>
          <Typography variant="h2" color={WHITE}>
            Christian Ilagan
          </Typography>
          <Typography variant="h3" color={WHITE} gutterBottom>
            I enjoy
          </Typography>
          <Typography variant="h3" color={PURPLE}>
            <Typewriter
              options={{
                strings: ['Software Engineering', 'Full Stack Development', 'Basketball & Volleyball'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 40,
              }}
            />
          </Typography>
          <Typography
            variant="body2"
            sx={{
              [theme.breakpoints.between('xs', 'sm')]: {
                width: "70vw",
              },
              [theme.breakpoints.between('sm', 'md')]: {
                width: "45vw",
              },
              [theme.breakpoints.between('md', 'lg')]: {
                width: "35vw",
              },
              [theme.breakpoints.up('xl')]: {
                width: "25vw",
              },   
            }}
          >
            I'm a computer science graduate who loves developing, learning and experimenting with new things!
          </Typography>
          <br />
          <Stack
            direction="row"
            spacing={3}
          >
            <a
              target="_blank"
              rel="norefferer"
              href="mailto:cmilagan7@gmail.com"
            >
              <StyledButton>
                Get in Touch
              </StyledButton>
            </a>
            <StyledButton onClick={onButtonClick}>
              View Resume
            </StyledButton>
          </Stack>
        </Stack>
      </Section>
    </div>
  )
}

export default Hero
