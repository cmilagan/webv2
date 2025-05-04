import React from "react";
import { BLACK, WHITE } from "../utils/constants";
import { Container, Typography, Stack } from "@mui/material";
import toshiba from "../assets/images/toshiba.png";
import trimble from "../assets/images/trimble.png";
import tyro from "../assets/images/tyro.png";
import unsw from "../assets/images/unsw.png";
import styled from "styled-components";
import WorkItem from "../components/workItem";
import { TYRO, UNSW, TOSHIBA, TRIMBLE } from "../data/work";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/section/Section";

const StyledImage = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  object-fit: scale-down;
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const Work = () => {
  const [activeComponent, setActiveComponent] = React.useState({});
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const handleWorkItemClick = (workItem: object) => {
    setActiveComponent(workItem);

    // Scroll back to the top of the section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="experience" ref={sectionRef}>
      <Section size="xs" color={BLACK} align="flex-start">
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: "2.5rem",
            paddingBottom: "2rem",
          }}
        >
          <Stack spacing={8}>
            <Typography variant="h5" color={WHITE} textAlign="center">
              I've worked with
            </Typography>
            <Stack
              direction="row"
              rowGap={3}
              spacing={4}
              flexWrap="wrap"
              justifyContent="space-around"
            >
              <StyledImage
                src={unsw}
                height="80px"
                onClick={() => handleWorkItemClick(UNSW)}
              />
              <StyledImage
                src={toshiba}
                height="80px"
                onClick={() => handleWorkItemClick(TOSHIBA)}
              />
              <StyledImage
                src={trimble}
                height="80px"
                onClick={() => handleWorkItemClick(TRIMBLE)}
              />
              <StyledImage
                src={tyro}
                height="80px"
                onClick={() => handleWorkItemClick(TYRO)}
              />
            </Stack>
            <AnimatePresence mode="wait">
              {Object.keys(activeComponent).length > 0 && (
                <motion.div
                  key={JSON.stringify(activeComponent)} // Unique key for each component
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <WorkItem workExperience={activeComponent} />
                </motion.div>
              )}
            </AnimatePresence>
          </Stack>
        </Container>
      </Section>
    </div>
  );
};

export default Work;