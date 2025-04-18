"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Soraj Group's commitment to excellence is evident in every detail of our new home. Their innovative design approach and quality construction have exceeded our expectations. Unity project truly stands out!",
    author: "Ralph Edwards",
    role: "Property Expert",
    avatar: "/images/shekhar.jpg",
    rating: 5,
    propertyImage: "/images/unity 1.jpg",
    interiorImage: "/images/unity 1.jpg"
  },
  {
    id: 2,
    text: "Working with Soraj Group was an exceptional experience. The Krishna Enclave project showcases their dedication to architectural excellence and customer satisfaction. A true mark of luxury living.",
    author: "Sarah Anderson",
    role: "Interior Designer",
    avatar: "/images/krishna enclave.jpg",
    rating: 5,
    propertyImage: "/images/krishna enclave.jpg",
    interiorImage: "/images/krishna enclave.jpg"
  },
  {
    id: 3,
    text: "The Boho Bliss project by Soraj Group is a masterpiece of modern design. Their attention to sustainability and comfort makes them stand out in the real estate market. Highly recommended!",
    author: "Michael Chen",
    role: "Property Consultant",
    avatar: "/images/boho bliss.jpg",
    rating: 5,
    propertyImage: "/images/boho bliss.jpg",
    interiorImage: "/images/boho bliss.jpg"
  },
  {
    id: 4,
    text: "Soraj Group's vision for modern living is perfectly executed in their projects. The blend of luxury, comfort, and innovation makes them the top choice for premium real estate development.",
    author: "Emma Wilson",
    role: "Real Estate Investor",
    avatar: "/images/shekhar.jpg",
    rating: 5,
    propertyImage: "/images/WEB_BANNER-12.jpg",
    interiorImage: "/images/WEB_BANNER-12.jpg"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setNextIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-gray-50 overflow-x-hidden">
      <div className="px-4 sm:px-6 xl:px-[60px] max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-20">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-sm sm:text-base font-medium text-[#1e3a8a]">Testimonial</h3>
            <div className="h-[2px] w-12 bg-[#1e3a8a]"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[2.75rem] font-bold text-[#1e3a8a] mt-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
          {/* Desktop View - Original Layout */}
          <div className="hidden md:flex flex-col gap-8 justify-center">
            {/* First Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id + "-1"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-xl hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-base mb-6 leading-relaxed italic"
                >
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] text-lg">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Second Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[nextIndex].id + "-2"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-xl hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 text-base mb-6 leading-relaxed italic"
                >
                  &ldquo;{testimonials[nextIndex].text}&rdquo;
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                    <Image
                      src={testimonials[nextIndex].avatar}
                      alt={testimonials[nextIndex].author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] text-lg">
                      {testimonials[nextIndex].author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonials[nextIndex].role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Property Image (Desktop Only) */}
          <div className="hidden md:flex items-center">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={testimonials[currentIndex].propertyImage}
                    alt="Property view"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setNextIndex((index + 1) % testimonials.length);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#1e3a8a] w-8' : 'bg-gray-300 hover:bg-[#1e3a8a]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 