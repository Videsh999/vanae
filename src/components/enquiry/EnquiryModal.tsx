'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultPlan }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    configuration: defaultPlan || '3 BHK',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-lg bg-[#FAF8F5] text-[#141C18] rounded-xs p-8 sm:p-12 shadow-xl border border-[#141C18]/10">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-[#141C18]/60 hover:text-[#141C18] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
                      PRIVATE CONSULTATION
                    </span>
                    <h3 className="font-serif text-3xl text-[#141C18] font-light">
                      Experience Vanae.
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white border border-[#141C18]/10 focus:border-[#141C18] rounded-xs px-3.5 py-2.5 text-xs text-[#141C18] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#141C18]/10 focus:border-[#141C18] rounded-xs px-3.5 py-2.5 text-xs text-[#141C18] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-white border border-[#141C18]/10 focus:border-[#141C18] rounded-xs px-3.5 py-2.5 text-xs text-[#141C18] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                        Interested In (Optional)
                      </label>
                      <select
                        value={formData.configuration}
                        onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                        className="w-full bg-white border border-[#141C18]/10 focus:border-[#141C18] rounded-xs px-3.5 py-2.5 text-xs text-[#141C18] focus:outline-hidden"
                      >
                        <option value="3 BHK">3 BHK Residences (1765 – 2555 Sft)</option>
                        <option value="4 BHK">4 BHK Signature (4400 Sft)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="rounded-xs text-[#141C18] accent-[#141C18]"
                      />
                      <label htmlFor="consent" className="text-[11px] text-[#4A544F] font-sans">
                        I agree to receive a private consultation regarding Vanae.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-3 bg-[#141C18] hover:bg-[#202C26] text-[#FAF8F5] font-mono text-xs uppercase tracking-[0.2em] transition-colors rounded-xs"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Request Private Viewing'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-[#8A7D6B] flex items-center justify-center text-[#8A7D6B] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#141C18]">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-xs text-[#4A544F] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our relationship director will reach out directly to coordinate your viewing.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B] hover:text-[#141C18] pt-2"
                  >
                    Close
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
