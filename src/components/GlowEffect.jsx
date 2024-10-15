import React, { useEffect } from 'react';
import grid from '../assets/grid.svg';

const GlowEffect = () => {
  useEffect(() => {
    const light = document.querySelector('.light');
    const grid = document.querySelector('#hex-grid');

    let lastMove = 0;
    const throttle = 16; // ~60fps

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastMove < throttle) return;
      
      lastMove = currentTime;

      const x = e.clientX;
      const y = e.clientY;

      light.style.transform = `translate(${x - window.innerWidth / 2}px, ${y - window.innerHeight / 2}px)`;
    };

    grid.addEventListener('mousemove', handleMouseMove);

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" id="hex-grid">
      {/* Glow Effect */}
      <div
        className="light absolute w-[10em] h-[10em] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[20px] opacity-60"
        style={{
          background: 'linear-gradient(90deg, #335bf4 0%, #2ae9c9 100%)',
        }}
      />

      {/* Hexagonal Grid */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-repeat"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: '500px',
        }}
      />
    </div>
  );
};

export default GlowEffect;
