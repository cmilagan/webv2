import React from "react";
import PageTemplate from "./templates/PageTemplate";
import Nav from "./components/nav/Nav";
import { Stack } from "@mui/material";
import CustomCursor from "./components/customcursor/CustomCursor";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import ParticleBackground from "./components/particles/ParticleBackground";
type LayoutProps = React.PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <PageTemplate>
        <Stack direction={"row"} spacing={2}
          sx={{
            backgroundColor: "transparent",
            justifyContent: "center",
            padding: "0 7.5vw"
          }}>
          <Nav />
          <Stack direction={"column"} spacing={2} sx={{ zIndex: 2, backgroundColor: "transparent", maxWidth: "50vw" }}>
            <About />
            <Work />
            <Projects />
          </Stack>
        </Stack>
      </PageTemplate>
    </>
  );
}

export default Layout