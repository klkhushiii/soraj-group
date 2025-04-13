"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Palace Villas – Ostra",
      location: "THE OASIS",
      image: "/images/property1.svg",
      isNew: true,
    },
    {
      id: 2,
      title: "Golf Verge at Emaar South",
      location: "Emaar South",
      image: "/images/property1.svg",
      isNew: true,
    },
    {
      id: 3,
      title: "Golf Meadow at Emaar South",
      location: "Emaar South",
      image: "/images/property1.svg",
      isNew: true,
    },
    {
      id: 4,
      title: "Address Grand Downtown",
      location: "Downtown Dubai",
      image: "/images/property1.svg",
      isNew: false,
    },
    {
      id: 5,
      title: "Address Villas – Tierra",
      location: "THE OASIS",
      image: "/images/property1.svg",
      isNew: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">PREMIUM PROPERTIES IN THE BEST LOCATIONS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our properties, located in prime areas, boast unique designs and aspirational lifestyles within vibrant Emaar communities, all seamlessly managed by Emaar Community Management's dedicated team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={property.image} 
                  alt={property.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {property.isNew && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                    New
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{property.location}</p>
                <Link href={`/properties/${property.id}`} className="text-black font-medium hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/properties" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 