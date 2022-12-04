import React, { useEffect, useRef } from "react";
import Section from "../components/section";
import { Stack, Typography, Button, useTheme } from "@mui/material";
import { LIGHTGREY, PURPLE, WHITE, BLACK, DARKGREY } from "../utils/constants";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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
            <a
              href="/Resume.pdf" download="Christian's Resume"
            >
              <StyledButton>
                View Resume
              </StyledButton>
            </a>
          </Stack>
        </Stack>
      </Section>
    </div>
  )
}

export default Hero