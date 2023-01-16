import React from "react";
import styled from "styled-components";
import { GREY } from "../../utils/constants";

const Wrapper = styled.div<WrapperProps>`
  min-height: ${(props) => props.size ? props.size: "0px"};
  margin-left: 70px;
  background-color: ${(props) => props.color ? props.color : GREY};
  display: flex;
  align-items: ${(props) => props.align ? props.align : "flex-start"};
  @media screen and (max-width: 599px) {
    margin-left: 0px;
  }
`


interface WrapperProps {
  color: string;
  size?: string;
  align?: string;
  children?: React.ReactNode;
}


const sizes = {
  xs: "40vh",
  sm: "60vh",
  md: "70vh",
  lg: "100vh"
}


const Section:React.FC<WrapperProps> = ({color, size, align, children}) => {
  return (
    <Wrapper size={sizes[size as keyof typeof sizes]} color={color} align={align}>
      {children}
    </Wrapper>
  )
}

export default Section