import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Volunteering />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
