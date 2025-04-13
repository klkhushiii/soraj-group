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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col space-y-2 mb-6">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <div className="text-xs font-medium text-gray-400 py-1">
              Testimonial
            </div>
            <div className="w-8 h-0.5 bg-gray-400"></div>
          </div>
          <h2 className="text-[2.75rem] font-bold text-black mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Testimonial Cards */}
          <div className="flex flex-col gap-6">
            {/* First Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id + "-1"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-5 shadow-lg relative z-10 max-w-md"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                >
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </motion.p>

                {/* Author Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-gray-500 text-xs">
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
                transition={{ 
                  duration: 0.4,
                  delay: 0.4 // Increased delay for second card appearance
                }}
                className="bg-white rounded-2xl p-5 shadow-lg relative z-10 max-w-md"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                >
                  &ldquo;{testimonials[nextIndex].text}&rdquo;
                </motion.p>

                {/* Author Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonials[nextIndex].avatar}
                      alt={testimonials[nextIndex].author}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonials[nextIndex].author}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonials[nextIndex].role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Property Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
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
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setNextIndex((index + 1) % testimonials.length);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 