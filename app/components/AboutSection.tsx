"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DemoPopup from './DemoPopup';

const AboutSection = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side - Image collage */}
            <div className="lg:w-1/2 relative">
              <div className="relative flex items-center justify-center h-[500px]">
                {/* Top left image */}
                <motion.div 
                  className="absolute -left-4 top-0 w-[220px] h-[160px] rounded-lg overflow-hidden shadow-md z-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/images/boho bliss.jpg" 
                    alt="Boho Bliss property" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                
                {/* Center image - Main curved house */}
                <motion.div 
                  className="absolute z-10 w-[380px] h-[280px] rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/images/unity 1.jpg" 
                    alt="Unity 1 property by Soraj Group" 
                    fill 
                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                  />
                </motion.div>
                
                {/* Bottom right image */}
                <motion.div 
                  className="absolute right-4 bottom-0 w-[220px] h-[160px] rounded-lg overflow-hidden shadow-md z-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/images/shekhar.jpg" 
                    alt="Shekhar property" 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                
                {/* Video button with pulse and spinning text */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20">
                  <div className="relative group">
                    {/* Multiple pulsing background rings */}
                    <div className="absolute inset-0 rounded-full bg-white/50 scale-125 animate-pulse-slow"></div>
                    <div className="absolute inset-0 rounded-full bg-white/40 scale-150 animate-pulse-slow animation-delay-1000"></div>
                    <div className="absolute inset-0 rounded-full bg-white/30 scale-175 animate-pulse-slow animation-delay-2000"></div>
                    
                    {/* Circle with play button */}
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md transition duration-300 hover:scale-105">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    
                    {/* Spinning circular text */}
                    <div className="absolute -inset-10 w-[160px] h-[160px] animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <path
                            id="circlePath"
                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            fill="none"
                          />
                        </defs>
                        <text fontSize="6.5" letterSpacing="1" className="uppercase" fill="black">
                          <textPath href="#circlePath" startOffset="0%">
                            SORAJ GROUP * QUALITY YOU TRUST, EXCELLENCE YOU DESERVE *
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block pb-1 border-b-2 border-gray-300 text-sm font-medium">
                  About Us
                </div>
                
                <h2 className="text-4xl font-medium text-gray-900">Welcome to Soraj Group</h2>
                
                <p className="text-gray-600 leading-relaxed">
                  Soraj Group is a premier real estate developer committed to creating 
                  exceptional living spaces that blend innovative design with uncompromising 
                  quality. With a customer-first approach, we transform visions into 
                  reality through meticulous planning and superior craftsmanship.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-gray-300 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Transparent Dealings, Every Step of the Way</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-gray-300 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">100% Satisfaction guarantee</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-gray-300 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Modern Designs Meets Lasting Quality</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-gray-300 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Research and Development Facilities</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowDemoPopup(true)}
                  className="inline-block mt-6 px-3 py-1.5 bg-blue-800 text-white text-xs rounded-full font-medium relative overflow-hidden group transition-all duration-200 hover:scale-105 hover:shadow-md"
                  suppressHydrationWarning
                >
                  <span className="relative z-10">
                    More About Soraj Group
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out transform -translate-x-full group-hover:translate-x-0"></div>
                </button>
              </motion.div>
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

export default AboutSection; 