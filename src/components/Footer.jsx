import React from 'react';
export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#070707] text-luxury-ivory border-t border-luxury-ivory/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background soft red glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-luxury-red/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 text-left flex flex-col gap-6">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')} 
              className="flex items-center gap-2 select-none"
            >
              <span className="font-serif-playfair text-2xl font-semibold tracking-[0.25em] text-luxury-ivory">
                CLOVE
              </span>
              <span className="w-1.5 h-1.5 bg-luxury-red rounded-full self-center mt-1" />
            </a>

            <p className="text-xs md:text-sm text-luxury-grey font-light leading-relaxed max-w-sm">
              Bridging the art of contemporary European dining with the warmth of family meals, 
              curated in the heart of Vidyaratna Nagar, Manipal.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red transition-all duration-300 flex items-center justify-center text-luxury-grey"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red transition-all duration-300 flex items-center justify-center text-luxury-grey"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red transition-all duration-300 flex items-center justify-center text-luxury-grey"
                aria-label="Find us on TripAdvisor"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-red font-mono font-medium mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Signature Menu', href: '#menu' },
                { name: 'Restaurant Vibe', href: '#vibe' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Reservations', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-luxury-grey hover:text-luxury-ivory transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-red font-mono font-medium mb-6">
              Operating Hours
            </h4>
            <div className="space-y-4 text-xs text-luxury-grey font-light">
              <div>
                <span className="block font-medium text-luxury-ivory mb-1">Weekdays (Mon - Thu)</span>
                <span>Lunch: 12:00 PM - 3:30 PM</span>
                <span className="block">Dinner: 6:30 PM - 10:30 PM</span>
              </div>
              <div>
                <span className="block font-medium text-luxury-ivory mb-1">Weekends (Fri - Sun)</span>
                <span>Lunch: 12:00 PM - 4:00 PM</span>
                <span className="block">Dinner: 6:30 PM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-red font-mono font-medium mb-6">
              Establishment
            </h4>
            <div className="space-y-3 text-xs text-luxury-grey font-light">
              <p className="leading-relaxed">
                Shivalli, Vidyaratna Nagar, <br />
                Manipal, Karnataka 576104
              </p>
              <p className="font-mono">
                Phone: +91 98765 43210
              </p>
              <p className="font-mono">
                Email: reservations@dclove.com
              </p>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-luxury-ivory/5 my-8" />

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <span className="text-[10px] text-luxury-grey/50 block">
              © {new Date().getFullYear()} Clove Manipal. All rights reserved.
            </span>
            <span className="text-[9px] text-luxury-grey/30 mt-1 block">
              European Fine Dining & Family Gastronomy
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 border border-luxury-ivory/10 hover:border-luxury-red hover:text-luxury-red flex items-center justify-center transition-all duration-300 cursor-pointer text-luxury-grey"
            aria-label="Scroll back to top"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
