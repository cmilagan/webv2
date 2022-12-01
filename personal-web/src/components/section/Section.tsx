import React from "react";
import styled from "styled-components";
import { GREY } from "../../utils/constants";


const Wrapper = styled.div<WrapperProps>`
  height: 60vh;
  margin-left: 70px;
  background-color: ${(props) => props.color ? props.color : GREY};
`


interface WrapperProps {
  color: string;
  // size: string;
  children: React.ReactNode;
}


const Section:React.FC<WrapperProps> = ({color, children}) => {
  return (
    <Wrapper color={color}>
      {children}
    </Wrapper>
  )
}

export default Section