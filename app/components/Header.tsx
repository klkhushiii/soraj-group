"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENG');

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
    e.preventDefault();
    setShowModal(true);
    setIsMobileMenuOpen(false);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { path: '/about-us', label: 'ABOUT US' },
    { path: '/latest-launches', label: 'LATEST LAUNCHES' },
    { path: '/communities', label: 'COMMUNITIES' },
    { path: '/sustainability', label: 'SUSTAINABILITY' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="px-4 sm:px-6 xl:px-[60px] max-w-[1920px] mx-auto relative z-10 h-[55px] md:h-[90px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center h-12 md:h-14">
              <Image 
                src="/soraj-logo.svg" 
                alt="SORAJ GROUP Logo" 
                width={120} 
                height={40} 
                className={`h-6 md:h-9 w-auto transition-all duration-300 ${hasScrolled ? '' : 'invert brightness-0 contrast-100'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`${hasScrolled ? 'text-gray-800 hover:text-[#1e3a8a]' : 'text-white hover:text-white/80'} font-medium text-sm tracking-wider relative group transition-colors duration-300`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${hasScrolled ? 'bg-[#1e3a8a]' : 'bg-white'}`}></span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Video Call Button */}
              <button 
                onClick={handleActionClick}
                className={`flex items-center space-x-2 ${hasScrolled ? 'text-gray-800 hover:text-[#1e3a8a]' : 'text-white hover:text-white/80'} transition-colors duration-300`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">INSTANT VIDEO CALL</span>
              </button>

              {/* WhatsApp Button */}
              <button 
                onClick={handleActionClick}
                className={`flex items-center space-x-2 ${hasScrolled ? 'text-gray-800 hover:text-[#1e3a8a]' : 'text-white hover:text-white/80'} transition-colors duration-300`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                </svg>
                <span className="text-sm font-medium">WHATSAPP</span>
              </button>

              {/* Get In Touch Button */}
              <button 
                onClick={handleActionClick}
                className={`px-6 py-2 rounded text-sm font-medium transition-colors duration-300 ${
                  hasScrolled 
                    ? 'bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90' 
                    : 'bg-white text-gray-900 hover:bg-white/90'
                }`}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-1.5 ${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-600 transition-colors`}
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            />
            
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
                    className="block py-3 text-gray-800 hover:text-[#1e3a8a] font-medium text-sm tracking-wider border-b border-gray-100 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 space-y-4 px-2">
                  <button 
                    onClick={handleActionClick}
                    className="w-full flex items-center justify-center space-x-2 py-3 text-gray-800 hover:text-[#1e3a8a] transition-colors duration-300 border border-gray-200 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">INSTANT VIDEO CALL</span>
                  </button>
                  <button 
                    onClick={handleActionClick}
                    className="w-full flex items-center justify-center space-x-2 py-3 text-gray-800 hover:text-[#1e3a8a] transition-colors duration-300 border border-gray-200 rounded-lg"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                    </svg>
                    <span className="font-medium">WHATSAPP</span>
                  </button>
                  <button 
                    onClick={handleActionClick}
                    className="w-full bg-[#1e3a8a] text-white py-3.5 rounded-lg hover:bg-[#1e3a8a]/90 transition-colors duration-300 font-medium text-sm"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo Modal */}
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
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative px-5 pt-8 pb-5">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute right-4 top-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center">
                    <Image 
                      src="/soraj-logo.svg" 
                      alt="SORAJ GROUP Logo" 
                      width={100} 
                      height={34} 
                      className="h-7 w-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Demo Version
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      This is a demo version. Please contact us for more information about our properties and services.
                    </p>
                  </div>
                </div>
                <div className="px-5 py-4 bg-gray-50 flex flex-col gap-2">
                  <a
                    href="tel:+919691940361"
                    className="w-full px-4 py-3 bg-[#1e293b] text-white text-sm font-medium rounded-lg hover:bg-[#334155] transition-colors duration-200 flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full px-4 py-3 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
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