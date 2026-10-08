'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VANAE_DATA } from '@/data/vanae-data';

interface EnquirySectionProps {
  onOpenEnquire?: () => void;
}

export function EnquirySection({ onOpenEnquire }: EnquirySectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    configuration: '3 BHK Residences (1765 – 2555 Sft)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="private-viewing"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-6 border-b border-[#141414]/8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            11 — PRIVATE VIEWING
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
            Experience Vanae.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
            Schedule a private walkthrough with our architectural relationship directors. Discover the residences, floor plans, and site vistas.
          </p>
        </div>

        {/* Editorial Split Composition on Pure White Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Elegant Inline Enquiry Form */}
          <div className="lg:col-span-6 bg-[#FAF9F6] p-8 sm:p-12 rounded-xs border border-[#141414]/8 shadow-xs">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#141414]/10 focus:border-[#141414] rounded-xs px-4 py-3 text-xs text-[#141414] focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#141414]/10 focus:border-[#141414] rounded-xs px-4 py-3 text-xs text-[#141414] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-white border border-[#141414]/10 focus:border-[#141414] rounded-xs px-4 py-3 text-xs text-[#141414] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                      Configuration / Interest
                    </label>
                    <select
                      value={formData.configuration}
                      onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                      className="w-full bg-white border border-[#141414]/10 focus:border-[#141414] rounded-xs px-4 py-3 text-xs text-[#141414] focus:outline-hidden transition-colors"
                    >
                      <option value="3 BHK Residences (1765 – 2555 Sft)">3 BHK Residences (1765 – 2555 Sft)</option>
                      <option value="4 BHK Signature Grand (4400 Sft)">4 BHK Signature Grand (4400 Sft)</option>
                      <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                      Message / Preferred Date (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific requirements or preferred timing..."
                      className="w-full bg-white border border-[#141414]/10 focus:border-[#141414] rounded-xs px-4 py-3 text-xs text-[#141414] focus:outline-hidden transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#141414] hover:bg-[#282828] text-white font-mono text-xs uppercase tracking-[0.22em] transition-all rounded-xs flex items-center justify-center gap-2 focus:outline-hidden"
                    >
                      <span>{isSubmitting ? 'Transmitting...' : 'Request a Private Viewing'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[10px] text-[#4A544F]/70 text-center font-mono tracking-wider pt-1">
                    BY SUBMITTING, YOU AGREE TO RECEIVE A COURTESY CALL FROM OUR RELATIONSHIP TEAM.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full border border-[#8A7D6B] flex items-center justify-center text-[#8A7D6B] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-3xl text-[#141414]">
                    Consultation Requested
                  </h4>
                  <p className="font-sans text-xs text-[#4A544F] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our relationship director will contact you promptly to schedule your private viewing.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B] hover:text-[#141414] pt-2 focus:outline-hidden"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Architectural Photography & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/8 bg-[#F6F5F2]">
              <img
                src="/assets/architecture-skyline.jpg"
                alt="VANAE Daytime Architecture"
                className="w-full h-full object-cover object-center filter contrast-100"
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
                EXPERIENCE SUITE & SITE GALLERY
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#141414] font-light leading-relaxed">
                Kollur Exit 2, Nehru Outer Ring Road, Hyderabad – 502300
              </p>
              <div className="space-y-1 text-xs font-mono text-[#4A544F] tracking-wide">
                <p>HMDA Approval No: 006436/LO/HMDA 1500/MED/2024TG</p>
                <p>A Joint Venture of Nestmakers & Elegans Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
