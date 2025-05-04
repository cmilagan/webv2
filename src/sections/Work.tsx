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
  width:  100px;
  height: 100px;
  object-fit: scale-down;
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`

const Work = () => {
  const [activeComponent, setActiveComponent] = React.useState({});
  const workItemRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (Object.keys(activeComponent).length > 0 && workItemRef.current) {
      workItemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeComponent]);
  return (
    <div id="experience">
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
                onClick={() => {
                  setActiveComponent(UNSW);
                }}
              />
              <StyledImage
                src={toshiba}
                height="80px"
                onClick={() => {
                  setActiveComponent(TOSHIBA);
                }}
              />
              <StyledImage
                src={trimble}
                height="80px"
                onClick={() => {
                  setActiveComponent(TRIMBLE);
                }}
              />
              <StyledImage
                src={tyro}
                height="80px"
                onClick={() => {
                  setActiveComponent(TYRO);
                }}
              />
            </Stack>
            <AnimatePresence mode="wait">
              {Object.keys(activeComponent).length > 0 && (
                <motion.div
                  key={JSON.stringify(activeComponent)} // Unique key for each component
                  ref={workItemRef}
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