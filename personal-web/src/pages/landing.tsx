import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../sections/Hero";
import About from "../sections/About";


const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export default Landing