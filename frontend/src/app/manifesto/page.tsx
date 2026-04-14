"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <div className="flex-1 relative w-full min-h-screen overflow-hidden bg-primary-dark text-primary-light selection:bg-primary-light selection:text-primary-dark">
      {/* 3-Line Vertical Stacked Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] z-0 flex items-center justify-center overflow-hidden">
        <div className="font-heading font-extrabold text-[28vw] leading-[0.75] uppercase select-none text-center flex flex-col items-center justify-center tracking-tighter">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            UNDER
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            THE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            ROOF
          </motion.span>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-24 px-6 md:px-0 pb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-structure font-sans text-xs uppercase tracking-[0.5em] mb-12 border-l-2 border-structure pl-6"
        >
          EDITORIAL INTELLIGENCE | OPERATIONAL FRAMEWORK
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-extrabold text-5xl md:text-8xl uppercase tracking-architectural leading-[0.9] mb-20"
        >
          The Rational<br />Interface.
        </motion.h1>

        <div className="space-y-16 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The point is the origin. The artist. The raw, unprotected talent operating within an opaque system designed for disposal.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-l border-structure pl-8 py-4 italic text-structure"
          >
            "UTR diagnoses the music industry as a design flaw, and then builds a different system."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We provide the technical, legal, and strategic infrastructure necessary to transform creative output into a resilient industry presence. Precision is our primary tool. Radical transparency is our methodology.
          </motion.p>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="font-heading font-bold text-sm uppercase tracking-widest text-structure">Mission</div>
              <p className="text-sm opacity-80">
                To safeguard musician's integrity through professional rigor and clinical precision.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="font-heading font-bold text-sm uppercase tracking-widest text-structure">Vision</div>
              <p className="text-sm opacity-80">
                To eradicate the 'disposable artist' culture by redefining success metrics.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
