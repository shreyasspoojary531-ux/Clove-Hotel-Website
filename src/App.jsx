import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import GalleryMarquee from './components/GalleryMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullMenu from './components/FullMenu';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {/* Subtle cinematic grain texture overlay */}
      <div className="noise-overlay" />

      <AnimatePresence mode="wait" initial={false}>
        {currentPage === 'home' ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-luxury-black text-luxury-ivory selection:bg-luxury-red selection:text-luxury-ivory"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <SignatureDishes onViewFullMenu={() => setCurrentPage('full-menu')} />
              <GalleryMarquee />
              <WhyChooseUs />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="full-menu-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-luxury-black text-luxury-ivory selection:bg-luxury-red selection:text-luxury-ivory"
          >
            <FullMenu onBack={() => setCurrentPage('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
