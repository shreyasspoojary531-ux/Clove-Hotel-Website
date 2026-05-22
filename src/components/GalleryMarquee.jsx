import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const row1Images = [
  { src: '/images/restaurant_interior.png', alt: 'Clove Warm Candlelit Ambience' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', alt: 'Gourmet Steak Plating' },
  { src: '/images/chef_plating.png', alt: 'Chef Plating Culinary Detail' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800', alt: 'Elegant European Seating' },
  { src: '/images/dish_herb_chicken.png', alt: 'Michelin Style Roasted Chicken' },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf2c9e9382b6?auto=format&fit=crop&q=80&w=800', alt: 'Gourmet Appetizer' },
];

const row2Images = [
  { src: '/images/candlelight_wine.png', alt: 'Red Wine Pouring Detail' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800', alt: 'Luxury Fine Dining Plating' },
  { src: '/images/dish_alfredo_pasta.png', alt: 'Creamy Alfredo Truffle Pasta' },
  { src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800', alt: 'Glass of Wine in candlelight' },
  { src: '/images/dish_signature_steak.png', alt: 'Clove Signature Wagyu Steak' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', alt: 'Modern Culinary Art' },
];

export default function GalleryMarquee() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -24]);
  const rowsY = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -34]);
  const glowY = useTransform(scrollYProgress, [0, 1], [42, -42]);

  return (
    <section 
      ref={sectionRef}
      id="vibe" 
      className="bg-luxury-black py-24 relative overflow-hidden"
    >
      {/* Light background red ambient glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-luxury-red/5 blur-[120px] pointer-events-none"
      />

      <motion.div style={{ y: headerY }} className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[1px] bg-luxury-red" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
            ATMOSPHERE & CRAFT
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-playfair text-4xl md:text-5xl font-light text-luxury-ivory"
        >
          Restaurant <span className="font-serif-cormorant italic text-luxury-red">Vibes</span>
        </motion.h2>
      </motion.div>

      {/* Marquee Rows Wrapper with gradient masks */}
      <motion.div style={{ y: rowsY }} className="w-full relative flex flex-col gap-6 md:gap-8 mask-fade-edges">
        
        {/* Top Row - Scrolls Left */}
        <div className="w-full overflow-hidden flex select-none">
          <div className="flex gap-4 md:gap-6 animate-marquee-left hover:pause min-w-full">
            {/* Set 1 */}
            {row1Images.map((image, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="w-[260px] md:w-[380px] aspect-[4/3] flex-shrink-0 overflow-hidden border border-luxury-ivory/5 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-luxury-black/30 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
            ))}
            {/* Set 2 (Duplicates for infinite scroll) */}
            {row1Images.map((image, idx) => (
              <div 
                key={`r1-dup-${idx}`} 
                className="w-[260px] md:w-[380px] aspect-[4/3] flex-shrink-0 overflow-hidden border border-luxury-ivory/5 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-luxury-black/30 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="w-full overflow-hidden flex select-none">
          <div className="flex gap-4 md:gap-6 animate-marquee-right hover:pause min-w-full">
            {/* Set 1 */}
            {row2Images.map((image, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="w-[260px] md:w-[380px] aspect-[4/3] flex-shrink-0 overflow-hidden border border-luxury-ivory/5 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-luxury-black/30 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
            ))}
            {/* Set 2 (Duplicates for infinite scroll) */}
            {row2Images.map((image, idx) => (
              <div 
                key={`r2-dup-${idx}`} 
                className="w-[260px] md:w-[380px] aspect-[4/3] flex-shrink-0 overflow-hidden border border-luxury-ivory/5 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-luxury-black/30 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
