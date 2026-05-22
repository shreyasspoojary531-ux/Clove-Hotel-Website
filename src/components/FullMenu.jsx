import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { scrollToTop } from '../utils/scroll';

const menuData = [
  {
    category: 'Soups',
    items: [
      { name: 'Pearl Soup (Veg)', price: '₹100' },
      { name: 'Pearl Soup (Chicken)', price: '₹140' },
      { name: 'Pearl Soup (Mutton)', price: '₹180' },
      { name: 'Veg Brocolli Soup', price: '₹200' },
      { name: 'Mutton Paya Soup', price: '₹250' },
      { name: 'Shorbat-E-Pearl Soup (Veg)', price: '₹160' },
      { name: 'Shorbat-E-Pearl Soup (Chicken)', price: '₹170' },
      { name: 'Shorbat-E-Pearl Soup (Mutton)', price: '₹200' },
      { name: 'Jahangir Soup', price: '₹200' },
      { name: 'Seafood Soup', price: '₹250' },
    ]
  },
  {
    category: 'Salad',
    items: [
      { name: 'Mango Peanut Salad', price: '₹120' },
      { name: 'Chana Salad', price: '₹120' },
      { name: 'Arabic Salad', price: '₹150' },
      { name: 'Green Salad', price: '₹120' },
    ]
  },
  {
    category: 'Starters (Veg)',
    items: [
      { name: 'Cheese Stuffed Mushroom', price: '₹220' },
      { name: 'Paneer Makmali', price: '₹260' },
      { name: 'Crispy Corn', price: '₹240' },
      { name: 'Brocolli Tikka', price: '₹260' },
      { name: 'Babycorn Cheese Tikka', price: '₹220' },
      { name: 'Paneer Ghee Roast', price: '₹260' },
      { name: 'Mushroom Ghee Roast', price: '₹260' },
    ]
  },
  {
    category: 'Starters (Non-Veg)',
    items: [
      { name: 'Chicken Ghee Roast', price: '₹280' },
      { name: 'Chicken Dynamite', price: '₹280' },
      { name: 'Chicken Badami', price: '₹300' },
      { name: 'Beef Pipli', price: '₹320' },
      { name: 'Sofiyani Tikka', price: '₹300' },
      { name: 'Laziz Tikka', price: '₹320' },
      { name: 'Angara Tikka', price: '₹280' },
      { name: 'Sholay Tikka', price: '₹340' },
      { name: 'Special Kalmi Kabab', price: '₹360' },
      { name: 'Wings Mexican', price: '₹260' },
      { name: 'Labanese Tikka', price: '₹300' },
      { name: 'Smoked Wings', price: '₹280' },
      { name: 'Hazari Tikka', price: '₹320' },
      { name: 'Chicken Makmali', price: '₹300' },
      { name: 'Clove Special', price: '₹400' },
      { name: 'Iffa Chicken', price: '₹320' },
      { name: 'Hunan Chicken', price: '₹300' },
    ]
  },
  {
    category: 'Mutton Special',
    items: [
      { name: 'Mutton Thuppa Ghosh', price: '₹380' },
      { name: 'Mutton Ghee Roast', price: '₹350' },
      { name: 'Mutton Laziz', price: '₹380' },
      { name: 'Mutton Chaps', price: '₹390' },
      { name: 'Beja Fry', price: '₹150' },
      { name: 'Beja Butter Garlic', price: '₹160' },
      { name: 'Mutton Solid Gold', price: '₹500' },
      { name: 'Mutton Raan', price: '₹1,900' },
    ]
  },
  {
    category: 'Seafood Special',
    items: [
      { name: 'Prawns Ghee Roast', price: '₹350' },
      { name: 'Crab Ghee Roast', price: '₹350' },
      { name: 'Squid Deep Fry', price: '₹300' },
      { name: 'Squid Ghee Roast', price: '₹300' },
      { name: 'Prawns Dynamite', price: '₹370' },
      { name: 'Groomed Prawns', price: '₹400' },
      { name: 'Fish Khandari', price: 'Seasonal' },
      { name: 'Fish Finger', price: 'Seasonal' },
      { name: 'Fish Tikka', price: 'Seasonal' },
      { name: 'Squid Cocktail', price: '₹700' },
    ]
  },
  {
    category: 'Special Rice / Noodles',
    items: [
      { name: 'Chicken Fried Rice / Noodles', price: '₹200' },
      { name: 'Burnt Garlic Fried Rice / Noodles', price: '₹220' },
      { name: 'Seafood Mixed Fried Rice / Noodles', price: '₹260' },
      { name: 'Veg Fried Rice / Noodles', price: '₹190' },
    ]
  },
  {
    category: 'Lunch Special',
    items: [
      { name: 'Veg Thali', price: '₹90' },
      { name: 'Special Veg Thali', price: '₹200' },
    ]
  },
  {
    category: 'Breads',
    items: [
      { name: 'Roti', price: '₹25' },
      { name: 'Neerdosa', price: '₹15' },
      { name: 'Kori Rotti', price: '₹50' },
      { name: 'Rice Ball (Pundi)', price: '₹12' },
    ]
  },
  {
    category: 'Veg Gravy',
    items: [
      { name: 'Dal Makhni', price: '₹180' },
      { name: 'Paneer Butter Masala', price: '₹240' },
      { name: 'Mixed Veg Masala', price: '₹250' },
    ]
  },
  {
    category: 'Non Veg Gravy',
    items: [
      { name: 'Pulimunchi Fish Gravy', price: 'Seasonal' },
      { name: 'Butter Chicken', price: '₹260' },
      { name: 'Chicken Gravy', price: '₹220' },
      { name: 'Mutton Rogen Ghosh', price: '₹350' },
    ]
  },
  {
    category: 'Seafood Special Fry',
    items: [
      { name: 'Manglore Special Fry', price: 'Seasonal' },
      { name: 'Tawa Masala', price: 'Seasonal' },
      { name: 'Silver Fish Rava', price: 'Seasonal' },
    ]
  },
  {
    category: 'Full Chicken',
    items: [
      { name: 'Chicken Al-Faham (Half)', price: '₹260' },
      { name: 'Chicken Al-Faham (Full)', price: '₹500' },
      { name: 'Chicken Shawaya', price: '₹250–470' },
    ]
  },
  {
    category: 'Sizzlers',
    items: [
      { name: 'Mutton Sizzler', price: '₹450' },
      { name: 'Chicken Sizzler', price: '₹400' },
      { name: 'Prawns Sizzler', price: '₹430' },
      { name: 'Veg Sizzler', price: '₹350' },
    ]
  },
  {
    category: 'Fresh Sips',
    items: [
      { name: 'Lemon Juice', price: '₹50–150' },
      { name: 'Lemon Soda', price: '₹50–150' },
      { name: 'Tamarind Juice', price: '₹100–250' },
      { name: 'Mint Lime Juice', price: '₹60–180' },
      { name: 'Orange Juice', price: '₹80–250' },
      { name: 'Mosambi Juice', price: '₹80–250' },
      { name: 'Pineapple Juice', price: '₹80–250' },
      { name: 'Pomegranate Juice', price: '₹90–250' },
    ]
  },
  {
    category: 'Kulki',
    items: [
      { name: 'Raw-Pine', price: '₹70' },
      { name: 'Mango', price: '₹70' },
      { name: 'Pineapple', price: '₹70' },
    ]
  },
  {
    category: 'Clove Special Arabic Dish',
    items: [
      { name: 'Chicken Mandi (Qtr)', price: '₹269' },
      { name: 'Chicken Mandi (Half)', price: '₹539' },
      { name: 'Chicken Mandi (Full)', price: '₹999' },
      { name: 'Al-Faham Mandi (Qtr)', price: '₹269' },
      { name: 'Al-Faham Mandi (Half)', price: '₹539' },
      { name: 'Al-Faham Mandi (Full)', price: '₹999' },
      { name: 'Shawaya Mandi (Qtr)', price: '₹269' },
      { name: 'Shawaya Mandi (Half)', price: '₹539' },
      { name: 'Shawaya Mandi (Full)', price: '₹999' },
      { name: 'Pepper Mandi (Qtr)', price: '₹269' },
      { name: 'Pepper Mandi (Half)', price: '₹539' },
      { name: 'Pepper Mandi (Full)', price: '₹999' },
      { name: 'Khandari Mandi (Qtr)', price: '₹269' },
      { name: 'Khandari Mandi (Half)', price: '₹539' },
      { name: 'Khandari Mandi (Full)', price: '₹999' },
      { name: 'Afghan Mandi (Qtr)', price: '₹269' },
      { name: 'Afghan Mandi (Half)', price: '₹539' },
      { name: 'Afghan Mandi (Full)', price: '₹999' },
      { name: 'Spicy Mexican Mandi (Qtr)', price: '₹269' },
      { name: 'Spicy Mexican Mandi (Half)', price: '₹539' },
      { name: 'Spicy Mexican Mandi (Full)', price: '₹999' },
      { name: 'Ghee Roast Mandi (Qtr)', price: '₹269' },
      { name: 'Ghee Roast Mandi (Half)', price: '₹539' },
      { name: 'Ghee Roast Mandi (Full)', price: '₹999' },
    ]
  },
  {
    category: 'Mutton Mandi',
    items: [
      { name: 'Spicy Mexican Mandi (Qtr)', price: '₹440' },
      { name: 'Spicy Mexican Mandi (Half)', price: '₹840' },
      { name: 'Spicy Mexican Mandi (Full)', price: '₹1,600' },
      { name: 'Khandari Mandi (Qtr)', price: '₹440' },
      { name: 'Khandari Mandi (Half)', price: '₹840' },
      { name: 'Khandari Mandi (Full)', price: '₹1,600' },
      { name: 'Tawa Mandi (Qtr)', price: '₹440' },
      { name: 'Tawa Mandi (Half)', price: '₹840' },
      { name: 'Tawa Mandi (Full)', price: '₹1,600' },
      { name: 'Mutton Raan Mandi', price: '₹2,300' },
      { name: 'Mutton Ribs Mandi', price: '₹1,299' },
      { name: 'Prawns Ghee Roast Mandi', price: '₹1,299' },
      { name: 'Chicken Maqlooba', price: '₹649' },
      { name: 'Mutton Madhfoon', price: '₹899' },
      { name: 'Chicken Madhooth', price: '₹599' },
      { name: 'Mutton Madhooth', price: '₹929' },
    ]
  },
  {
    category: 'Platters',
    items: [
      { name: 'Chicken Platter', price: '₹700' },
      { name: 'Mixed Non-Veg Platter', price: '₹1,200' },
    ]
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.018,
    },
  },
};

export default function FullMenu({ onBack }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-ivory">
      {/* Fixed back header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/85 backdrop-blur-lg border-b border-luxury-ivory/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-luxury-grey hover:text-luxury-ivory transition-colors duration-300 cursor-pointer group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-xs uppercase tracking-[0.2em]">Back to Home</span>
          </button>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="font-serif-playfair text-lg md:text-xl font-semibold tracking-[0.25em] text-luxury-ivory flex items-center gap-2"
          >
            CLOVE
            <span className="w-1.5 h-1.5 bg-luxury-red rounded-full" />
          </a>
        </div>
      </div>

      {/* Hero header */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-red/5 blur-[130px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4 relative z-10"
        >
          <span className="w-8 h-[1px] bg-luxury-red" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
            CULINARY CATALOGUE
          </span>
          <span className="w-8 h-[1px] bg-luxury-red" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-playfair text-4xl md:text-6xl font-light text-luxury-ivory mb-6 relative z-10"
        >
          Our Complete <span className="font-serif-cormorant italic text-luxury-red">Menu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm text-luxury-grey font-light leading-relaxed max-w-xl mx-auto relative z-10"
        >
          From signature Arabic mandis to coastal seafood, every dish is prepared with passion.
          Prices are inclusive of all taxes.
        </motion.p>
      </div>

      {/* Menu sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-16"
      >
        {menuData.map((section, sectionIdx) => (
          <motion.div
            key={section.category}
            variants={sectionVariants}
            className="relative"
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-mono text-luxury-red/60 uppercase tracking-widest">
                {String(sectionIdx + 1).padStart(2, '0')}
              </span>
              <h2 className="font-serif-playfair text-2xl md:text-3xl font-light text-luxury-ivory">
                {section.category}
              </h2>
              <span className="flex-1 h-[1px] bg-luxury-ivory/5" />
            </div>

            {/* Items table */}
            <div className="border border-luxury-ivory/5 bg-luxury-charcoal/20 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-luxury-ivory/5">
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-luxury-grey/50 font-medium">
                      Dish
                    </th>
                    <th className="px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-luxury-grey/50 font-medium text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <motion.tbody variants={itemContainerVariants}>
                  {section.items.map((item, idx) => (
                    <motion.tr
                      key={`${section.category}-${idx}`}
                      variants={itemVariants}
                      className="border-b border-luxury-ivory/[0.03] last:border-b-0 hover:bg-luxury-red/[0.03] transition-colors duration-300"
                    >
                      <td className="px-5 py-3.5 text-sm font-light text-luxury-ivory/90">
                        {item.name}
                      </td>
                      <td className="px-5 py-3.5 text-sm font-mono text-luxury-red text-right whitespace-nowrap">
                        {item.price}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-20">
        <div className="border-t border-luxury-ivory/5 pt-12 text-center">
          <p className="text-xs text-luxury-grey/50 font-light mb-6">
            Prices may vary seasonally. Please inform your server of any dietary requirements or allergies.
          </p>
          <button
            onClick={onBack}
            className="px-10 py-4 border border-luxury-red bg-luxury-red hover:bg-transparent text-xs uppercase tracking-[0.2em] text-luxury-ivory font-medium transition-all duration-500 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
