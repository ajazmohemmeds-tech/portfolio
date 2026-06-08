import React, { useRef } from 'react';
import { personalInfo } from '../data';
import './About.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const aboutTextRef = useRef(null);
  const imgRef = useRef(null);

  const text = `Building intelligent systems with clean design and real-world impact.`;
  const aboutText = `I build intelligent systems, experiment with ideas, and turn complex problems into simple, powerful solutions that create real impact. My background spans AI development, multimodal interaction systems, and automated smart environments, all driven by a focus on clean design and practical excellence.

I believe that technology should be as intuitive as it is powerful. Whether it's crafting a RAG-based knowledge assistant or a seamless e-commerce engine, I prioritize structure, performance, and a user-centered approach to every line of code.`;

  useGSAP(() => {
    // Parallax & scale out on scroll
    gsap.to(sectionRef.current, {
      scale: 0.95,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Reveal main text word by word
    if (textRef.current) {
        gsap.fromTo(textRef.current.children, 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              stagger: 0.05, 
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              }
            }
        );
    }

    // Reveal paragraphs
    if (aboutTextRef.current) {
        gsap.fromTo(aboutTextRef.current.children, 
            { y: 30, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              stagger: 0.1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: aboutTextRef.current,
                start: "top 80%",
              }
            }
        );
    }
    
    // Reveal image
    if (imgRef.current) {
        gsap.fromTo(imgRef.current,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1, opacity: 1, duration: 1.2, ease: "expo.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 80%"
                }
            }
        );
    }

  }, { scope: sectionRef });

  return (
    <section 
      id="about" 
      className="section about" 
      ref={sectionRef}
    >
      <div className="container">
        <div className="about-split-layout">
          <div className="about-left-column">
            
            <h2 className="animated-heading" ref={textRef}>
                {text.split(" ").map((word, i) => (
                    <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>{word}</span>
                ))}
            </h2>

            <div className="about-text" ref={aboutTextRef}>
              <p>{aboutText.split('\n\n')[0]}</p>
              <br />
              <p>{aboutText.split('\n\n')[1]}</p>
              
              <div className="education-list">
                <h4>Education</h4>
                {personalInfo.education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="education-item"
                  >
                    <h5>{edu.degree}</h5>
                    <p>{edu.institution}</p>
                    <span>{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          <div className="about-right-column">
            <div 
              className="portrait-wrapper"
              ref={imgRef}
            >
              <div className="portrait-inner reveal">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about_portrait.jpg`} 
                  alt="Ajaz Portrait" 
                  className="about-portrait"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `${import.meta.env.BASE_URL}images/photo2.JPG`;
                  }}
                />
              </div>
              <div className="portrait-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
