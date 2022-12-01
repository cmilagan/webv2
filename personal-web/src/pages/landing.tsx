import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Section from "../components/section";
import { Stack, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Layout>
      <Section color="">
        <Stack
          sx={{ height: "100%", marginLeft: "20px" }}
          justifyContent="center"
          direction="column"
          spacing={1}
        >
          <Typography variant="h1">
            Christian Ilagan
          </Typography>
          <Typography variant="h2">
            Aspiring swe
          </Typography>
        </Stack>
      </Section>
      <Section color="#fff">
        hi
      </Section>
    </Layout>
  )
}

export default Landing