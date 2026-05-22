import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: 'Grilled Herb Chicken',
    category: 'Mains',
    description: 'Sous-vide chicken breast seared with rosemary, thyme, garlic butter gloss, served with truffle potato purée and baby carrots.',
    price: '₹620',
    image: '/images/dish_herb_chicken.png',
    pairing: 'Chardonnay'
  },
  {
    id: 2,
    name: 'Creamy Alfredo Pasta',
    category: 'Pastas & Pizzas',
    description: 'House-made fettuccine tossed in a rich, buttery Parmigiano-Reggiano cream, finished with shaved black truffles.',
    price: '₹580',
    image: '/images/dish_alfredo_pasta.png',
    pairing: 'Pinot Noir'
  },
  {
    id: 3,
    name: 'Clove Signature Steak',
    category: 'Mains',
    description: 'Premium seared Wagyu ribeye steak sliced on charred wood, finished with coarse sea salt flakes and a rich red wine reduction.',
    price: '₹1,250',
    image: '/images/dish_signature_steak.png',
    pairing: 'Cabernet Sauvignon'
  },
  {
    id: 4,
    name: 'Garlic Butter Fish',
    category: 'Mains',
    description: 'Pan-seared sea bass fillet, drizzled in a creamy garlic butter reduction, garnished with micro greens and charred lemon.',
    price: '₹680',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    pairing: 'Sauvignon Blanc'
  },
  {
    id: 5,
    name: 'Wood Fired Pizza',
    category: 'Pastas & Pizzas',
    description: 'Neapolitan-style thin crust pizza with bubbling buffalo mozzarella, San Marzano tomato sauce, fresh basil, and extra virgin olive oil.',
    price: '₹520',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    pairing: 'Chianti Classico'
  },
  {
    id: 6,
    name: 'Mediterranean Platter',
    category: 'Platters',
    description: 'A luxury sharing board of wood-fired flatbread, roasted garlic hummus, house falafel, Kalamata olives, and grilled halloumi cheese.',
    price: '₹740',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    pairing: 'Dry Rosé'
  }
];

export default function SignatureDishes({ onViewFullMenu }) {
  return (
    <section 
      id="menu" 
      className="bg-luxury-black text-luxury-ivory py-24 md:py-36 relative overflow-hidden"
    >
      {/* Light background red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-luxury-red/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-6 h-[1px] bg-luxury-red" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
              OUR SPECIFIED CRAFT
            </span>
            <span className="w-6 h-[1px] bg-luxury-red" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-playfair text-4xl md:text-5xl font-light text-luxury-ivory mb-6"
          >
            Signature <span className="font-serif-cormorant italic text-luxury-red">Dishes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm text-luxury-grey font-light leading-relaxed"
          >
            A curated selection of house specialties, carefully crafted by our culinary experts, 
            blending classic European preparations with modern gastronomy.
          </motion.p>
        </div>

        {/* Dishes Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {dishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                key={dish.id}
                className="group flex flex-col bg-luxury-charcoal/40 border border-luxury-ivory/5 shadow-xl hover:border-luxury-red/20 transition-colors duration-500 p-5 rounded-sm relative overflow-hidden"
              >
                {/* Image Container with Zoom */}
                <div className="w-full aspect-[4/3] overflow-hidden relative mb-6">
                  {/* Subtle black overlay */}
                  <div className="absolute inset-0 bg-luxury-black/15 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 z-25 bg-luxury-black/70 backdrop-blur-sm border border-luxury-ivory/10 text-[9px] uppercase tracking-[0.25em] text-luxury-ivory px-3 py-1 font-mono">
                    {dish.category}
                  </span>
                </div>

                {/* Dish Info */}
                <div className="text-left flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif-playfair text-lg md:text-xl font-light text-luxury-ivory group-hover:text-luxury-red transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <span className="font-serif-cormorant text-lg font-medium text-luxury-red ml-3">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-xs text-luxury-grey font-light leading-relaxed mb-6">
                      {dish.description}
                    </p>
                  </div>

                  {/* Sommelier Pairing & Action */}
                  <div className="border-t border-luxury-ivory/10 pt-4 mt-auto flex justify-between items-center">
                    <div className="text-left">
                      <span className="block text-[8px] uppercase tracking-[0.2em] text-luxury-grey/65">
                        Sommelier Recommendation
                      </span>
                      <span className="text-[10px] text-luxury-red font-mono uppercase tracking-[0.1em]">
                        {dish.pairing}
                      </span>
                    </div>
                    
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        const contactSec = document.querySelector('#contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[9px] uppercase tracking-[0.25em] text-luxury-ivory group-hover:text-luxury-red border-b border-transparent group-hover:border-luxury-red transition-all duration-300"
                    >
                      Reserve Plate
                    </a>
                  </div>
                </div>

                {/* Corner decorative light element */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-luxury-red/0 group-hover:bg-luxury-red/5 blur-3xl transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <button
            onClick={onViewFullMenu}
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-luxury-red bg-transparent hover:bg-luxury-red text-xs uppercase tracking-[0.25em] text-luxury-ivory font-medium transition-all duration-500 cursor-pointer"
          >
            <span>View Full Menu</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <p className="text-[10px] text-luxury-grey/50 mt-4 tracking-wide font-light">
            Explore our complete culinary catalogue — 19 categories, 150+ dishes
          </p>
        </motion.div>

      </div>
    </section>
  );
}
