import { Stack, Typography } from "@mui/material";
import React from "react";
import { LIGHTGREY } from "../../utils/constants";

interface SkillCategoryProps {
  icon: any,
  title: any,
  technologies?: any,
}

const SkillCategory:React.FC<SkillCategoryProps> = ({icon, title, technologies}) => {
  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        display="flex"
        alignItems="center"
      >
        {icon}
        <Typography variant="h6" color={LIGHTGREY}>
          {title}
        </Typography>
      </Stack>
    </>
  )
}

export default SkillCategory;