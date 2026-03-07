import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useSpring, useMotionValue } from 'motion/react';
import Home from './pages/Home';
import Biz from './pages/Biz';
import Tech from './pages/Tech';
import Art from './pages/Art';
import ArtDetail from './pages/ArtDetail';
import Lead from './pages/Lead';
import Writing from './pages/Writing';

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.hover-target')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden lg:block border border-accent/50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: isHovered ? 'rgba(213, 136, 65, 0.1)' : 'rgba(213, 136, 65, 0.8)',
        scale: isHovered ? 3.5 : 1,
      }}
      transition={{ duration: 0.15 }}
    />
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biz" element={<Biz />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/art" element={<Art />} />
        <Route path="/art/:id" element={<ArtDetail />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </Router>
  );
}
