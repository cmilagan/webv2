import React from "react";
import PageTemplate from "./templates/PageTemplate";
import Nav from "./components/nav/Nav";
import { Stack } from "@mui/material";
import CustomCursor from "./components/customcursor/CustomCursor";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
type LayoutProps = React.PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <CustomCursor />
      <PageTemplate>
        <Stack direction={"row"} spacing={2}>
          <Nav />
          <Stack direction={"column"} spacing={2}>
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