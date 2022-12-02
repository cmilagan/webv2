import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Section from "../components/section";
import { Stack, Typography, Button, useTheme } from "@mui/material";


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
                width: "80vw",
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
            <Button variant="outlined">Get in Touch</Button>
            <Button variant="outlined">View Resume</Button>
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