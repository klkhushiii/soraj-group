"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DemoPopup from './DemoPopup';

const ServicesSection = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const serviceCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:text-white transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Safety & Trustworthy",
      description: "We are committed to delivering real estate solutions that are built on a foundation of transparency & safety.",
      image: "/images/unity 1.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:text-white transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "All-inclusive real estate services to facilitate the easy management of your properties.",
      image: "/images/krishna enclave.jpg"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:text-white transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: "Trusted Developer",
      description: "Generous amounts of south facing glazing maximize the solar gains for most of the year.",
      image: "/images/boho bliss.jpg"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceCards.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceCards.length) % serviceCards.length);
  };

  // Touch handling for swipe
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <>
      <section className="py-20 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Modern Luxury Building"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Animated 3D Cube architectural figure */}
        <motion.div 
          className="absolute -top-6 right-12 md:right-20 opacity-70"
          animate={{ 
            y: [0, -10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(175deg)" }}>
            {/* Cube front face */}
            <path d="M30 30L70 20L70 60L30 70L30 30Z" stroke="#fff" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
            {/* Cube top face */}
            <path d="M30 30L70 20L90 40L50 50L30 30Z" stroke="#fff" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
            {/* Cube right face */}
            <path d="M70 20L90 40L90 80L70 60L70 20Z" stroke="#fff" strokeWidth="2" fill="rgba(255,255,255,0.15)"/>
            {/* Inner lines for detail */}
            <path d="M50 50L50 90" stroke="#fff" strokeWidth="1" strokeDasharray="3 3"/>
            <path d="M50 50L30 30" stroke="#fff" strokeWidth="1" strokeDasharray="3 3"/>
            <path d="M50 50L90 40" stroke="#fff" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>
        </motion.div>
        
        <div className="relative px-4 sm:px-6 xl:px-[60px] max-w-[1920px] mx-auto">
          <div className="w-full">
            {/* Section header */}
            <div className="mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-sm sm:text-base font-medium text-white">Services</h3>
                  <div className="h-[2px] w-12 bg-white"></div>
                </div>
                
                <h2 className="text-2xl sm:text-[2.75rem] font-bold text-white mt-4 sm:mt-6 mb-4 sm:mb-6">Your Best Possible Solutions</h2>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                    Our thoughtfully designed neighborhood, which offers a special blend of eco-friendly living and convenience, is a monument to sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Services cards - Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-8 xl:gap-12 w-full">
              {serviceCards.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110 group-hover:shadow-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{card.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{card.description}</p>
                    <div className="h-52 w-full relative rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image 
                        src={card.image}
                        alt={card.title}
                        fill 
                        style={{ objectFit: 'cover', objectPosition: 'center center' }}
                        className="transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services cards - Mobile Carousel */}
            <div 
              className="md:hidden relative overflow-hidden px-4 max-w-sm mx-auto"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {serviceCards.map((card, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110 group-hover:shadow-lg">
                          {card.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-white">{card.title}</h3>
                        <p className="text-gray-200 text-sm mb-4">{card.description}</p>
                        <div className="h-52 w-full relative rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                          <Image 
                            src={card.image}
                            alt={card.title}
                            fill 
                            style={{ objectFit: 'cover', objectPosition: 'center center' }}
                            className="transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="absolute h-[250%] w-16 bg-white/20 blur-md rotate-45 -translate-x-[200%] -translate-y-[200%] group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-all duration-2000 ease-in-out"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {serviceCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white w-4' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md z-10"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md z-10"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoPopup 
        isOpen={showDemoPopup}
        onClose={() => setShowDemoPopup(false)}
      />
    </>
  );
};

export default ServicesSection; 
