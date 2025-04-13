"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Background overlay that slides in */}
      <div 
        className={`absolute inset-0 transition-transform duration-500 ease-in-out bg-white/70 backdrop-blur-sm shadow-md ${
          hasScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      ></div>
      
      <div className="container mx-auto px-8 py-4 pt-6 flex items-center relative z-10">
        <div className="flex-shrink-0 mr-16">
          <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center h-10">
            <Image 
              src="/soraj-logo.svg" 
              alt="SORAJ GROUP Logo" 
              width={100} 
              height={34} 
              className="h-7 w-auto"
            />
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about-us" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/properties" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              PROPERTIES
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/agencies" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              AGENCIES
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/pages" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              PAGES
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              BLOG
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact-us" className={`${hasScrolled ? 'text-gray-800' : 'text-white'} hover:text-yellow-400 font-medium text-xs tracking-wider relative group transition-colors duration-300`}>
              CONTACT US
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
        <div className="flex-shrink-0 w-[140px]"></div> {/* Empty div to balance the logo */}
      </div>
    </header>
  );
};

export default Header; 