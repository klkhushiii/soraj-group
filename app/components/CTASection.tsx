"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DemoPopup from './DemoPopup';

const CTASection = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
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

      <div className="relative px-4 sm:px-6 lg:px-8 xl:px-[60px] max-w-[1920px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
            <h3 className="text-sm sm:text-base font-medium text-white">Experience Luxury Living</h3>
            <div className="h-[2px] w-12 bg-white"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Elevate Your Lifestyle
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-4">
            Discover extraordinary properties crafted for those who appreciate the finest in luxury living
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start max-w-7xl mx-auto">
          {/* Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full"
          >
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
              <div className="relative h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Premium Properties</h3>
                <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">
                  Experience unparalleled luxury in our handpicked collection of premium properties across prime locations.
                </p>
                <button 
                  onClick={() => setShowDemoPopup(true)}
                  className="inline-flex items-center text-white font-medium hover:text-white/80 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Explore Collection</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Virtual Tour Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 0a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Virtual Experience</h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">Take an immersive virtual tour of our properties from anywhere in the world</p>
                  <button 
                    onClick={() => setShowDemoPopup(true)}
                    className="text-white font-medium hover:text-white/80 inline-flex items-center group-hover:translate-x-1 transition-all duration-300"
                  >
                    Start Tour
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Schedule Visit Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Private Viewing</h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">Schedule a personalized tour with our luxury property experts</p>
                  <button 
                    onClick={() => setShowDemoPopup(true)}
                    className="text-white font-medium hover:text-white/80 inline-flex items-center group-hover:translate-x-1 transition-all duration-300"
                  >
                    Book Appointment
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base text-gray-200">Looking for personalized assistance?</span>
            <button 
              onClick={() => setShowDemoPopup(true)}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/15 transition-all duration-300 text-white font-semibold inline-flex items-center group"
            >
              <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">Connect with an Expert</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <DemoPopup 
        isOpen={showDemoPopup}
        onClose={() => setShowDemoPopup(false)}
      />
    </section>
  );
};

export default CTASection; 