import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Section from "../components/section";
import { Stack } from "@mui/material";

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
          <h1>
            Christian Ilagan
          </h1>
          <h2>
            Aspiring Software Engineer
          </h2>
        </Stack>
      </Section>
      <Section color="#fff">
        hi
      </Section>
    </Layout>
  )
}

export default Landing