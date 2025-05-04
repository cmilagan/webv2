import React from "react";
import styled from "styled-components";
import { GREY } from "../../utils/constants";

const Wrapper = styled.div<WrapperProps>`
  background-color: "transparent";

  display: flex;
  align-items: ${(props) => props.align ? props.align : "flex-start"};
  background-opacity: 0.1;
  width: 100%;
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  padding: "40px", // Added padding to make the section bigger
  padding-left: "60px",
  padding-right: "60px",
`

interface WrapperProps {
  color?: string;
  align?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties; // Added style prop
}

const Section:React.FC<WrapperProps> = ({color, align, children, style}) => {
  return (
    <Wrapper color={color} align={align} style={style}>
      {children}
    </Wrapper>
  )
}

export default Section