import React from "react";
import { BLACK, DARKGREY, WHITE } from "../utils/constants";
import Section from "../components/section";
import StyledTitle from "../components/title";
import { Grid, Container, Typography, Stack } from "@mui/material";
import { AiFillDatabase, AiOutlineSearch, AiOutlineCloud } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi"
import SkillCategory from "../components/skillcategory";
import { FRONTEND, BACKEND, QUALITYENGINEERING, CLOUD } from "../data/technologies";

const Skills = () => {
  return (
    <div id="skills">
      <Section size="xs" color={BLACK} align="flex-start">
        <Container
            sx={{
              paddingTop: "2.5rem",
              paddingBottom: "2rem",
              width: "100vw"
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
                <Grid item xs={12} md={3}>
                  <SkillCategory icon={<FiMonitor fontSize="64px"/>} title="Front End" technologies={FRONTEND}/>
                </Grid>
                <Grid item xs={12} md={3}>
                  <SkillCategory icon={<AiFillDatabase fontSize="64px"/>} title="Back End" technologies={BACKEND}/>
                </Grid>
                <Grid item xs={12} md={3}>
                  <SkillCategory icon={<AiOutlineSearch fontSize="64px"/>} title="QE / Automation" technologies={QUALITYENGINEERING}/>
                </Grid>
                <Grid item xs={12} md={3}>
                  <SkillCategory icon={<AiOutlineCloud fontSize="64px"/>} title="Cloud" technologies={CLOUD}/>
                </Grid>
              </Grid>
            </Stack>
        </Container>
      </Section>
    </div>
  )
}

export default Skills;