import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";


const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />      
    </Layout>
  )
}

export default Landing