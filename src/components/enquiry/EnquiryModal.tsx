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
    configuration: defaultPlan || '3 BHK Residences (1765 – 2555 Sft)',
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
    }, 700);
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
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-lg bg-white text-[#141414] rounded-xs p-8 sm:p-12 shadow-2xl border border-[#141414]/10">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-[#141414]/60 hover:text-[#141414] transition-colors focus:outline-hidden"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
                      PRIVATE CONSULTATION
                    </span>
                    <h3 className="font-serif text-3xl text-[#141414] font-light">
                      Experience Vanae.
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#FAF9F6] border border-[#141414]/10 focus:border-[#141414] rounded-xs px-3.5 py-2.5 text-xs text-[#141414] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF9F6] border border-[#141414]/10 focus:border-[#141414] rounded-xs px-3.5 py-2.5 text-xs text-[#141414] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-[#FAF9F6] border border-[#141414]/10 focus:border-[#141414] rounded-xs px-3.5 py-2.5 text-xs text-[#141414] focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B] block">
                        Interested In
                      </label>
                      <select
                        value={formData.configuration}
                        onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#141414]/10 focus:border-[#141414] rounded-xs px-3.5 py-2.5 text-xs text-[#141414] focus:outline-hidden"
                      >
                        <option value="3 BHK Residences (1765 – 2555 Sft)">3 BHK Residences (1765 – 2555 Sft)</option>
                        <option value="4 BHK Signature Grand (4400 Sft)">4 BHK Signature Grand (4400 Sft)</option>
                        <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="modal-consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="rounded-xs text-[#141414] accent-[#141414]"
                      />
                      <label htmlFor="modal-consent" className="text-[11px] text-[#4A544F] font-sans">
                        I agree to receive private consultation details regarding Vanae.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-3 py-3.5 bg-[#141414] hover:bg-[#282828] text-white font-mono text-xs uppercase tracking-[0.2em] transition-colors rounded-xs focus:outline-hidden"
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
                  <h4 className="font-serif text-2xl text-[#141414]">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-xs text-[#4A544F] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our relationship director will contact you directly to coordinate your viewing.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B] hover:text-[#141414] pt-2 focus:outline-hidden"
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
