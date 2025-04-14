"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type City = 'INDORE' | 'BHOPAL' | 'GOA' | 'PUNE';

type Project = {
  id: number;
  type: string;
  image: string;
  title: string;
  description: string;
  hasImage: boolean;
};

type ProjectsByCity = {
  [key in City]: Project[];
};

const cities = [
  "INDORE",
  "BHOPAL",
  "GOA",
  "PUNE"
];

const projectsByCity: ProjectsByCity = {
  INDORE: [
    {
      id: 1,
      type: "UPCOMING",
      image: "/images/unity 1.jpg",
      title: "Unity 1",
      description: "Luxury Living Redefined",
      hasImage: true
    },
    {
      id: 2,
      type: "UPCOMING",
      image: "/images/shekhar.jpg",
      title: "Shikhar",
      description: "Elevating Modern Living",
      hasImage: true
    }
  ],
  BHOPAL: [
    {
      id: 3,
      type: "UPCOMING",
      image: "/images/krishna enclave.jpg",
      title: "Krishna Enclave",
      description: "Premium Living Spaces",
      hasImage: true
    },
    {
      id: 4,
      type: "UPCOMING",
      image: "/images/bansi enclave.jpg",
      title: "Bansi Enclave",
      description: "Modern Luxury Redefined",
      hasImage: true
    }
  ],
  GOA: [
    {
      id: 5,
      type: "UPCOMING",
      image: "/images/boho bliss.jpg",
      title: "Boho Bliss",
      description: "Luxury Beach Living",
      hasImage: true
    }
  ],
  PUNE: [
    {
      id: 6,
      type: "UPCOMING",
      title: "Residential",
      description: "Experience luxury living in the heart of Pune.",
      image: "/images/pune-project.jpg",
      hasImage: true
    }
  ]
};

const ProjectsSection = () => {
  const [selectedCity, setSelectedCity] = useState<City>('INDORE');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[2px] w-12 bg-black"></div>
            <h3 className="text-base font-medium text-gray-600">Projects</h3>
            <div className="h-[2px] w-12 bg-black"></div>
          </div>
          <h2 className="text-[2.75rem] font-bold text-[#1e293b] mt-6 mb-6">Our Latest Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover Soraj Group's exceptional residential and commercial developments across India. Our portfolio showcases innovative design and premium quality, setting new standards in real estate excellence.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city as City)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCity === city as City
                ? 'bg-[#1e293b] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-[#1e293b] hover:text-white'
              }`}
              suppressHydrationWarning
            >
              {city}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projectsByCity[selectedCity].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`relative h-[250px] md:h-[400px] ${!project.hasImage ? 'bg-gradient-to-br from-[#1e293b] to-[#334155]' : ''}`}>
                {project.hasImage ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">RESIDENTIAL</h3>
                      <p className="text-gray-300 text-base md:text-lg">Project Details Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 transform transition-transform duration-300 group-hover:translate-x-2">UPCOMING</h3>
                <p className="text-gray-200 text-xs md:text-sm transform transition-transform duration-300 group-hover:translate-x-2">
                  {project.title} - {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 