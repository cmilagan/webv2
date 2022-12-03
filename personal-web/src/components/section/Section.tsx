import React from "react";
import styled from "styled-components";
import { GREY } from "../../utils/constants";

const Wrapper = styled.div<WrapperProps>`
  min-height: ${(props) => props.size ? props.size: "0px"};
  margin-left: 70px;
  background-color: ${(props) => props.color ? props.color : GREY};
  display: flex;
  align-items: center;
`


interface WrapperProps {
  color: string;
  size: string;
  children: React.ReactNode;
}


const sizes = {
  sm: "60vh",
  md: "70vh",
  lg: "100vh"
}


const Section:React.FC<WrapperProps> = ({color, size, children}) => {
  return (
    <Wrapper size={sizes[size as keyof typeof sizes]} color={color}>
      {children}
    </Wrapper>
  )
}

export default Section