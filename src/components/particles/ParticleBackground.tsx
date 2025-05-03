import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particle-config";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }
  return (
    <Particles
      init={particlesInit}
      id="tsparticles"
      params={particlesConfig}
      height="100vh"
      style={{ position: 'absolute', zIndex: 0 }}
    />
  );
}

export default ParticleBackground