"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sabrina Walters",
    stars: 5,
    text: ". I was unprepared when i got there and they went above and beyond to help me and made it so easy for me. Mike even brought me tissues as i tend to cry everywhere i go these days. I want to thank Mike for his kindness and compassion and i highly recommend this place to everyone that wants a great shipping experience.",
    link: "https://share.google/0XHBN7iuWqQDpcq0j",
  },
  {
    name: "Teresa Folk",
    stars: 5,
    text: "Polite and very accommodating. Had a last minute item needed for a memorial service and they went out of their way to ensure I got it in time. Highly recommend.",
    link: "https://share.google/AX3p42EwiKVCCcHYt",
  },
  {
    name: "Donald Pritchard",
    stars: 5,
    text: "Very helpful number one on customer service good parking ok good service.",
    link: "https://share.google/Ccv5oMqXre23oY3G2",
  },
  {
    name: "April Sears",
    stars: 5,
    text: "Copy trolly is awesome this is where I go for all my business needs ",
    link: "https://share.google/zHJlgRTFdBXn43TUB",
  },
  {
    name: "Tiffany Cruz",
    stars: 5,
    text: "love this place, I wonder if they print documents for you off your phone..",
    link: "https://share.google/cuz5MYHKFLvWNlNUH",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play infinite
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); // 8 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gray-50 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Hear From Our Customers
        </h2>
        <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Real reviews from homeowners in Bedford and surrounding areas.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-10 text-gray-800 hover:scale-105 transition-transform duration-500"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500 mr-1" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg mb-6 leading-relaxed">{testimonials[current].text}</p>

            {/* Name */}
            <a
              href={testimonials[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red-700 hover:text-red-900 transition-colors"
            >
              {testimonials[current].name}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg text-gray-800 rounded-full p-3 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg text-gray-800 rounded-full p-3 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
