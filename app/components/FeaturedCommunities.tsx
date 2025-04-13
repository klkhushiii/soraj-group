"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCommunities = () => {
  const communities = [
    {
      id: 1,
      name: "Expo Living",
      description: "A community designed for tomorrow",
      details: "1 & 2 bedroom apartments",
      image: "/images/property1.svg",
    },
    {
      id: 2,
      name: "The Heights Country Club & Wellness",
      description: "Where Life is Well-Lived",
      details: "3 & 4 Bedroom Townhouses and 4 Bedroom Villas",
      image: "/images/property1.svg",
    },
    {
      id: 3,
      name: "Address Al Marjan Island, Ras Al Khaimah",
      description: "New vision of luxury beachfront living",
      details: "Apartments, Townhouses and Sea Front-Homes",
      image: "/images/property1.svg",
    },
    {
      id: 4,
      name: "The Oasis",
      description: "Immerse in Pure Luxury",
      details: "Villas and Mansions",
      image: "/images/property1.svg",
    },
    {
      id: 5,
      name: "Dubai Marina",
      description: "A path-breaking waterfront project by Emaar",
      details: "-",
      image: "/images/property1.svg",
    },
    {
      id: 6,
      name: "Dubai Hills Estate",
      description: "The green heart of Dubai",
      details: "3 to 6 BEDROOM VILLAS",
      image: "/images/property1.svg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Communities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div 
              key={community.id} 
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{community.name}</h3>
                <p className="mb-1">{community.description}</p>
                <p className="text-sm text-gray-200 mb-4">{community.details}</p>
                <Link href={`/communities/${community.id}`}>
                  <span className="inline-block border border-white px-4 py-2 text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                    Explore Community
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommunities; 