import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    quote: "The culinary craftsmanship at Clove is unparalleled in Manipal. The steak was cooked to absolute perfection, and the dim ambient lighting made our family anniversary feel incredibly intimate and special.",
    author: "The Shenoy Family",
    role: "Dinner Guests, Shivalli"
  },
  {
    id: 2,
    quote: "A beautiful addition to Manipal's dining scene. The Creamy Alfredo Pasta with black truffles felt like dining in a high-end bistro in Rome. The wine-red accents and editorial vibes are stunning.",
    author: "Dr. Vikram Kamath",
    role: "Local Food Enthusiast"
  },
  {
    id: 3,
    quote: "Our family gathering was absolutely exquisite. From the warm reception to the sommelier's wine pairing suggestions, Clove delivers genuine European hospitality with local warmth.",
    author: "Ananya Hegde",
    role: "Regular Guest, Vidyaratna Nagar"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    })
  };

  return (
    <section 
      id="reviews" 
      className="bg-luxury-black text-luxury-ivory py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background red glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-luxury-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section label */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-6 h-[1px] bg-luxury-red" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
              GUEST EXPERIENCES
            </span>
            <span className="w-6 h-[1px] bg-luxury-red" />
          </motion.div>
        </div>

        {/* Carousel Card Container */}
        <div className="relative bg-luxury-charcoal/40 border border-luxury-ivory/5 p-8 md:p-16 rounded-sm shadow-2xl backdrop-blur-md overflow-hidden min-h-[350px] flex flex-col justify-center">
          
          {/* Quote icon overlay */}
          <div className="absolute top-6 left-6 text-luxury-red/10 pointer-events-none">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="relative overflow-hidden w-full flex-grow flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center max-w-3xl"
              >
                {/* Review Quote */}
                <p className="font-serif-cormorant italic text-xl md:text-2xl lg:text-3xl text-luxury-ivory leading-relaxed mb-8">
                  "{reviews[activeIndex].quote}"
                </p>

                {/* Author Details */}
                <div>
                  <h4 className="font-serif-playfair text-base md:text-lg font-medium tracking-wide text-luxury-red">
                    {reviews[activeIndex].author}
                  </h4>
                  <p className="text-xs text-luxury-grey font-mono uppercase tracking-wider mt-1">
                    {reviews[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 relative z-20">
            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-[3px] transition-all duration-500 cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-luxury-red' : 'w-2 bg-luxury-grey/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next/Prev Buttons */}
            <div className="flex gap-3">
              <button
                onClick={slidePrev}
                className="w-10 h-10 flex items-center justify-center border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={slideNext}
                className="w-10 h-10 flex items-center justify-center border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red transition-all duration-300 rounded-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
