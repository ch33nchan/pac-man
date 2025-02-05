import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bio from './components/commands/Bio';
import Skills from './components/commands/Skills';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import PacmanWorld from './components/PacmanWorld';

export default function App() {
  return (
    <Router>
      <div className="relative">
        <PacmanWorld />
        <div className="absolute inset-0 pointer-events-none">
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
