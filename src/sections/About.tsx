import React from "react";
import { Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <div id="about">
      <Stack
        sx={{ align: "flex-start" }}
      >
        <Stack
          direction="column"
          spacing={4}
          style={{
            margin: "20px", // Added margin to create more space around the content
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography variant="body1">
              Hi! I'm Christian, currently working as a <b>Site Reliability Engineer</b> at <b>Dynatrace</b>! I enjoy full stack development, creating personal projects, and solving problems.
            </Typography>
            <Typography variant="body1">
              Outside of tech, I love exploring new ideas, hitting the gym, and playing sports like Basketball, Volleyball, and MMA.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;