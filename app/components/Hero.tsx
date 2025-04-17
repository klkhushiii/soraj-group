"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
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
      desktop: {
      src: "/images/WEB_BANNER-12.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q=="
      },
      mobile: {
        src: "/images/amobile 1.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q=="
      }
    },
    {
      desktop: {
      src: "/Boho-dsk.png",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q=="
      },
      mobile: {
        src: "/images/amobile 2.jpg",
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc4QD1AOTlARkVFS1pWW0FC/9sAQwEVFxceHh4tISEtQjkuOUJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJC/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigAooooA//2Q=="
      }
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

    const preloadImages = () => {
    if (typeof window === 'undefined') return;
      
      backgroundImages.forEach(img => {
          const image = new window.Image();
      image.src = img.desktop.src;
      });
      
      propertyTypes.forEach(type => {
          const image = new window.Image();
          image.src = type.image.src;
    });
  };

  useEffect(() => {
    setIsMounted(true);

    preloadImages();

    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      
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
    setIsSliding(true);
    setTimeout(() => {
      setCurrentPropertyIndex((prevIndex) => (prevIndex - 1 + propertyTypes.length) % propertyTypes.length);
      setTimeout(() => {
        setIsSliding(false);
      }, 50);
    }, 500);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragEnd(info.offset.x);
    const swipeThreshold = 50;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left
        setCurrentPropertyIndex((prev) => (prev + 1) % propertyTypes.length);
      } else {
        // Swiped right
        setCurrentPropertyIndex((prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length);
      }
    }
    setDragStart(0);
    setDragEnd(0);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccess(true);
      
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
    <section className="relative">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="hidden md:block w-full h-full">
              <Image
                src={backgroundImages[currentBgIndex].desktop.src}
                alt="Luxury Property Background"
                fill
                priority
                quality={90}
                placeholder="blur"
                blurDataURL={backgroundImages[currentBgIndex].desktop.blurDataURL}
                className="object-cover"
              />
            </div>
            
            <div className="block md:hidden w-full h-full">
              <Image
                src={backgroundImages[currentBgIndex].mobile.src}
                alt="Luxury Property Background"
                fill
                priority
                quality={90}
                placeholder="blur"
                blurDataURL={backgroundImages[currentBgIndex].mobile.blurDataURL}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 xl:px-[60px] max-w-[1920px] mx-auto min-h-screen flex flex-col sm:block">
          {isMounted && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-start items-start sm:block sm:max-w-3xl sm:pt-[180px] pt-16"
            >
              <div className="mt-8 sm:mt-0 mb-6 sm:mb-12 relative">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white text-xs sm:text-base uppercase tracking-[0.2em] mb-3 sm:mb-6 block font-medium drop-shadow-lg"
                >
                  Welcome to Soraj Group
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-4xl sm:text-7xl font-bold text-white text-left mb-3 sm:mb-8 tracking-tight leading-[1.2] sm:leading-[1.1] drop-shadow-xl"
                >
                  Discover Your <br className="hidden sm:block" />
                  <span className="relative inline-block">
                    Dream Property
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="text-lg sm:text-2xl text-white max-w-xl text-left font-medium leading-relaxed drop-shadow-lg"
                >
                  Experience luxury living with our exclusive collection of premium properties
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
        
        {isMounted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full z-20 pb-8 sm:pb-16"
          >
            <div className="px-4 sm:px-6 xl:px-[60px] max-w-[1920px] mx-auto flex flex-col sm:flex-row justify-center items-center sm:items-start sm:translate-x-[5%]">
              {/* Description Box */}
              <div className="hidden sm:block relative bg-white/10 backdrop-blur-md p-6 rounded-[20px] w-full max-w-3xl overflow-visible sm:translate-x-[25%] sm:z-20 border border-white/10">
                <div className="flex flex-col sm:flex-row relative">
                  <div className="hidden sm:block sm:w-[80%] sm:ml-auto sm:pl-4 sm:pr-16 overflow-hidden sm:h-28 sm:flex sm:items-center">
                    <div className="relative h-full w-full flex items-center">
                      {propertyTypes.map((property, index) => (
                        <motion.div 
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
                          <p className="text-base leading-relaxed text-left max-w-xl font-light">
                            {property.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Circular Badge */}
                  <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[85%] w-32 h-32 bg-white/80 backdrop-blur-md rounded-full items-center justify-center z-30 shadow-2xl">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-28 h-28 rounded-full border-none flex items-center justify-center text-center relative overflow-hidden"
                    >
                      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <path
                            id="circlePath"
                            d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                            fill="none"
                          />
                        </defs>
                        <text fontSize="8" fontWeight="400" letterSpacing="1.5" className="uppercase" fill="black">
                          <textPath href="#circlePath" startOffset="0%">
                            EXPLORE AND FIND YOUR DREAM PLACE • 
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="border-2 border-black/80 rounded-full w-5 h-10 flex items-center justify-center overflow-hidden">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div 
                              animate={{ y: [0, 10, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              className="w-0.5 h-2 bg-black/80 rounded-full absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Desktop Property Cards */}
              <div className="hidden sm:flex sm:w-[45%] sm:absolute sm:left-0 sm:justify-start sm:translate-x-[5%] sm:translate-y-0 sm:z-30">
                <div className="flex space-x-6 overflow-visible relative">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevProperty}
                    className="absolute -left-10 top-1/2 -translate-y-1/2 z-40 bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 focus:outline-none shadow-lg text-base"
                  >
                    ←
                  </motion.button>
                  
                  <div className="flex space-x-8">
                    {[0, 1, 2].map((index) => {
                      const displayIndex = (currentPropertyIndex - 1 + index + propertyTypes.length) % propertyTypes.length;
                      const isCentered = index === 1;
                      const property = propertyTypes[displayIndex];
                      
                      return (
                        <motion.div 
                          key={index}
                          className={`transition-all duration-700 ease-in-out ${
                            isCentered ? 'z-40' : 'z-30'
                          }`}
                        >
                          <div 
                            className={`bg-white/5 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-700 shadow-xl ${
                              isCentered ? 'opacity-100' : 'opacity-70'
                            } w-[180px]`}
                            style={{ 
                              transform: isCentered ? 'scale(1.15)' : 'scale(0.85)',
                              boxShadow: isCentered ? '0 20px 40px -8px rgba(0, 0, 0, 0.25)' : 'none'
                            }}
                          >
                            <div className="text-gray-900 text-xs font-medium py-3 px-4 flex items-center justify-center truncate bg-white/95 backdrop-blur-md border-b border-gray-100">
                              {property.type}
                            </div>
                            <div className="relative group">
                              <div className="h-[120px] w-full relative overflow-hidden">
                                <Image
                                  src={property.image.src}
                                  alt={property.type}
                                  fill
                                  quality={90}
                                  placeholder="blur"
                                  blurDataURL={property.image.blurDataURL}
                                  sizes="180px"
                                  style={{ 
                                    objectFit: "cover",
                                    transform: isCentered ? 'scale(1.02)' : 'scale(1)'
                                  }}
                                  className={`transition-all duration-700 ease-out group-hover:scale-110 ${
                                    isCentered ? 'brightness-105' : 'brightness-90'
                                  }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextProperty}
                    className="absolute -right-10 top-1/2 -translate-y-1/2 z-40 bg-white/90 backdrop-blur-sm hover:bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 focus:outline-none shadow-lg text-base"
                  >
                    →
                  </motion.button>
                </div>
              </div>

              {/* Mobile Property Type Grid */}
              <div className="block sm:hidden w-full max-w-[92%] mb-8">
                <div className="relative overflow-hidden">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragStart={(e, info) => setDragStart(info.offset.x)}
                    onDragEnd={handleDragEnd}
                    className="flex"
                    style={{ width: `${propertyTypes.length * 100}%` }}
                    animate={{
                      x: `-${currentPropertyIndex * (100 / propertyTypes.length)}%`
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {propertyTypes.map((property, index) => (
                      <motion.div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl border border-white/20"
                        style={{ width: `${100 / propertyTypes.length}%` }}
                      >
                        <div className="aspect-[16/8] relative">
                          <Image
                            src={property.image.src}
                            alt={property.type}
                            fill
                            quality={95}
                            placeholder="blur"
                            blurDataURL={property.image.blurDataURL}
                            className="object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white tracking-wide">
                                {property.type}
                              </h3>
                              <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/95 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white/20"
                              >
                                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </motion.div>
                            </div>
                            <p className="text-sm text-white/90 leading-relaxed line-clamp-2 font-light">
                              {property.description}
                            </p>
                          </motion.div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            <span className="text-xs font-medium text-white tracking-wide">Premium</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Dots Navigation */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
                    {propertyTypes.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentPropertyIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentPropertyIndex 
                            ? 'bg-white w-4' 
                            : 'bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Contact Button */}
              <div className="block sm:hidden w-full max-w-[92%] mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactForm(true)}
                  className="relative w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white py-4 px-5 rounded-2xl border border-white/20 shadow-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-base font-semibold tracking-wide">Schedule a Visit</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-sm text-white/80">Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

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
                      Fill out the form below and we&apos;ll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
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
    </section>
  );
};

export default Hero; 