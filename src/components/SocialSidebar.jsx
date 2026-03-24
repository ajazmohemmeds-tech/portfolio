import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalInfo } from '../data';
import { Linkedin, Github, Mail } from 'lucide-react';
import './SocialSidebar.css';

const SocialIcon = ({ children, href, target, rel }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="social-link-3d"
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.a>
  );
};

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-line top"></div>
      <SocialIcon href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} />
      </SocialIcon>
      <SocialIcon href={personalInfo.github} target="_blank" rel="noopener noreferrer">
        <Github size={20} />
      </SocialIcon>
      <SocialIcon href={`mailto:${personalInfo.email}`}>
        <Mail size={20} />
      </SocialIcon>
      <div className="social-line bottom"></div>
    </div>
  );
};

export default SocialSidebar;
