import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Section from "../components/section";
import { Stack, Typography, Button, useTheme } from "@mui/material";
import { LIGHTGREY, PURPLE, WHITE } from "../utils/constants";


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

const Landing = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Section color="">
        <Stack
          sx={{
            height: "100%",
            marginLeft: "2rem", 
          }}
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <Typography variant="h5">
            Hello friends! I'm
          </Typography>
          <Typography variant="h2">
            Christian Ilagan
          </Typography>
          <Typography variant="h3">
            Aspiring swe
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
            <StyledButton>Get in Touch</StyledButton>
            <StyledButton>View Resume</StyledButton>
          </Stack>
        </Stack>
      </Section>
      <Section color="#fff">
        hi
      </Section>
    </Layout>
  )
}

export default Landing