import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/images/logo.png';
import Lsub from '../../assets/images/logosubtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const Wrapper = styled.div`
  background: #181818;
  width: 70px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px
`

const StyledLink = styled(Link)`
  display: block;
  padding: 12px 0;
  text-decoration: none;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`

const LogoIcon = styled.img`
  display: block;
  margin: 8px auto;
  width: 45px;
  height: auto;
`

const IconButton = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: "#4d4d4e";
`



const Navbar = () => {

  return (
    <Wrapper>
      <Stack
        sx={{ height: '100%' }}
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
            direction="column"
            spacing={5}
            alignItems="center"
          >
            <StyledNavLink to="/">
              <IconButton icon={faHome} color="#4d4d4e"/>
            </StyledNavLink>
            <StyledNavLink to="/about">
              <IconButton icon={faUser} color="#4d4d4e"/>
            </StyledNavLink>
            <StyledNavLink to="/projects">
              <IconButton icon={faLaptop} color="#4d4d4e"/>
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
            <AiFillLinkedin color="4d4d4e" fontSize="18px"/>
          </a>
          <a
            target="_blank"
            rel="norefferer"
            href="https://github.com/cmilagan"
          >
            <AiOutlineGithub color="4d4d4e" fontSize="18px"/>
          </a>
          <a
            target="_blank"
            rel="norefferer"
            href="mailto:cmilagan7@gmail.com"
          >
            <AiFillMail color="4d4d4e" fontSize="18px"/>
          </a>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default Navbar;