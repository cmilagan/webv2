import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<WrapperProps>`
  display: flex;
`

// background-opacity: 0.1;
// backdropFilter: "blur(10px)",
// WebkitBackdropFilter: "blur(10px)",
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