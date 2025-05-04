import React from "react";
import PageTemplate from "./templates/PageTemplate";
import Nav from "./components/nav/Nav";
import { Stack } from "@mui/material";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

type LayoutProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== "/") {
      const section = location.pathname.replace("/", ""); // Extract section name from URL
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  return (
    <>
      <PageTemplate>
        <Stack
          direction={{ xs: "column", sm: "row" }} // Stack vertically on xs, horizontally on sm+
          spacing={2}
          sx={{
            backgroundColor: "transparent",
            justifyContent: "center",
            padding: "0 7.5vw",
            position: "relative", // Ensure proper positioning for xs screens
          }}
        >
          <Nav
            sx={{
              position: { xs: "static", sm: "static" }, // Absolute positioning on xs
              top: 0,
              left: 0,
              width: { xs: "100%", sm: "auto" }, // Full width on xs
              zIndex: { xs: 10, sm: "auto" }, // Ensure Nav is above sections on xs
            }}
          />
            <Stack
            direction="column"
            spacing={2}
            sx={{
              zIndex: 2,
              backgroundColor: "transparent", // Semi-transparent white background
              backdropFilter: "blur(10px)", // Apply blur effect
              width: {xs: "100vw", md: "50vw"},
              marginTop: { xs: "100px", sm: 0 }, // Add margin to avoid overlap on xs
            }}
            >
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
};

export default Layout;