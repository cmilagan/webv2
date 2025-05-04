import React from 'react';
import './App.css';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import CustomCursor from './components/customcursor/CustomCursor';
import ParticleBackground from './components/particles/ParticleBackground';

function App() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<Layout />} />
          <Route path="/experience" element={<Layout />} />
          <Route path="/projects" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
