import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/webv2" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
