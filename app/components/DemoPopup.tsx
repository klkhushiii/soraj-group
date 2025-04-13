"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPopup = ({ isOpen, onClose }: DemoPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-[1000] p-4"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-auto">
              <div className="p-6 pb-0">
                <div className="flex items-center justify-center mb-4">
                  <Image 
                    src="/soraj-logo.svg" 
                    alt="SORAJ GROUP Logo" 
                    width={100} 
                    height={34} 
                    className="h-7 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  Demo Version
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  This is a demo version. Please contact us for more information about our properties and services.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 flex justify-center space-x-4">
                <a
                  href="tel:+919691940361"
                  className="px-6 py-2 bg-[#1e293b] text-white text-sm font-medium rounded-lg hover:bg-[#334155] transition-colors duration-200 flex items-center"
                  onClick={onClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Us
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DemoPopup; 