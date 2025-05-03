import React from "react";
import Layout from "../components/layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Work from "../sections/Work";


const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
    </Layout>
  )
}

export default Landing