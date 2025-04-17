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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 w-full z-50 transition-colors duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="px-4 h-[55px] flex items-center justify-between">
          {/* Menu Button and Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-1.5 ${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-600 transition-colors`}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center h-12">
              <Image 
                src="/soraj-logo.svg" 
                alt="SORAJ GROUP Logo" 
                width={100} 
                height={34} 
                className={`h-6 w-auto transition-all duration-300 ${hasScrolled ? '' : 'invert brightness-0 contrast-100'}`}
              />
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleActionClick}
              className={`p-1.5 ${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-600 transition-colors`}
              aria-label="Video Call"
            >
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
              </svg>
            </button>
            <button 
              onClick={handleActionClick}
              className={`p-1.5 ${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-600 transition-colors`}
              aria-label="WhatsApp"
            >
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className={`hidden md:block fixed top-0 w-full z-50 transition-colors duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
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
                  onClick={(e) => handleNavClick(e)}
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
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                </svg>
                <span className="text-sm font-medium">INSTANT VIDEO CALL</span>
              </button>

              {/* WhatsApp Button */}
              <button 
                onClick={handleActionClick}
                className={`flex items-center space-x-2 ${hasScrolled ? 'text-gray-800 hover:text-[#1e3a8a]' : 'text-white hover:text-white/80'} transition-colors duration-300`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                    onClick={(e) => item.path !== '/' && handleNavClick(e)}
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
                    <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    <span className="font-medium">INSTANT VIDEO CALL</span>
                  </button>
                  <button 
                    onClick={handleActionClick}
                    className="w-full flex items-center justify-center space-x-2 py-3 text-gray-800 hover:text-[#1e3a8a] transition-colors duration-300 border border-gray-200 rounded-lg"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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