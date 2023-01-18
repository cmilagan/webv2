import { Stack, Typography } from "@mui/material";
import React from "react";
import { LIGHTGREY } from "../../utils/constants";
import { Modal, Box, Button } from "@mui/material";
import styled from "styled-components";

interface SkillCategoryProps {
  icon: any,
  title: any,
  technologies?: any,
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ButtonWrapper = styled.div`
  cursor: pointer;
`


const SkillCategory:React.FC<SkillCategoryProps> = ({icon, title, technologies}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  return (
    <>
      <ButtonWrapper onClick={handleOpen}>
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
      </ButtonWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={3}>
            <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
              {title}
            </Typography>
            <Box sx={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Stack direction="row" spacing={7}>
                {technologies.map((i: any, idx: number) => {
                  return (
                    i["image"]
                  )
                })}
              </Stack>
            </Box>

          </Stack>
        </Box>
      </Modal>
    </>    
  )
}

export default SkillCategory;