"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterItemProps {
  end: number;
  label: string;
  suffix?: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ end, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds for the animation
      
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function - ease out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easedProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.h3 
        className="text-[28px] sm:text-4xl font-bold mb-1 sm:mb-2 text-[#1e293b]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}{suffix}
      </motion.h3>
      <motion.p 
        className="text-sm sm:text-base uppercase tracking-wider text-[#1e293b]/80 font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {label}
      </motion.p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#cbd5d8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-10 text-center max-w-xs sm:max-w-none mx-auto">
          <CounterItem end={850} label="ELEGANT APARTMENTS" />
          <CounterItem end={950} label="LUXURY HOUSES" />
          <CounterItem end={18} label="SATISFIED GUESTS" suffix="K+" />
          <CounterItem end={2} label="HAPPY OWNERS" suffix="K+" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection; 