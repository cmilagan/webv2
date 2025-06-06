import React, { useEffect } from "react";
import { Container, Stack, Typography, useTheme, Box } from "@mui/material";
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
    <Container
      sx={{
        sx
      }}
    >
      <Stack
        spacing={1.25}
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        {/* Header Text */}
        <Typography
          variant="h5"
          color={LIGHTGREY}
          sx={{
            whiteSpace: "nowrap",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Adjust font size dynamically
          }}
        >
          Hi, I'm
        </Typography>
        <Typography
          variant="h3"
          color={WHITE}
          sx={{
            whiteSpace: "nowrap",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Adjust font size dynamically
          }}
        >
          Christian Ilagan
        </Typography>
        <Typography
          variant="h4"
          color={WHITE}
          gutterBottom
          sx={{
            whiteSpace: "nowrap",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Adjust font size dynamically
          }}
        >
          I am a
        </Typography>
        <Typography
          variant="h4"
          color={PURPLE}
          sx={{
            whiteSpace: "nowrap",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Adjust font size dynamically
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
            fontSize: { xs: "0.5rem", sm: "0.75rem", md: "1rem" }, // Adjust font size dynamically
            width: "90%", // Adjust width dynamically
          }}
        >
          Ensuring reliability/observability of software through automation, alerting, data collection, and visualization.
        </Typography>
        <br />

        {/* Navigation Links */}
        <nav>
          <Stack
            direction="column"
            spacing={2}
            id="scroll-container"
            sx={{
              paddingLeft: { xs: "10px", sm: "20px", md: "50px" }, // Adjust padding dynamically
              width: { xs: "100%", sm: "80%", md: "20%" }, // Adjust width dynamically
              display: {sm: "none", md:"flex" }, // Ensure visibility
            }}
          >
            <StyledNavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              <StyledLink to="/about">ABOUT</StyledLink>
            </StyledNavLink>
            <StyledNavLink
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              <StyledLink to="/experience">EXPERIENCE</StyledLink>
            </StyledNavLink>
            <StyledNavLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              <StyledLink to="/projects">PROJECTS</StyledLink>
            </StyledNavLink>
          </Stack>
        </nav>

        {/* Social Media Links */}
        <Stack
          direction="row"
          spacing={3}
          sx={{
            marginTop: "auto",
            justifyContent: "center",
            padding: { xs: "20px", sm: "30px", md: "40px" }, // Adjust padding dynamically
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
    </Container>
  );
};

export default Nav;