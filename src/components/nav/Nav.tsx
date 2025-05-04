import React, { useState } from "react";
import { Container, Paper, Stack, Typography, useTheme, IconButton, SwipeableDrawer, Divider } from "@mui/material";
import { PURPLE, WHITE, LIGHTGREY, GREY } from "../../utils/constants";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
`;

const HamburgerWrapper = styled.div`
  background-color: transparent;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  top: 10px;
  right: 10px;
  position: sticky;
  z-index: 3;
`;

const FixedNavWrapper = styled(Paper)`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2; /* Ensure it's above the particles */
`;

const StyledNavLink = styled(ScrollLink)`
  color: ${GREY};
  text-decoration: none;
  position: relative;
  display: inline-block; /* Ensure proper alignment */
  transition: all 0.3s ease-in;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: -50px; /* Adjust spacing as needed */
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.className?.includes("active") ? "80px" : "30px")};
    height: 3px;
    background-color: ${(props) => (props.className?.includes("active") ? PURPLE : GREY)};
    transition: all 0.3s ease;
  }

  &.active {
    color: ${PURPLE};
    transform: translateX(10px); /* Move text slightly to the right */

    &::before {
      width: 40px; /* Full length when active */
      background-color: ${PURPLE};
    }
  }

  &:hover {
    color: ${PURPLE};
    transform: translateX(10px); /* Move text slightly to the right */
    transition: all 0.3s ease;

    &::before {
      width: 40px; /* Expand line on hover */
      background-color: ${PURPLE};
    }
  }
`;

const Nav = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <FixedNavWrapper
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "50vw",
        }}
      >
        <Stack
          spacing={1.25}
          sx={{
            width: "40vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            height: "100vh",
            marginLeft: "5vw",
            backgroundColor: "transparent",
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
          <nav>
            <Stack direction="column" spacing={2} id="scroll-container" sx={{ paddingLeft: "50px", width: "20%" }}>
              <StyledNavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                <StyledLink to="/about">
                  ABOUT
                </StyledLink>
              </StyledNavLink>
              <StyledNavLink
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                <StyledLink to="/experience">
                  EXPERIENCE
                </StyledLink>
              </StyledNavLink>
              <StyledNavLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                <StyledLink to="/projects">
                  PROJECTS
                </StyledLink>
              </StyledNavLink>
            </Stack>
          </nav>
        </Stack>
      </FixedNavWrapper>

      {/* Mobile Navigation */}
      <Paper
        sx={{
          display: { xs: "flex", sm: "none" },
          backgroundColor: "transparent",
        }}
      >
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
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={() => setOpen(false)}
            >
              <Typography variant="h6" color={WHITE}>
                ABOUT
              </Typography>
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={() => setOpen(false)}
            >
              <Typography variant="h6" color={WHITE}>
                EXPERIENCE
              </Typography>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={() => setOpen(false)}
            >
              <Typography variant="h6" color={WHITE}>
                PROJECTS
              </Typography>
            </ScrollLink>
            <Divider />
          </Stack>
        </Container>
      </SwipeableDrawer>
    </>
  );
};

export default Nav;