import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import CounterSection from './components/CounterSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <CounterSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
} 