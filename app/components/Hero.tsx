"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('left');

  const backgroundImages = [
    "/images/WEB_BANNER-12.jpg",
    "/Boho-dsk.webp",
  ];

  const propertyTypes = [
    {
      type: "Luxury Property",
      image: "/images/unity.jpg",
      description: "Soraj stands for exceptional luxury properties and single properties in the most sought-after districts of the city. Turning homes become dreams as your go-to real estate agent. You can rely on us to help you safely home."
    },
    {
      type: "Commercial Property",
      image: "/images/krishna enclave.jpg",
      description: "Experience unparalleled elegance with Soraj luxury properties and single properties in the most sought-after districts of the city. Turning homes become dreams as your go-to real estate agent. You can rely on us to help you safely home."
    },
    {
      type: "Sweet Apartment",
      image: "/images/boho bliss.jpg",
      description: "Prime commercial spaces designed for success in the most sought-after districts of the city. Soraj makes commercial dreams become reality as your go-to real estate partner. You can rely on us to help you safely home."
    }
  ];

  useEffect(() => {
    // Automatically change background image every 5 seconds
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    // Automatically change property type every 4 seconds
    const propertyInterval = setInterval(() => {
      setSlideDirection('left');
      setIsSliding(true);
      setTimeout(() => {
        setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % propertyTypes.length);
        setTimeout(() => {
          setIsSliding(false);
        }, 50);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(bgInterval);
      clearInterval(propertyInterval);
    };
  }, [backgroundImages.length, propertyTypes.length]);

  const nextProperty = () => {
    if (isSliding) return;
    setSlideDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % propertyTypes.length);
      setTimeout(() => {
        setIsSliding(false);
      }, 50);
    }, 500);
  };

  const prevProperty = () => {
    if (isSliding) return;
    setSlideDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentPropertyIndex((prevIndex) => (prevIndex - 1 + propertyTypes.length) % propertyTypes.length);
      setTimeout(() => {
        setIsSliding(false);
      }, 50);
    }, 500);
  };

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition mt-8"
          >
            Request A Visit →
          </motion.button>
        </motion.div>
      </div>
      
      {/* Property Type Slider - Updated to match the image layout */}
      <div className="absolute bottom-16 left-0 w-full z-20">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-md p-5 rounded-[30px] max-w-3xl w-full overflow-visible translate-x-16">
            <div className="flex flex-row relative">
              {/* Property carousel positioned to overlap with the left edge */}
              <div className="absolute -left-64 w-[35%] flex items-center relative">
                
                {/* Properties in a row */}
                <div className="flex space-x-4 pl-8 overflow-visible relative">
                  {/* Left arrow button */}
                  <button 
                    onClick={prevProperty}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md"
                  >
                    ←
                  </button>
                
                  {[0, 1, 2].map((index) => {
                    // Calculate relative index for proper ordering
                    const displayIndex = (currentPropertyIndex - 1 + index + propertyTypes.length) % propertyTypes.length;
                    const isCentered = index === 1; // Middle item
                    
                    return (
                      <div 
                        key={index}
                        className={`transition-all duration-700 ease-in-out ${
                          isCentered ? 'z-10' : 'z-0'
                        } ${
                          isSliding ? 
                            slideDirection === 'left' ? 
                              `-translate-x-${36 - (index * 12)}` : 
                              `translate-x-${index * 12}` : 
                            ''
                        }`}
                      >
                        <div 
                          className={`bg-gray-100/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-700 shadow-sm ${
                            isCentered ? 'opacity-100' : 'opacity-80'
                          }`}
                          style={{ width: '140px', transform: isCentered ? 'scale(1.15)' : 'scale(0.95)' }}
                        >
                          <p className="text-gray-700 text-[10px] font-medium py-1.5 px-2 flex items-center justify-center truncate">
                            {propertyTypes[displayIndex].type}
                          </p>
                          <div className="px-2 pb-2">
                            <div className="h-[75px] w-full relative overflow-hidden rounded-xl">
                              <Image
                                src={propertyTypes[displayIndex].image}
                                alt={propertyTypes[displayIndex].type}
                                fill
                                style={{ objectFit: "cover" }}
                                className={`transition-transform duration-700 ease-out ${
                                  isCentered ? 'brightness-110' : 'brightness-90'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Right arrow button */}
                  <button 
                    onClick={nextProperty}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md"
                  >
                    →
                  </button>
                </div>
              </div>
              
              {/* Property description on the right */}
              <div className="w-[65%] ml-auto pl-4 pr-4 overflow-hidden h-28 flex items-center">
                <div className="relative h-full w-full flex items-center">
                  {propertyTypes.map((property, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 text-white transition-all duration-700 flex items-center ${
                        index === currentPropertyIndex ? 
                          'opacity-100 transform translate-x-0' : 
                          index < currentPropertyIndex || 
                          (index === propertyTypes.length - 1 && currentPropertyIndex === 0) ? 
                            'opacity-0 transform -translate-x-full' : 
                            'opacity-0 transform translate-x-full'
                      }`}
                    >
                      <p className="text-[12px] leading-relaxed text-left max-w-xl">
                        {property.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Badge / Seal */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3/4 w-28 h-28 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center z-30">
              <div className="w-24 h-24 rounded-full border-none flex items-center justify-center text-center relative overflow-hidden">
                {/* Circular text with SVG - with rotation */}
                <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                      fill="none"
                    />
                  </defs>
                  <text fontSize="10.5" fontWeight="400" letterSpacing="1.2" className="uppercase" fill="black">
                    <textPath href="#circlePath" startOffset="0%" wordSpacing="2">
                      EXPLORE AND FIND YOUR DREAM PLACE *
                    </textPath>
                  </text>
                </svg>
                
                {/* Mouse icon in center - static, doesn't rotate */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="border border-black rounded-full w-4 h-8 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-0.5 h-1.5 bg-black rounded-full absolute animate-mouseScroll"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 