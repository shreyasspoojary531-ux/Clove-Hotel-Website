import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Compass, Leaf, Sparkles } from 'lucide-react';

const reasons = [
  {
    id: 1,
    icon: Utensils,
    title: 'Fine Family Dining',
    metric: 'Est. 2026',
    description: 'We believe family meals are sacred. Our dining room is layout-designed to encourage sharing, conversation, and warm memories.'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Curated Culinary Craft',
    metric: 'Michelin Standard',
    description: 'Our menus are designed by European-trained chefs, combining refined French reductions with local spices from Manipal.'
  },
  {
    id: 3,
    icon: Compass,
    title: 'Elegant Ambience',
    metric: 'Dim Candlelight',
    description: 'A dark, dramatic visual landscape balanced by warm candle glow, velvet accents, and slow-driven acoustic rhythms.'
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Fresh Ingredients Daily',
    metric: '100% Organic',
    description: 'Sourced directly from local farmers and coastal fishermen of Udupi and Manipal to deliver vibrant, untamed freshness.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export default function WhyChooseUs() {
  return (
    <section 
      id="why-us" 
      className="bg-luxury-black text-luxury-ivory py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background soft red glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-luxury-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-luxury-red" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
              THE BRAND VALUES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-playfair text-4xl md:text-5xl font-light text-luxury-ivory"
          >
            Why People <span className="font-serif-cormorant italic text-luxury-red">Love Us</span>
          </motion.h2>
        </div>

        {/* Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                variants={cardVariants}
                className="group flex flex-col bg-luxury-charcoal/30 border border-luxury-ivory/5 p-8 rounded-sm shadow-lg hover:border-luxury-red/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Accent red corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-red/0 group-hover:bg-luxury-red/5 blur-2xl transition-all duration-500" />
                
                {/* Metric/badge */}
                <span className="text-[10px] font-mono text-luxury-red uppercase tracking-[0.2em] mb-6 block text-left">
                  {reason.metric}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-luxury-red/20 text-luxury-red mb-6 rounded-none group-hover:bg-luxury-red group-hover:text-luxury-ivory transition-all duration-500">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Typography */}
                <div className="text-left mt-auto">
                  <h3 className="font-serif-playfair text-lg font-medium text-luxury-ivory mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-xs md:text-sm text-luxury-grey font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
