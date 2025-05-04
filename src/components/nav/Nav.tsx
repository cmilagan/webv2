import React, { useEffect } from "react";
import { Paper, Stack, Typography, useTheme, Box } from "@mui/material";
import { PURPLE, WHITE, LIGHTGREY, GREY } from "../../utils/constants";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
`;

const FixedNavWrapper = styled(Paper)`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2; /* Ensure it's above the particles */
`;

const SocialIcon = styled.a`
  color: ${GREY};
  font-size: 36px; /* Icon size */
  width: 48px; /* Explicit width */
  height: 48px; /* Explicit height */
  display: flex; /* Center the icon */
  align-items: center; /* Center the icon vertically */
  justify-content: center; /* Center the icon horizontally */
  transition: color 0.3s ease;

  &:hover {
    color: ${PURPLE};
    cursor: pointer; /* Ensure the cursor changes to a pointer */
  }
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

const Nav = ({ sx }: { sx?: object }) => {
  const theme = useTheme();

  useEffect(() => {
    scroller.scrollTo("about", {
      smooth: true,
      duration: 500,
      offset: -50, // Adjust offset if you have a fixed navbar
    });
  }, []);

  return (
    <Box sx={sx}>
      <FixedNavWrapper
        sx={{
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
          {/* Header Text */}
          <Typography
            variant="h5"
            color={LIGHTGREY}
            sx={{
              whiteSpace: "nowrap", // Prevent line breaks
              textAlign: { xs: "center", sm: "left" }, // Center on xs screens
            }}
          >
            Hi, I'm
          </Typography>
          <Typography
            variant="h3"
            color={WHITE}
            sx={{
              whiteSpace: "nowrap", // Prevent line breaks
              textAlign: { xs: "center", sm: "left" }, // Center on xs screens
            }}
          >
            Christian Ilagan
          </Typography>
          <Typography
            variant="h4"
            color={WHITE}
            gutterBottom
            sx={{
              whiteSpace: "nowrap", // Prevent line breaks
              textAlign: { xs: "center", sm: "left" }, // Center on xs screens
            }}
          >
            I am a
          </Typography>
          <Typography
            variant="h4"
            color={PURPLE}
            sx={{
              whiteSpace: "nowrap", // Prevent line breaks
              textAlign: { xs: "center", sm: "left" }, // Center on xs screens
            }}
          >
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

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              [theme.breakpoints.between("xs", "sm")]: {
                width: "70vw",
                textAlign: "center", // Center text on xs screens
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
            <Stack direction="column" spacing={2} id="scroll-container" sx={{ paddingLeft: "50px", width: "20%", display: { xs: "none", sm: "block" } }}>
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
          {/* Social Media Links */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              marginTop: "auto",
              justifyContent: "center", // Center icons
              padding: "40px",
            }}
          >
            <SocialIcon href="https://github.com/cmilagan" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/cmilagan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
          </Stack>
        </Stack>
      </FixedNavWrapper>
    </Box>
  );
};

export default Nav;