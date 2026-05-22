import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollToTarget } from '../utils/scroll';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);
  const glowTopY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const glowBottomY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const mainImageY = useTransform(scrollYProgress, [0, 1], [0, -58]);
  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const handleScrollTo = (id) => {
    scrollToTarget(id);
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen bg-luxury-black flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle red background ambient glows */}
      <motion.div
        style={{ y: glowTopY }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-luxury-red/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowBottomY }}
        className="absolute bottom-1/4 left-1/12 w-[300px] h-[300px] rounded-full bg-luxury-red/5 blur-[90px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Cinematic Editorial Typography */}
        <motion.div
          style={{ y: copyY, opacity: copyOpacity }}
          className="lg:col-span-6 flex flex-col justify-center text-left"
        >
          {/* Subtle label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-luxury-red" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
              EST. 2026 • MANIPAL, KARNATAKA
            </span>
          </motion.div>

          {/* Luxury Serif Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.0, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-serif-playfair text-5xl md:text-6xl xl:text-7xl font-light text-luxury-ivory leading-[1.1] mb-6"
          >
            A Refined <br />
            <span className="font-serif-cormorant italic text-luxury-red">Dining</span> Experience
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.4, duration: 1.0 }}
            className="text-sm md:text-base text-luxury-grey font-light leading-relaxed max-w-lg mb-10"
          >
            Clove bridges the art of contemporary European culinary craft with deep, 
            meaningful family dining. Every plate is curated with exquisite local ingredients 
            from coastal Manipal, styled for the modern epicurean.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollTo('#menu')}
              className="group relative px-8 py-4 bg-luxury-red overflow-hidden border border-luxury-red text-xs uppercase tracking-[0.2em] text-luxury-ivory font-medium transition-all duration-300 shadow-md shadow-luxury-red/10"
            >
              <span className="absolute inset-0 bg-luxury-black/30 transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
              <span className="relative z-10">Explore Menu</span>
            </button>
            
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-4 border border-luxury-grey/30 hover:border-luxury-ivory text-xs uppercase tracking-[0.2em] text-luxury-ivory font-medium transition-all duration-500 bg-transparent"
            >
              Reserve Table
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Layered Photographic Collage */}
        <div className="hidden lg:flex lg:col-span-6 relative h-[450px] md:h-[600px] w-full items-center justify-center mt-8 lg:mt-0">
          
          {/* Main central image (Grilled Herb Chicken) */}
          <motion.div
            style={{ y: mainImageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1
            }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.3 },
              scale: { duration: 1.2, delay: 0.3 }
            }}
            className="absolute w-[60%] md:w-[55%] aspect-square z-20 shadow-2xl border border-luxury-ivory/10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/images/dish_herb_chicken.png" 
              alt="Grilled Herb Chicken" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlay Left Image: Chef Plating */}
          <motion.div
            style={{ y: leftImageY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: 0.85, 
              x: 0
            }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.5 },
              x: { duration: 1.2, delay: 0.5 }
            }}
            className="absolute left-0 md:left-4 top-[15%] w-[42%] aspect-square z-10 shadow-xl border border-luxury-ivory/5 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-luxury-black/20 z-10 transition-opacity duration-300 group-hover:opacity-0" />
            <img 
              src="/images/chef_plating.png" 
              alt="Chef Plating gourmet dish" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlay Right Image: Restaurant Atmosphere */}
          <motion.div
            style={{ y: rightImageY }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: 0.85, 
              x: 0
            }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.7 },
              x: { duration: 1.2, delay: 0.7 }
            }}
            className="absolute right-0 md:right-4 bottom-[15%] w-[45%] aspect-[4/5] z-30 shadow-2xl border border-luxury-ivory/5 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-luxury-black/35 z-10 transition-opacity duration-300 group-hover:opacity-0" />
            <img 
              src="/images/restaurant_interior.png" 
              alt="Clove luxury interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Editorial border frame decorator */}
          <motion.div
            style={{ y: frameY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.2 }}
            className="absolute inset-0 border border-luxury-ivory/20 pointer-events-none rounded-sm m-4 z-0"
          />
        </div>

      </div>
      
      {/* Decorative luxury scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-luxury-grey/40">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div 
          className="w-[1px] h-10 bg-luxury-grey/20 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/2 bg-luxury-red"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
