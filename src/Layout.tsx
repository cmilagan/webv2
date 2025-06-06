import React from "react";
import PageTemplate from "./templates/PageTemplate";
import Nav from "./components/nav/Nav";
import { Grid, Stack } from "@mui/material";
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
    <PageTemplate>
      <Grid container
        direction={{ sm: "column", md: "row" }} // Stack vertically on xs, horizontally on sm+
        alignItems="center"
        flexWrap= "nowrap"
      >
        <Grid item sm={12} md={4} sx={{
          height: "100vh", // Full height on medium screens, auto on smalle
          display: "flex", // Ensure it takes full height
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          position:{ md: "fixed", sm:"sticky" }, // Make it sticky
          width: { sm: "100%", md: "25%" }, // Full width on XS, 25% on MD+
          paddingTop: { sm: "100px" },
        }}>
          <Nav
            sx={{
              zIndex: 2, // Ensure it stays above other elements
              display: "flex", // Ensure it remains visible
              alignItems: "center", // Center content vertically
              justifyContent: "center", // Center content horizontally
              backgroundColor: "transparent", // No background
              width: "100%", // Ensure it spans the full width of its container
              height: "100%", // Ensure it spans the full height of its container
            }}
          />
        </Grid>
        <Grid item sm={12} md={8} sx={{
          marginLeft: { md: "50%" }, // Add margin to account for the fixed Nav width
          zIndex: 2,
          flex: 1,
          backgroundColor: "transparent", // Semi-transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          paddingTop: { xs: "100px" },
          height: "100vh", // Ensure it spans the full height of the viewport
        }}>
          <Stack sx={{ padding: "20px"}}>
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
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default Layout;