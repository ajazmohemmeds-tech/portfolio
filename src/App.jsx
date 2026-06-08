import React, { useState, useEffect, useRef } from 'react';
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
import MediaGallery from './components/MediaGallery';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [loading, setLoading] = useState(true);
  const [scrollTarget, setScrollTarget] = useState(null);
  const lenisRef = useRef(null);
  
  const [view, setView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#gallery') return 'gallery';
    if (hash === '#certificate') return 'certificate';
    return 'home';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Synchronize view state with browser back/forward buttons (hash changes)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let newView = 'home';
      if (hash === '#gallery') newView = 'gallery';
      else if (hash === '#certificate') newView = 'certificate';

      if (newView === 'home') {
        if (view === 'gallery') {
          setScrollTarget('volunteering');
        } else if (view === 'certificate') {
          setScrollTarget('research');
        }
      }
      setView(newView);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  // Handle instant scrolling once returning components have mounted in the DOM
  useEffect(() => {
    if (view === 'home' && scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        if (lenisRef.current?.lenis) {
          lenisRef.current.lenis.resize();
          lenisRef.current.lenis.scrollTo(element, { immediate: true });
        } else {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
        setScrollTarget(null);
      } else {
        let frameId;
        const checkElement = () => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            if (lenisRef.current?.lenis) {
              lenisRef.current.lenis.resize();
              lenisRef.current.lenis.scrollTo(el, { immediate: true });
            } else {
              el.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
            setScrollTarget(null);
          } else {
            frameId = requestAnimationFrame(checkElement);
          }
        };
        frameId = requestAnimationFrame(checkElement);
        return () => cancelAnimationFrame(frameId);
      }
    }
  }, [view, scrollTarget]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (newView) => {
    if (newView === 'gallery') {
      window.location.hash = 'gallery';
    } else if (newView === 'certificate') {
      window.location.hash = 'certificate';
    }
  };

  const handleBack = () => {
    if (view === 'gallery') {
      setScrollTarget('volunteering');
    } else if (view === 'certificate') {
      setScrollTarget('research');
    }
    // Clear hash cleanly from URL without page reload
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    setView('home');
  };

  return (
    <ReactLenis root ref={lenisRef}>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {view === 'certificate' ? (
          <CertificateView key="cert" onBack={handleBack} />
        ) : view === 'gallery' ? (
          <MediaGallery key="gallery" onBack={handleBack} />
        ) : (
          !loading && (
            <div className="app" key="main">
              <Header theme={theme} toggleTheme={toggleTheme} />
              <SocialSidebar />
              <KaizenAssistant />
              <main>
                <Hero />
                <About />
                <Research onViewCertificate={() => handleNavigate('certificate')} />
                <Experience />
                <Skills />
                <Projects />
                <Volunteering onViewGallery={() => handleNavigate('gallery')} />
                <Certifications />
              </main>
              <Contact />
            </div>
          )
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;

