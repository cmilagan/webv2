import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { PURPLE } from "../../utils/constants";

const Wrapper = styled(Typography)<WrapperProps>`
  &:after {
    content:" ";
    height: 2px;
    width: ${(props) => props.size ? props.size : "140px"};
    background: ${PURPLE};
    display: block;
    top: 50%;
  }
`

interface WrapperProps {
  size: string;
  variant: any;
  color: string;
  children: React.ReactNode
}

const sizes = {
  sm: "140px",
  md: "200px",
  lg: "240px"
}

const StyledTitle:React.FC<WrapperProps> = ({size, variant, color, children}) => {
  return(
    <Wrapper variant={variant} color={color} size={sizes[size as keyof typeof sizes]}>
      {children}
    </Wrapper>
  )
}

export default StyledTitle;