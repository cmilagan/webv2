import React, { useState } from "react";
import { Container, Paper, Stack, Typography, useTheme, IconButton, SwipeableDrawer, Button, Divider } from "@mui/material";
import { PURPLE, WHITE, LIGHTGREY } from "../../utils/constants";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerWrapper = styled.div`
  background-color: transparent;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  top: 10px;
  right: 10px;
  position: fixed;
  z-index: 3;
`;

const FixedNavWrapper = styled(Paper)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2;
  box-shadow: none;
`;

const Nav = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <FixedNavWrapper sx={{ display: { xs: "none", sm: "block" } }}>
        <Stack
          spacing={1.25}
          sx={{
            width: "40vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            marginLeft: "5vw",
          }}
        >
          <Typography variant="h5" color={LIGHTGREY}>
            Hi, I'm
          </Typography>
          <Typography variant="h3" color={WHITE}>
            Christian Ilagan
          </Typography>
          <Typography variant="h4" color={WHITE} gutterBottom>
            I am a
          </Typography>
          <Typography variant="h4" color={PURPLE}>
            <Typewriter
              options={{
                strings: ["Site Reliability Engineer", "Developer", "Sports Enthusiast"],
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
              [theme.breakpoints.between("xs", "sm")]: {
                width: "70vw",
              },
              [theme.breakpoints.between("sm", "md")]: {
                width: "45vw",
              },
              [theme.breakpoints.between("md", "lg")]: {
                width: "35vw",
              },
              [theme.breakpoints.up("xl")]: {
                width: "25vw",
              },
            }}
          >
            Ensuring reliability/observability of software through automation, alerting, data collection and visualisation.
          </Typography>
          <br />
          <Stack direction="column" spacing={3}>
            <a> About </a>
            <a> Experience </a>
            <a> Projects </a>
          </Stack>
        </Stack>
      </FixedNavWrapper>

      {/* Mobile Navigation */}
      <Paper sx={{ display: { xs: "flex", sm: "none" } }}>
        <HamburgerWrapper>
          <IconButton onClick={() => setOpen(true)}>
            <RxHamburgerMenu color={WHITE} size="40px" />
          </IconButton>
        </HamburgerWrapper>
      </Paper>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Container
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="column" spacing={5}>
            <ScrollLink to="hero" activeClass="active" spy smooth duration={500}>
              <Button variant="text" onClick={() => setOpen(false)}>
                <Typography variant="h6" color={WHITE}>
                  About
                </Typography>
              </Button>
            </ScrollLink>
            <ScrollLink to="about" activeClass="active" spy smooth duration={500}>
              <Button variant="text" onClick={() => setOpen(false)}>
                <Typography variant="h6" color={WHITE}>
                  Experience
                </Typography>
              </Button>
            </ScrollLink>
            <ScrollLink to="projects" activeClass="active" spy smooth duration={500}>
              <Button variant="text" onClick={() => setOpen(false)}>
                <Typography variant="h6" color={WHITE}>
                  Projects
                </Typography>
              </Button>
            </ScrollLink>
            <Divider />
          </Stack>
        </Container>
      </SwipeableDrawer>
    </>
  );
};

export default Nav;