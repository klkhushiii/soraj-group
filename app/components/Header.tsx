"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path !== '/') {
      e.preventDefault();
      setShowModal(true);
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/about-us', label: 'ABOUT US' },
    { path: '/properties', label: 'PROPERTIES' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/contact-us', label: 'CONTACT US' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* Mobile background overlay - always visible */}
        <div className="absolute inset-0 bg-white shadow-md md:hidden"></div>
        
        {/* Desktop background overlay - shows on scroll */}
        <div 
          className={`absolute inset-0 bg-white/50 backdrop-blur-sm shadow-md transition-transform duration-500 ease-in-out hidden md:block ${
            hasScrolled ? 'translate-y-0' : '-translate-y-full'
          }`}
        ></div>
        
        <div className="container mx-auto px-3 md:px-8 py-2 md:py-6 flex items-center relative z-10 h-[55px] md:h-[90px]">
          {/* Mobile Menu Button - Moved to right side */}
          <div className="flex-shrink-0 md:mr-16">
            <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center h-12 md:h-14">
              <Image 
                src="/soraj-logo.svg" 
                alt="SORAJ GROUP Logo" 
                width={120} 
                height={40} 
                className="h-6 md:h-9 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-grow flex justify-center">
            <nav className="hidden md:flex space-x-12">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  onClick={(e) => item.path !== '/' && handleNavClick(e, item.path)}
                  className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-sm tracking-wider relative group transition-colors duration-300`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 w-[120px] md:hidden flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Image 
                  src="/soraj-logo.svg" 
                  alt="SORAJ GROUP Logo" 
                  width={100} 
                  height={34} 
                  className="h-6 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={(e) => item.path !== '/' && handleNavClick(e, item.path)}
                    className="block py-3 text-gray-800 hover:text-yellow-400 font-medium text-sm tracking-wider border-b border-gray-100 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
            >
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-5 md:p-6 pb-0">
                  <div className="flex items-center justify-center mb-4">
                    <Image 
                      src="/soraj-logo.svg" 
                      alt="SORAJ GROUP Logo" 
                      width={100} 
                      height={34} 
                      className="h-6 md:h-7 w-auto"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-2">
                    Demo Version
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center mb-6">
                    This is a demo version. Please contact us for more information about our properties and services.
                  </p>
                </div>
                <div className="px-5 md:px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4">
                  <a
                    href="tel:+919691940361"
                    className="px-5 md:px-6 py-2 bg-[#1e293b] text-white text-sm font-medium rounded-lg hover:bg-[#334155] transition-colors duration-200 flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-5 md:px-6 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 