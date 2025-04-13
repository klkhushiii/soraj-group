"use client";

import React, { useState } from 'react';

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState<string>('propertyType');
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="flex flex-wrap border-b border-gray-200">
            <button 
              onClick={() => handleTabClick('propertyType')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'propertyType' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            >
              Property Type
            </button>
            <button 
              onClick={() => handleTabClick('bedroom')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'bedroom' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            >
              Bedroom
            </button>
            <button 
              onClick={() => handleTabClick('priceRange')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'priceRange' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            >
              Price Range
            </button>
            <button 
              onClick={() => handleTabClick('communities')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'communities' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            >
              Communities
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'propertyType' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Apartment</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Hotel</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Office</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Plot</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Townhouse</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>Villa</span>
                </label>
              </div>
            )}
            
            {activeTab === 'bedroom' && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>1 Bedroom</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>2 Bedrooms</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>3 Bedrooms</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>4 Bedrooms</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                  <span>5+ Bedrooms</span>
                </label>
              </div>
            )}
            
            {activeTab === 'priceRange' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range (AED)</label>
                  <div className="flex space-x-4">
                    <select className="border border-gray-300 rounded px-3 py-2 w-full">
                      <option>Min Price (AED)</option>
                      <option>500,000</option>
                      <option>1,000,000</option>
                      <option>2,000,000</option>
                      <option>5,000,000</option>
                      <option>10,000,000</option>
                    </select>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full">
                      <option>Max Price (AED)</option>
                      <option>2,000,000</option>
                      <option>5,000,000</option>
                      <option>10,000,000</option>
                      <option>20,000,000</option>
                      <option>50,000,000</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'communities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Featured Communities</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Expo Living</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>The Oasis</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Dubai Marina</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Dubai Hills Estate</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Dubai Creek Harbour</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">More Communities</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Arabian Ranches</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Downtown Dubai</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Emaar Beachfront</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>The Valley</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <span>Emaar South</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm mr-3">
                Clear Selection
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch; 