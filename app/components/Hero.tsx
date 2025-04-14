"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('left');
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const backgroundImages = [
    {
      src: "/images/WEB_BANNER-12.jpg",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q==",
    },
    {
      src: "/Boho-dsk.webp",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q==",
    }
  ];

  const propertyTypes = [
    {
      type: "Luxury Property",
      image: {
        src: "/images/unity 1.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q==",
      },
      description: "Soraj stands for exceptional luxury properties and single properties in the most sought-after districts of the city. Turning homes become dreams as your go-to real estate agent. You can rely on us to help you safely home."
    },
    {
      type: "Commercial Property",
      image: {
        src: "/images/krishna enclave.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q==",
      },
      description: "Experience unparalleled elegance with Soraj luxury properties and single properties in the most sought-after districts of the city. Turning homes become dreams as your go-to real estate agent. You can rely on us to help you safely home."
    },
    {
      type: "Sweet Apartment",
      image: {
        src: "/images/boho bliss.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q==",
      },
      description: "Prime commercial spaces designed for success in the most sought-after districts of the city. Soraj makes commercial dreams become reality as your go-to real estate partner. You can rely on us to help you safely home."
    }
  ];

  useEffect(() => {
    setIsMounted(true);

    // Improved image preloading with caching
    const preloadImages = () => {
      // Create a cache to store preloaded images
      const imageCache = new Map<string, HTMLImageElement>();
      
      // Preload background images
      backgroundImages.forEach(img => {
        if (!imageCache.has(img.src)) {
          const image = new window.Image();
          image.src = img.src;
          imageCache.set(img.src, image);
        }
      });
      
      // Preload property type images
      propertyTypes.forEach(type => {
        if (!imageCache.has(type.image.src)) {
          const image = new window.Image();
          image.src = type.image.src;
          imageCache.set(type.image.src, image);
        }
      });
      
      return imageCache;
    };

    // Initialize image cache
    const imageCache = preloadImages();

    // Synchronized interval for all animations (5 seconds)
    const interval = setInterval(() => {
      // Change background image
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      
      // Change property type with animation
      setSlideDirection('left');
      setIsSliding(true);
      setTimeout(() => {
        setCurrentPropertyIndex((prevIndex) => (prevIndex + 1) % propertyTypes.length);
        setTimeout(() => {
          setIsSliding(false);
        }, 50);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    // Name validation
    if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone input, only allow numbers
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show success message
      setShowSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowContactForm(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: 'residential',
          message: ''
        });
      }, 2000);
    }
  };

  return (
    <>
      <section className="relative h-[100vh] overflow-x-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={image.src}
                alt={`Background ${index + 1}`}
                fill
                quality={90}
                priority={index === 0}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                sizes="100vw"
                style={{ 
                  objectFit: "cover",
                  transform: "scale(1.02)"
                }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col sm:block">
          {isMounted && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col justify-start items-center sm:block sm:max-w-2xl sm:mt-16"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="mt-32 sm:mt-8 mb-4 sm:mb-0 border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-black transition sm:transform-none text-sm sm:text-base"
              >
                Request A Visit →
              </motion.button>
            </motion.div>
          )}
        </div>
        
        {/* Property Type Slider */}
        {isMounted && (
          <div className="absolute bottom-[2%] sm:bottom-16 left-0 w-full z-20">
            <div className="container mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-center items-center sm:items-start">
              {/* Mobile Image Carousel - Outside Container */}
              <div className="block sm:hidden w-full max-w-[95%] mb-8">
                <div className="relative p-4 rounded-[20px] overflow-visible">
                  <div className="w-full flex justify-center">
                    <div className="flex space-x-4 overflow-visible relative">
                      {/* Left arrow button */}
                      <button 
                        onClick={prevProperty}
                        suppressHydrationWarning
                        className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md text-base"
                      >
                        ←
                      </button>
                      
                      {/* Property cards */}
                      <div className="flex space-x-4">
                        {[0, 1, 2].map((index) => {
                          const displayIndex = (currentPropertyIndex - 1 + index + propertyTypes.length) % propertyTypes.length;
                          const isCentered = index === 1;
                          const property = propertyTypes[displayIndex];
                          
                          return (
                            <div 
                              key={index}
                              className={`transition-all duration-700 ease-in-out ${
                                isCentered ? 'z-10' : 'z-0'
                              }`}
                            >
                              <div 
                                className={`rounded-xl overflow-hidden transition-all duration-700 shadow-sm ${
                                  isCentered ? 'opacity-100' : 'opacity-50'
                                } w-[120px] sm:w-[100px]`}
                                style={{ transform: isCentered ? 'scale(1.1)' : 'scale(0.95)' }}
                              >
                                <p className="text-gray-700 text-[10px] font-medium py-1.5 px-2 flex items-center justify-center truncate bg-white/80">
                                  {property.type}
                                </p>
                                <div className="relative">
                                  <div className="h-[100px] w-full relative overflow-hidden">
                                    <Image
                                      src={property.image.src}
                                      alt={property.type}
                                      fill
                                      quality={75}
                                      placeholder="blur"
                                      blurDataURL={property.image.blurDataURL}
                                      sizes="100px"
                                      style={{ 
                                        objectFit: "cover",
                                        transform: isCentered ? 'scale(1.02)' : 'scale(1)'
                                      }}
                                      className={`transition-transform duration-700 ease-out ${
                                        isCentered ? 'brightness-110' : 'brightness-75'
                                      }`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right arrow button */}
                      <button 
                        onClick={nextProperty}
                        suppressHydrationWarning
                        className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md text-base"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Box Container */}
              <div className="relative bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-[20px] sm:rounded-[30px] w-full max-w-[95%] sm:max-w-3xl overflow-visible sm:translate-x-16">
                <div className="flex flex-col sm:flex-row relative">
                  {/* Property carousel - Desktop */}
                  <div className="hidden sm:flex sm:w-[35%] sm:absolute sm:-left-64 sm:justify-start">
                    <div className="flex space-x-4 overflow-visible relative">
                      {/* Left arrow button */}
                      <button 
                        onClick={prevProperty}
                        suppressHydrationWarning
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md text-base"
                      >
                        ←
                      </button>
                      
                      {/* Property cards */}
                      <div className="flex space-x-4">
                        {[0, 1, 2].map((index) => {
                          const displayIndex = (currentPropertyIndex - 1 + index + propertyTypes.length) % propertyTypes.length;
                          const isCentered = index === 1;
                          const property = propertyTypes[displayIndex];
                          
                          return (
                            <div 
                              key={index}
                              className={`transition-all duration-700 ease-in-out ${
                                isCentered ? 'z-10' : 'z-0'
                              }`}
                            >
                              <div 
                                className={`bg-gray-100/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-700 shadow-sm ${
                                  isCentered ? 'opacity-100' : 'opacity-50'
                                } w-[140px]`}
                                style={{ transform: isCentered ? 'scale(1.1)' : 'scale(0.95)' }}
                              >
                                <p className="text-gray-700 text-[10px] font-medium py-1.5 px-2 flex items-center justify-center truncate bg-white/80">
                                  {property.type}
                                </p>
                                <div className="relative">
                                  <div className="h-[75px] w-full relative overflow-hidden">
                                    <Image
                                      src={property.image.src}
                                      alt={property.type}
                                      fill
                                      quality={75}
                                      placeholder="blur"
                                      blurDataURL={property.image.blurDataURL}
                                      sizes="140px"
                                      style={{ 
                                        objectFit: "cover",
                                        transform: isCentered ? 'scale(1.02)' : 'scale(1)'
                                      }}
                                      className={`transition-transform duration-700 ease-out ${
                                        isCentered ? 'brightness-110' : 'brightness-75'
                                      }`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right arrow button */}
                      <button 
                        onClick={nextProperty}
                        suppressHydrationWarning
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-white/90 w-8 h-8 rounded-full flex items-center justify-center text-black transition focus:outline-none shadow-md text-base"
                      >
                        →
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile Description Box */}
                  <div className="block sm:hidden px-4 py-5">
                    <div className="text-white text-xs leading-relaxed mb-8">
                      {propertyTypes[currentPropertyIndex].description}
                    </div>
                    
                    {/* Circle Design */}
                    <div className="flex justify-center">
                      <div className="w-28 h-28 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[1px] h-6 bg-black rounded-full" />
                        </div>
                        <div className="absolute w-full h-full rounded-full">
                          <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                            <defs>
                              <path
                                id="mobileCirclePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="none"
                              />
                            </defs>
                            <text fontSize="9" fontWeight="400" letterSpacing="1.5" className="uppercase" fill="black">
                              <textPath href="#mobileCirclePath" startOffset="0%" wordSpacing="2">
                                EXPLORE AND FIND YOUR DREAM PLACE *
                              </textPath>
                            </text>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="border border-black rounded-full w-4 h-8 flex items-center justify-center overflow-hidden">
                              <div className="relative w-full h-full flex items-center justify-center">
                                <div className="w-0.5 h-1.5 bg-black rounded-full absolute animate-mouseScroll" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Description */}
                  <div className="hidden sm:block sm:w-[65%] sm:ml-auto sm:pl-4 sm:pr-4 overflow-hidden sm:h-28 sm:flex sm:items-center">
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

                  {/* Desktop Badge/Seal */}
                  <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3/4 w-28 h-28 bg-white/60 backdrop-blur-md rounded-full items-center justify-center z-30">
                    <div className="w-24 h-24 rounded-full border-none flex items-center justify-center text-center relative overflow-hidden">
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
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="border border-black rounded-full w-4 h-8 flex items-center justify-center overflow-hidden">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-0.5 h-1.5 bg-black rounded-full absolute animate-mouseScroll" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Form Modal */}
      {isMounted && (
        <AnimatePresence>
          {showContactForm && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowContactForm(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-xl mx-3 sm:mx-4">
                  <div className="p-3 sm:p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
                    {/* Modal content */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <Image 
                          src="/soraj-logo.svg" 
                          alt="SORAJ GROUP Logo" 
                          width={80} 
                          height={28} 
                          className="h-5 sm:h-7 w-auto"
                        />
                      </div>
                      <button
                        onClick={() => setShowContactForm(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1">
                      Request a Property Visit
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
                      {/* Form fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:border-transparent text-gray-900"
                            placeholder="Your name"
                          />
                          {formErrors.name && (
                            <p className="text-red-500 text-[9px] sm:text-xs mt-1">{formErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            maxLength={10}
                            className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:border-transparent text-gray-900"
                            placeholder="Your phone number"
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-[9px] sm:text-xs mt-1">{formErrors.phone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:border-transparent text-gray-900"
                          placeholder="Your email"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-[9px] sm:text-xs mt-1">{formErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Property Type</label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:border-transparent text-gray-900"
                        >
                          <option value="residential">Residential Property</option>
                          <option value="commercial">Commercial Property</option>
                          <option value="apartment">Apartment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          required
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:border-transparent text-gray-900"
                          placeholder="Additional details about your visit request..."
                        />
                        {formErrors.message && (
                          <p className="text-red-500 text-[9px] sm:text-xs mt-1">{formErrors.message}</p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full bg-[#1e293b] text-white py-1.5 sm:py-2 text-xs sm:text-base rounded-lg hover:bg-[#334155] transition-colors duration-200"
                        >
                          Submit Request
                        </button>
                      </div>
                    </form>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">Other ways to contact us:</p>
                      <div className="flex flex-col space-y-1.5 sm:space-y-2">
                        <a
                          href="tel:+919691940361"
                          className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-[#1e293b] transition-colors duration-200"
                        >
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +91 9691940361
                        </a>
                        <a
                          href="mailto:contact@sorajgroup.com"
                          className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-[#1e293b] transition-colors duration-200"
                        >
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          contact@sorajgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg z-50 flex items-center text-xs sm:text-sm"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Request submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Hero; 