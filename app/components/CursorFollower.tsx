"use client";

import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
  
  return (
    <div 
      className="fixed w-3 h-3 rounded-full bg-gray-900 pointer-events-none z-50 mix-blend-difference"
      style={{ 
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default CursorFollower; 