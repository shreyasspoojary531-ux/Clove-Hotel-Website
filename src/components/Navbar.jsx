import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Vibe', href: '#vibe' },
  { name: 'Why Clove', href: '#why-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // Offset for sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-luxury-black/80 backdrop-blur-md border-b border-luxury-ivory/5 py-4 shadow-lg' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            className="flex items-center gap-2 group select-none"
          >
            <div className="font-serif-playfair text-xl md:text-2xl font-semibold tracking-[0.25em] text-luxury-ivory transition-colors duration-300">
              CLOVE
            </div>
            {/* Michelin-style star symbol */}
            <span className="w-1.5 h-1.5 bg-luxury-red rounded-full animate-pulse self-center mt-1" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-luxury-grey hover:text-luxury-ivory transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                {/* Horizontal line expanding from center */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-luxury-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Reserve CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-6 py-2.5 border border-luxury-red text-xs uppercase tracking-[0.2em] text-luxury-ivory hover:bg-luxury-red transition-all duration-500 font-medium"
            >
              Book Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-ivory p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black z-45 lg:hidden flex flex-col justify-center px-8 md:px-16"
          >
            {/* Decorative background red light glow */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-luxury-red opacity-5 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-serif-playfair text-3xl md:text-4xl text-luxury-grey hover:text-luxury-ivory transition-colors duration-300 flex items-center group"
                  >
                    <span className="text-sm font-mono text-luxury-red mr-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      0{idx + 1}.
                    </span>
                    {link.name}
                  </a>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-luxury-ivory/10"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="inline-block px-8 py-3.5 bg-luxury-red text-sm uppercase tracking-[0.2em] text-luxury-ivory font-medium text-center w-full hover:bg-luxury-red/80 transition-colors duration-300"
                >
                  Reserve Table
                </a>
                
                <div className="flex justify-between items-center mt-6 text-xs text-luxury-grey">
                  <span>+91 98765 43210</span>
                  <span>Manipal, Karnataka</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
