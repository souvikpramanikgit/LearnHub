import React, { useEffect, useState } from 'react';
import './ScrollProgressBar.css';

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-bar-container">
      <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
