'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

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
    }, 600);
  };

  const specsSummary = [
    { label: 'STRUCTURAL RIGIDITY', val: 'IS 456 Monolithic Shear Wall (Seismic Zone II)' },
    { label: 'VERTICAL CLEARANCE', val: '11\'-0" Clear Floor-to-Ceiling Living Volumes' },
    { label: 'ACOUSTIC GLAZING', val: 'Heavy-Gauge UPVC Profile with Toughened Glass' },
    { label: 'UTILITIES & BACKUP', val: '100% DG Acoustic Backup & On-Site Softening Plant' },
    { label: 'PARKING ARCHITECTURE', val: '5 Tiers Open Ventilated Stilt Parking (EV-Ready)' },
  ];

  return (
    <section
      id="enquiry"
      className="relative w-full py-16 sm:py-20 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2.5 pb-4 border-b border-[#141414]/8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
            06 — PRIVATE CONSULTATION & CRAFT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.14]">
            Experience Vanae.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
            We invite you to schedule a private walkthrough with our architectural relationship directors at the Kollur Experience Pavilion.
          </p>
        </div>

        {/* Editorial Split Composition: Dossier & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Consultation Dossier & Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                THE PRIVATE ENCOUNTER
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141414] leading-snug">
                A personal encounter with thirty-six floors of rooted living.
              </h3>
              <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
                Every viewing is conducted as an uninterrupted private session at the VANAE Experience Pavilion in Kollur. You will tour the 14-acre master scale model, examine floorplan drafts, and explore unit orientations.
              </p>
            </div>

            {/* Direct Concierge Contact Matrix */}
            <div className="space-y-3 pt-3 border-t border-[#141414]/8 text-xs">
              <div className="flex items-start gap-3 text-[#4A544F]">
                <MapPin className="w-4 h-4 text-[#8C7A65] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#141414] font-medium block">Experience Pavilion & Site Address</strong>
                  Kollur, Nehru Outer Ring Road Exit 2, Hyderabad, Telangana 502300
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#4A544F]">
                <Phone className="w-4 h-4 text-[#8C7A65] shrink-0" />
                <span>
                  <strong className="text-[#141414] font-medium mr-2">Private Line:</strong>
                  +91 91000 81234
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#4A544F]">
                <Mail className="w-4 h-4 text-[#8C7A65] shrink-0" />
                <span>
                  <strong className="text-[#141414] font-medium mr-2">Direct Inquiries:</strong>
                  concierge@vanae.luxury
                </span>
              </div>
            </div>

            {/* Engineering Specifications Summary Ledger */}
            <div className="p-5 rounded-xs bg-white border border-[#141414]/8 space-y-3 shadow-2xs">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65] block font-medium">
                ENGINEERING SPECIFICATIONS SUMMARY
              </span>
              <div className="space-y-2 text-xs divide-y divide-[#141414]/6">
                {specsSummary.map((s) => (
                  <div key={s.label} className="pt-2 first:pt-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="text-[10px] font-mono uppercase text-[#4A544F]">{s.label}</span>
                    <span className="font-sans text-xs text-[#141414] font-normal">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Clean Inline Consultation Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-xs border border-[#141414]/10 shadow-xs">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Rao"
                      className="w-full bg-[#FAF9F6] border border-[#141414]/12 focus:border-[#141414] rounded-xs px-4 py-2.5 text-xs text-[#141414] focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                        Telephone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF9F6] border border-[#141414]/12 focus:border-[#141414] rounded-xs px-4 py-2.5 text-xs text-[#141414] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@domain.com"
                        className="w-full bg-[#FAF9F6] border border-[#141414]/12 focus:border-[#141414] rounded-xs px-4 py-2.5 text-xs text-[#141414] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                      Configuration of Interest
                    </label>
                    <select
                      value={formData.configuration}
                      onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#141414]/12 focus:border-[#141414] rounded-xs px-4 py-2.5 text-xs text-[#141414] focus:outline-hidden transition-colors cursor-pointer"
                    >
                      <option>3 BHK Residences (1765 – 2555 Sft)</option>
                      <option>4 BHK Grand Sky Residences (4400 Sft)</option>
                      <option>General Architectural Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                      Preferred Day or Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Preferred day for site viewing or specific block orientation..."
                      className="w-full bg-[#FAF9F6] border border-[#141414]/12 focus:border-[#141414] rounded-xs px-4 py-2.5 text-xs text-[#141414] focus:outline-hidden transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#141414] text-white hover:bg-[#8C7A65] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Confirming...' : 'Request Private Viewing'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#8C7A65] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#141414] font-light">
                    Consultation Requested
                  </h4>
                  <p className="font-sans text-xs text-[#4A544F] font-light max-w-sm mx-auto leading-relaxed">
                    Thank you. Our relationship director will contact you directly on {formData.phone} to coordinate your private visit to the VANAE Experience Pavilion.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        configuration: '3 BHK Residences (1765 – 2555 Sft)',
                        message: '',
                      });
                    }}
                    className="pt-2 text-xs font-mono text-[#8C7A65] underline hover:text-[#141414] cursor-pointer"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
