import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const motionFramer = motion;
import { Phone, Mail, MapPin, Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    note: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after a while
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2 Guests',
          note: ''
        });
      }, 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="bg-luxury-black text-luxury-ivory py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-luxury-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Form & Info */}
          <div className="lg:col-span-7 text-left">
            <motionFramer.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-luxury-red" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-grey">
                SECURE YOUR TABLE
              </span>
            </motionFramer.div>

            <motionFramer.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif-playfair text-4xl md:text-5xl font-light text-luxury-ivory mb-12"
            >
              Reservations & <span className="font-serif-cormorant italic text-luxury-red">Inquiries</span>
            </motionFramer.h2>

            {/* Booking Form Card */}
            <div className="bg-luxury-charcoal/30 border border-luxury-ivory/5 p-8 md:p-10 rounded-sm relative overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motionFramer.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Shreyas Hegde"
                          className="px-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="px-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. client@example.com"
                          className="px-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory"
                        />
                      </div>

                      {/* Guests */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Number of Guests
                        </label>
                        <div className="relative">
                          <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-red" />
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory appearance-none"
                          >
                            <option value="1 Guest">1 Guest</option>
                            <option value="2 Guests">2 Guests</option>
                            <option value="3 Guests">3 Guests</option>
                            <option value="4 Guests">4 Guests</option>
                            <option value="5 Guests">5 Guests</option>
                            <option value="6+ Guests">6+ Guests (Family Table)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-red" />
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex flex-col text-left">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-red" />
                          <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Note */}
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-luxury-grey mb-2">
                        Special Occasion / Dietary Notes
                      </label>
                      <textarea
                        name="note"
                        rows="3"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="e.g. Celebrating an anniversary, vegan preferences..."
                        className="px-4 py-3 bg-luxury-black/50 border border-luxury-ivory/10 focus:border-luxury-red focus:outline-none text-sm transition-all duration-300 font-light text-luxury-ivory resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-luxury-red hover:bg-luxury-red/90 transition-all duration-500 text-xs uppercase tracking-[0.25em] text-luxury-ivory font-medium mt-4 cursor-pointer flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Request
                        </>
                      ) : (
                        'Request Table Reservation'
                      )}
                    </button>
                  </motionFramer.form>
                ) : (
                  <motionFramer.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motionFramer.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-luxury-red mb-6"
                    >
                      <CheckCircle size={64} strokeWidth={1.5} />
                    </motionFramer.div>
                    
                    <h3 className="font-serif-playfair text-2xl font-light text-luxury-ivory mb-3">
                      Reservation Request Received
                    </h3>
                    
                    <p className="text-sm text-luxury-grey font-light leading-relaxed max-w-md mb-8">
                      Thank you, <span className="text-luxury-ivory font-medium">{formData.name}</span>. 
                      We have received your reservation request for <span className="text-luxury-ivory font-medium">{formData.date}</span> at <span className="text-luxury-ivory font-medium">{formData.time}</span>. 
                      Our concierge will contact you shortly to confirm availability.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 border border-luxury-grey/30 hover:border-luxury-ivory text-[10px] uppercase tracking-[0.2em] text-luxury-ivory transition-colors duration-300 bg-transparent"
                    >
                      Book Another Table
                    </button>
                  </motionFramer.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Contact info & Custom Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-6 text-left">
              
              {/* Phone */}
              <div className="flex gap-6 items-start bg-luxury-charcoal/30 border border-luxury-ivory/5 p-6">
                <div className="w-10 h-10 border border-luxury-red/20 text-luxury-red flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-grey/70 block mb-1">
                    Direct Booking Line
                  </span>
                  <a href="tel:+919876543210" className="font-mono text-sm text-luxury-ivory hover:text-luxury-red transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 items-start bg-luxury-charcoal/30 border border-luxury-ivory/5 p-6">
                <div className="w-10 h-10 border border-luxury-red/20 text-luxury-red flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-grey/70 block mb-1">
                    General Concierge
                  </span>
                  <a href="mailto:reservations@dclove.com" className="font-mono text-sm text-luxury-ivory hover:text-luxury-red transition-colors duration-300">
                    reservations@dclove.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-6 items-start bg-luxury-charcoal/30 border border-luxury-ivory/5 p-6">
                <div className="w-10 h-10 border border-luxury-red/20 text-luxury-red flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-grey/70 block mb-1">
                    Our Location
                  </span>
                  <p className="text-sm text-luxury-ivory leading-relaxed font-light">
                    Shivalli, Vidyaratna Nagar, <br />
                    Manipal, Karnataka 576104
                  </p>
                </div>
              </div>

            </div>

            {/* Custom Cinematic Map Block */}
            <div className="w-full h-[280px] bg-luxury-charcoal/40 border border-luxury-ivory/5 shadow-2xl relative overflow-hidden rounded-sm flex flex-col justify-between p-6">
              
              {/* Map grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-luxury-ivory" />
                ))}
              </div>
              
              {/* Abstract map roads */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-[25%] left-0 w-full h-[1px] bg-luxury-ivory" />
                <div className="absolute top-[65%] left-0 w-full h-[2px] bg-luxury-ivory" />
                <div className="absolute left-[35%] top-0 w-[1px] h-full bg-luxury-ivory" />
                <div className="absolute left-[70%] top-0 w-[1px] h-full bg-luxury-ivory" />
                <div className="absolute top-[40%] left-[20%] w-[100px] h-[100px] rounded-full border border-luxury-ivory" />
              </div>

              {/* Locator Beacon (Pulsing node) */}
              <div className="absolute left-[52%] top-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                {/* Radiating rings */}
                <motionFramer.div 
                  className="absolute w-24 h-24 rounded-full border border-luxury-red bg-luxury-red/5"
                  animate={{ scale: [0.5, 1.8], opacity: [0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motionFramer.div 
                  className="absolute w-12 h-12 rounded-full border border-luxury-red/40 bg-luxury-red/10"
                  animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                />
                {/* Central solid pin */}
                <div className="w-3.5 h-3.5 bg-luxury-red rounded-full shadow-lg shadow-luxury-red/50 border-2 border-luxury-ivory z-10" />
              </div>

              {/* Coordinates info overlay */}
              <div className="relative z-10 text-left bg-luxury-black/85 border border-luxury-ivory/10 p-4 max-w-[200px] shadow-xl self-start">
                <span className="text-[8px] uppercase tracking-[0.2em] text-luxury-red block mb-0.5 font-mono">
                  Coordinates
                </span>
                <span className="text-[10px] text-luxury-ivory block font-mono">
                  13.3409° N, 74.7864° E
                </span>
                <span className="text-[8px] text-luxury-grey block mt-1 uppercase tracking-[0.1em]">
                  Vidyaratna Nagar
                </span>
              </div>

              {/* Directions floating action */}
              <a 
                href="https://maps.google.com/?q=D+Clove+Shivalli+Vidyaratna+Nagar+Manipal+Karnataka+576104"
                target="_blank"
                rel="noreferrer"
                className="relative z-10 self-end px-4 py-2 border border-luxury-red bg-luxury-red text-[9px] uppercase tracking-[0.2em] text-luxury-ivory hover:bg-transparent hover:text-luxury-red transition-all duration-300 font-medium"
              >
                Get Directions
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
