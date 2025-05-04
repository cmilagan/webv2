import React from "react";
import PageTemplate from "./templates/PageTemplate";
import Nav from "./components/nav/Nav";
import { Stack } from "@mui/material";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
type LayoutProps = React.PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== "/") {
      const section = location.pathname.replace("/", ""); // Extract section name from URL
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500
      });
    }
  }, [location]);
  return (
    <>
      <PageTemplate>
        <Stack direction={"row"} spacing={2}
          sx={{
            backgroundColor: "transparent",
            justifyContent: "center",
            padding: "0 7.5vw"
          }}>
          <Nav />
          <Stack direction={"column"} spacing={2} sx={{ zIndex: 2, backgroundColor: "transparent", maxWidth: "50vw" }}>
            <Element name="about">
              <About />
            </Element>
            <Element name="experience">
              <Work />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
          </Stack>
        </Stack>
      </PageTemplate>
    </>
  );
}

export default Layout