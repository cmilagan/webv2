import { Container, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import { WHITE } from "../../utils/constants";

interface WorkItemProps {
  workExperience: any;
}

const WorkItem = ({workExperience}: WorkItemProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container flexDirection="row" rowGap={4}>
        <Grid item xs={12}>
          <Typography variant="h6" textAlign="center">
          {workExperience.company} - {workExperience.role}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" spacing={2}>
            <Typography variant="body2" textAlign="left">
              {workExperience.description}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} alignContent="center" textAlign="center">
          <Grid container justifyContent="center" alignItems="center" rowGap={8}>
            {workExperience.technologies.map((i: any, idx: number) => {
              return (
                <Grid
                  item
                  xs={4}
                  md={4}
                  textAlign="center"
                >
                  <Typography color={WHITE} sx={{ textDecoration: "none", color: WHITE }}>
                    {i["image"]}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkItem;