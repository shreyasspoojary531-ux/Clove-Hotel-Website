import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-luxury-ivory text-luxury-black py-24 md:py-36 relative overflow-hidden"
    >
      {/* Editorial grid container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-luxury-red" />
              <span className="text-xs uppercase tracking-[0.25em] text-luxury-red font-medium">
                OUR IDENTITY
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-serif-playfair text-4xl md:text-5xl font-light leading-tight tracking-tight text-luxury-black"
            >
              A Symphony of <br />
              <span className="font-serif-cormorant italic text-luxury-red">Taste & Heritage</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-7 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 1.0 }}
              className="text-left text-sm md:text-base text-stone-750 font-light leading-relaxed max-w-xl"
            >
              Clove was founded on the philosophy that dining is more than sustenance—it is an elegant 
              hospitality experience. Located in Shivalli, Manipal, our space combines modern 
              European-inspired ambience with a sophisticated dining culture. From our open culinary kitchen 
              to the candlelit tables, we foster a curated culinary atmosphere where families reconnect 
              over refined food craftsmanship.
            </motion.p>
          </div>
        </div>

        {/* Lower Row: Asymmetrical Overlapping Images & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images on Left (Large and Overlapping) */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[500px] w-full flex items-center">
            
            {/* Background Image: Refined dining setup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="absolute left-0 w-[65%] h-[80%] shadow-xl border border-stone-200 overflow-hidden"
            >
              <img 
                src="/images/restaurant_interior.png" 
                alt="Luxury dining ambience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Foreground Image: Chef Plating */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 1.0 }}
              className="absolute right-0 bottom-4 w-[50%] h-[70%] shadow-2xl border-4 border-luxury-ivory overflow-hidden z-10"
            >
              <img 
                src="/images/chef_plating.png" 
                alt="Chef preparing fine dining dish" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Pillars List on Right */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8 lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-4 border-b border-stone-300/60 pb-6"
            >
              <span className="font-serif-cormorant text-3xl font-light text-luxury-red">01</span>
              <div>
                <h3 className="font-serif-playfair text-lg font-medium text-luxury-black mb-1">
                  Curated Culinary Atmosphere
                </h3>
                <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                  Dim lighting, soft acoustics, and curated music playlists designed to make your 
                  family gather and linger.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex gap-4 border-b border-stone-300/60 pb-6"
            >
              <span className="font-serif-cormorant text-3xl font-light text-luxury-red">02</span>
              <div>
                <h3 className="font-serif-playfair text-lg font-medium text-luxury-black mb-1">
                  Premium Food Craftsmanship
                </h3>
                <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                  Our culinary team, trained in European bistros, brings delicate reduction sauces, 
                  slow-braising methods, and clean plating.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex gap-4"
            >
              <span className="font-serif-cormorant text-3xl font-light text-luxury-red">03</span>
              <div>
                <h3 className="font-serif-playfair text-lg font-medium text-luxury-black mb-1">
                  Elegant Hospitality Experience
                </h3>
                <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed">
                  White glove touches, personalized wine pairings, and a commitment to hosting your 
                  special occasions with European grace.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
