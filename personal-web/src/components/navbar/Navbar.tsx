import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import Logo from '../../assets/images/logo.png';
import Lsub from '../../assets/images/logosubtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BLACK, GREY, PURPLE} from '../../utils/constants'

const Wrapper = styled.div`
  background: ${BLACK};
  width: 70px;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3;
  min-height: 500px
`

const StyledLink = styled(Link)`
  display: block;
  padding: 12px 0;
  text-decoration: none;
`

const StyledNavLink = styled(ScrollLink)`
  color: ${GREY};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in;
  &.active {
    * {
      color: ${PURPLE};
    }
  }

  &:hover {
    color: ${PURPLE};
    transition: all 0.3s ease;
    cursor: pointer;
    svg {
      transition: all 0.3s ease-in;
      opacity: 0;
    }

    &:after {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }

  &:after {
    content: '';
    font-size: 9px;
    letter-spacing: 2px;
    position: absolute;
    display: block;
    width: 100%;
    opacity: 0;
    transition: all 0.3 ease-out;
  }

  &:nth-child(1) {
    &::after {
      content: 'HOME';
    }
  }

  &:nth-child(2) {
    &::after {
      content: 'ABOUT';
    }
  }

  &:nth-child(3) {
    &::after {
      content: 'PROJECTS';
    }
  }
`

const LogoIcon = styled.img`
  display: block;
  margin: 8px auto;
  width: 45px;
  height: auto;
`

const IconButton = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: ${GREY};
`



const Navbar = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Stack
        sx={{ height: '100%', textAlign: 'center' }}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >

        <StyledLink to="/">
          <LogoIcon src={Logo} alt="logo" />
          <LogoIcon src={Lsub} alt="cmilagan." />
        </StyledLink>

        <nav>
          <Stack
            sx={{ width: "70px" }}
            direction="column"
            spacing={8}
          >
              <StyledNavLink to="hero" activeClass="active" spy smooth duration={500}>
                <IconButton icon={faHome}/>
              </StyledNavLink>
              <StyledNavLink to="about" activeClass="active" spy smooth duration={500}>
                <IconButton icon={faUser}/>
              </StyledNavLink>
              <StyledNavLink to="projects" activeClass="active" spy smooth duration={500}>
                <IconButton icon={faLaptop}/>
              </StyledNavLink>
              
          </Stack>

        </nav>
        <Stack
          sx={{marginBottom: '12px'}}
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <a
            target="_blank"
            rel="norefferer"
            href="https://www.linkedin.com/in/cmilagan/"
          >
            <AiFillLinkedin color={theme.palette.background.default} fontSize="18px"/>
          </a>
          <a
            target="_blank"
            rel="norefferer"
            href="https://github.com/cmilagan"
          >
            <AiOutlineGithub color={theme.palette.background.default} fontSize="18px"/>
          </a>
          <a
            target="_blank"
            rel="norefferer"
            href="mailto:cmilagan7@gmail.com"
          >
            <AiFillMail color={theme.palette.background.default} fontSize="18px"/>
          </a>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default Navbar;