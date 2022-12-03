import { Typography } from "@mui/material";
import styled from "styled-components";
import { PURPLE } from "../../utils/constants";

const StyledTitle = styled(Typography)`
  &:after {
    content:" ";
    height: 2px;
    width: 140px;
    background: ${PURPLE};
    display: block;
    top: 50%;
  }
`

export default StyledTitle;