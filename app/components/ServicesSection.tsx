"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DemoPopup from './DemoPopup';

const ServicesSection = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-100 relative">
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
            <path d="M30 30L70 20L70 60L30 70L30 30Z" stroke="#333" strokeWidth="2" fill="#f5f5f5"/>
            {/* Cube top face */}
            <path d="M30 30L70 20L90 40L50 50L30 30Z" stroke="#333" strokeWidth="2" fill="#e0e0e0"/>
            {/* Cube right face */}
            <path d="M70 20L90 40L90 80L70 60L70 20Z" stroke="#333" strokeWidth="2" fill="#d0d0d0"/>
            {/* Inner lines for detail */}
            <path d="M50 50L50 90" stroke="#333" strokeWidth="1" strokeDasharray="3 3"/>
            <path d="M50 50L30 30" stroke="#333" strokeWidth="1" strokeDasharray="3 3"/>
            <path d="M50 50L90 40" stroke="#333" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col space-y-1 mb-4">
                  <div className="w-8 h-0.5 bg-gray-500"></div>
                  <div className="text-xs font-medium text-gray-800">
                    Services
                  </div>
                  <div className="w-8 h-0.5 bg-gray-500"></div>
                </div>
                
                <h2 className="text-4xl font-medium text-gray-900 mb-6">Your Best Possible Solutions</h2>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-gray-600 max-w-2xl">
                    Our thoughtfully designed neighborhood, which offers a special blend of eco-friendly living and convenience, is a monument to sustainable growth.
                  </p>
                  
                  <button 
                    onClick={() => setShowDemoPopup(true)}
                    className="inline-block px-3 py-1.5 bg-blue-800 text-white text-xs rounded-full font-medium relative overflow-hidden group transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    <span className="relative z-10">
                      Browse All Your Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out transform -translate-x-full group-hover:translate-x-0"></div>
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Services cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Service Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-800 group-hover:border-gray-800 group-hover:scale-110 group-hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-white transition-transform duration-300 group-hover:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-black">Safety & Trustworthy</h3>
                  <p className="text-black text-sm mb-4">
                  We are committed to delivering real estate solutions that are built on a foundation of transparency & safety. 
                  </p>
                  <div className="h-52 w-full relative rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image 
                      src="/images/unity.jpg" 
                      alt="Safety & Trustworthy" 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'center 25%' }} 
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute h-[250%] w-16 bg-white/20 blur-md rotate-45 -translate-x-[200%] -translate-y-[200%] group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-all duration-2000 ease-in-out"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Service Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-800 group-hover:border-gray-800 group-hover:scale-110 group-hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-white transition-transform duration-300 group-hover:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-black">Dedicated Support</h3>
                  <p className="text-black text-sm mb-4">
                    All-inclusive real estate services to facilitate the easy management of your properties.
                  </p>
                  <div className="h-52 w-full relative rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image 
                      src="/images/krishna enclave.jpg" 
                      alt="Dedicated Support" 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'center center' }} 
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute h-[250%] w-16 bg-white/20 blur-md rotate-45 -translate-x-[200%] -translate-y-[200%] group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-all duration-2000 ease-in-out"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Service Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-800 group-hover:border-gray-800 group-hover:scale-110 group-hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 group-hover:text-white transition-transform duration-300 group-hover:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-black">Trusted Developer</h3>
                  <p className="text-black text-sm mb-4">
                    Generous amounts of south facing glazing maximize the solar gains for most of the year.
                  </p>
                  <div className="h-52 w-full relative rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Image 
                      src="/images/boho bliss.jpg" 
                      alt="Trusted Developer" 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'center center' }} 
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute h-[250%] w-16 bg-white/20 blur-md rotate-45 -translate-x-[200%] -translate-y-[200%] group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-all duration-2000 ease-in-out"></div>
                    </div>
                  </div>
                </div>
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

export default ServicesSection; 
