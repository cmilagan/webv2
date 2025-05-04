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
      style={{ position: 'fixed', zIndex: 1, top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}
    />
  );
}

export default ParticleBackground