"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DemoPopup from './DemoPopup';

const Footer = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoPopup(true);
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <>
      <footer className="bg-white pt-6 sm:pt-10 pb-4 sm:pb-8 border-t border-gray-200">
        <div className="px-4 sm:px-6 xl:px-[60px]">
          {/* Newsletter Section */}
          <div className="mb-6 sm:mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left w-full md:w-auto">
                <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-800 mb-1">
                  Newsletter To Get Updated The
                </h3>
                <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-700">
                  Latest News
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto max-w-[280px] sm:max-w-[300px] md:max-w-[400px]">
                <div className="relative w-full md:w-[280px]">
                  <input 
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <button 
                  onClick={handleNavClick}
                  className="w-full md:w-auto bg-gray-900 text-white px-6 py-2 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300 text-sm whitespace-nowrap"
                >
                  Subscribe Now
                  <svg className="w-3 h-3 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <hr className="border-t border-gray-200 mb-6 sm:mb-8" />
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Logo & Company Info */}
            <div className="col-span-1">
              <div className="mb-4">
                <Link href="/" className="inline-block">
                  <Image src="/soraj-logo.svg" alt="Soraj Group" width={100} height={35} className="w-auto h-6 sm:h-8" />
                </Link>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                Building dreams through exceptional real estate experiences. Transforming spaces into places where life flourishes.
              </p>
              <div className="flex space-x-2">
                <a href="#" onClick={handleNavClick} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" onClick={handleNavClick} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" onClick={handleNavClick} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-pink-500 hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Get In Touch Accordion */}
            <div className="col-span-1">
              <button
                onClick={() => toggleAccordion('contact')}
                className="w-full flex items-center justify-between text-sm sm:text-base font-medium text-gray-900 mb-3 md:hidden"
              >
                Get In Touch
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeAccordion === 'contact' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="hidden md:block text-sm sm:text-base font-medium text-gray-900 mb-3">Get In Touch</h3>
              <div className={`overflow-hidden transition-all duration-200 ${activeAccordion === 'contact' ? 'max-h-[500px]' : 'max-h-0'} md:max-h-none`}>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 text-gray-600 text-xs">
                      789 ABC Indore,<br />
                      M.P, India
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 text-gray-600 text-xs">
                      +00 123 456 7890<br />
                      +00 987 654 3210
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-2 text-gray-600 text-xs">
                      info@sorajgroup.com<br />
                      support@sorajgroup.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Useful Link Accordion */}
            <div className="col-span-1">
              <button
                onClick={() => toggleAccordion('links')}
                className="w-full flex items-center justify-between text-sm sm:text-base font-medium text-gray-900 mb-3 md:hidden"
              >
                Useful Link
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeAccordion === 'links' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="hidden md:block text-sm sm:text-base font-medium text-gray-900 mb-3">Useful Link</h3>
              <div className={`overflow-hidden transition-all duration-200 ${activeAccordion === 'links' ? 'max-h-[500px]' : 'max-h-0'} md:max-h-none`}>
                <ul className="space-y-2">
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Residential Properties
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Commercial Properties
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Property Management
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Investment Opportunities
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Property Valuation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Explore Accordion */}
            <div className="col-span-1">
              <button
                onClick={() => toggleAccordion('explore')}
                className="w-full flex items-center justify-between text-sm sm:text-base font-medium text-gray-900 mb-3 md:hidden"
              >
                Explore
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeAccordion === 'explore' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="hidden md:block text-sm sm:text-base font-medium text-gray-900 mb-3">Explore</h3>
              <div className={`overflow-hidden transition-all duration-200 ${activeAccordion === 'explore' ? 'max-h-[500px]' : 'max-h-0'} md:max-h-none`}>
                <ul className="space-y-2">
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Pricing Page
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Privacy & Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      What we do
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Upcoming
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 flex items-center text-xs">
                      <svg className="w-2 h-2 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Apply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Notice */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8">
          <div className="px-4 sm:px-6 xl:px-[60px] py-4">
            <p className="text-center text-gray-600 text-xs sm:text-sm">
              © {new Date().getFullYear()} Soraj Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <DemoPopup 
        isOpen={showDemoPopup}
        onClose={() => setShowDemoPopup(false)}
      />
    </>
  );
};

export default Footer; 