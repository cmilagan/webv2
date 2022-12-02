import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particle-config";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import styled from "styled-components";


type ParticleProps = React.PropsWithChildren<{}>

const ParticleBackground = () => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }
  return (
    <Particles
      init={particlesInit}
      id="tsparticles"
      params={particlesConfig}
      height="60vh"
      style={{ position: 'absolute', zIndex: 0 }}
    />
  );
}

export default ParticleBackground