"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCountryCode: '',
    phoneNumber: '',
    newsUpdates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phoneCountryCode" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Country Code*
              </label>
              <select
                id="phoneCountryCode"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="">Select Country Code</option>
                <option value="+971">United Arab Emirates (+971)</option>
                <option value="+1">United States (+1)</option>
                <option value="+44">United Kingdom (+44)</option>
                <option value="+91">India (+91)</option>
                <option value="+966">Saudi Arabia (+966)</option>
                <option value="+7">Russia (+7)</option>
                <option value="+86">China (+86)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="newsUpdates"
                  checked={formData.newsUpdates}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Keep me updated on news and offers
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Please visit the privacy policy to understand how Emaar handles your personal data.
              </p>
            </div>
            
            <div className="mb-2">
              {/* CAPTCHA would go here in a real implementation */}
              <div className="bg-gray-100 h-20 flex items-center justify-center rounded-md mb-4">
                <p className="text-gray-500 text-sm">CAPTCHA</p>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 