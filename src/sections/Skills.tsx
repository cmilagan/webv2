import React from "react";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import Section from "../components/section";
import StyledTitle from "../components/title";
import { Grid, Container, Typography, Stack } from "@mui/material";
import { AiFillDatabase, AiOutlineSearch, } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi"
import SkillCategory from "../components/skillcategory";

const Skills = () => {
  return (
    <div id="skills">
      <Section size="xs" color={BLACK} align="flex-start">
        <Container
            maxWidth="xl"
            sx={{
              paddingTop: "2.5rem",
              paddingBottom: "2rem",
              paddingRight: "2.5rem",
            }}
            
          >
            <Stack
              spacing={8}
            >
              <Typography variant="h5" color={WHITE} textAlign="center">
                Skills
              </Typography>
              <Grid 
                container
                rowSpacing={4}
              >
                <Grid item xs={12} md={4}>
                  <SkillCategory icon={<FiMonitor fontSize="64px"/>} title="Front End" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SkillCategory icon={<AiFillDatabase fontSize="64px"/>} title="Back End" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SkillCategory icon={<AiOutlineSearch fontSize="64px"/>} title="Quality Engineering" />
                </Grid>
              </Grid>
            </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default Skills;