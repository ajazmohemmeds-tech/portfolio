import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import KaizenAssistant from './components/KaizenAssistant';
import Loader from './components/Loader';
import CertificateView from './components/CertificateView';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {view === 'certificate' ? (
          <CertificateView key="cert" onBack={() => setView('home')} />
        ) : (
          !loading && (
            <div className="app" key="main">
              <Header theme={theme} toggleTheme={toggleTheme} />
              <SocialSidebar />
              <KaizenAssistant />
              <main>
                <Hero />
                <About />
                <Research onViewCertificate={() => setView('certificate')} />
                <Experience />
                <Skills />
                <Projects />
                <Volunteering />
                <Certifications />
              </main>
              <Contact />
            </div>
          )
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
