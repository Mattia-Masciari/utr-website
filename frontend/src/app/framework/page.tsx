"use client";

import { motion } from "framer-motion";

export default function Framework() {
  return (
    <div className="flex-1 relative w-full overflow-hidden p-6 md:p-12">
      <div className="relative z-10 max-w-6xl mx-auto py-20">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-architectural mb-12 border-b border-structure pb-8">
          The Framework
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Diagnostic */}
          <div className="border border-structure p-8 flex flex-col gap-6 bg-primary-light group">
            <div className="font-heading font-bold text-xl uppercase tracking-widest">SYSTEMIC DIAGNOSTIC</div>
            <p className="font-sans text-tertiary text-sm leading-relaxed">
              We execute a clinical audit of the origin point. This phase identifies structural vulnerabilities in contractual exposure and analyzes artistic burnout as a design flaw, not a personal weakness. We define the baseline for technical and mental sustainability.
            </p>
            <div className="h-40 border-t border-structure mt-auto flex items-center justify-center relative overflow-hidden group-hover:bg-primary-dark/[0.02] transition-colors">
              {/* Diagnostic Tracking / Crosshairs */}
              <motion.div 
                className="absolute w-[1px] h-[150%] bg-primary-dark/10"
                animate={{ x: [-80, 80, -80] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute w-[150%] h-[1px] bg-primary-dark/10"
                animate={{ y: [-40, 40, -40] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.span
                className="absolute inline-block text-primary-dark font-extrabold text-[2em] leading-none z-50 pointer-events-none"
                animate={{
                  x: [-60, 60, -60],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            </div>
          </div>
          
          {/* Card 2: Scaffolding */}
          <div className="border border-structure p-8 flex flex-col gap-6 bg-primary-light group">
            <div className="font-heading font-bold text-xl uppercase tracking-widest">STRUCTURAL SCAFFOLDING</div>
            <p className="font-sans text-tertiary text-sm leading-relaxed">
              Deployment of the technical and legal architecture. We implement a protective shell—The Roof—to isolate the asset from industry opacity and systemic volatility. This framework provides the professional scaffolding necessary for independent operation without institutional support.
            </p>
            <div className="h-40 border-t border-structure mt-auto flex items-center justify-center relative overflow-hidden group-hover:bg-primary-dark/[0.02] transition-colors">
               
              {/* The Protective Roof */}
              <motion.div
                className="absolute top-[38%] w-16 h-[2px] bg-primary-dark z-20"
                animate={{ width: ["0px", "64px", "64px", "0px"] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
              />

               <motion.span
                className="absolute inline-block text-primary-dark font-extrabold text-[2.5em] leading-none z-50 pointer-events-none"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                .
              </motion.span>
              
              {/* Structural Left Pillar */}
              <motion.div
                className="absolute top-[38%] left-[calc(50%-32px)] w-[1px] bg-primary-dark/10 origin-top"
                animate={{ height: ["0px", "50px", "50px", "0px"] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
              />
              
              {/* Structural Right Pillar */}
              <motion.div
                className="absolute top-[38%] right-[calc(50%-32px)] w-[1px] bg-primary-dark/10 origin-top"
                animate={{ height: ["0px", "50px", "50px", "0px"] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Card 3: Resilience */}
          <div className="border border-structure p-8 flex flex-col gap-6 bg-primary-light group">
            <div className="font-heading font-bold text-xl uppercase tracking-widest">INDUSTRIAL RESILIENCE</div>
            <p className="font-sans text-tertiary text-sm leading-relaxed">
              Transforming creative output into a persistent market presence. We engineer career longevity through radical data transparency and royalty engine optimization. Longevity is measured in decades of human and financial sustainability, moving beyond fleeting data points.
            </p>
            <div className="h-40 border-t border-structure mt-auto flex items-center justify-center relative overflow-hidden group-hover:bg-primary-dark/[0.02] transition-colors">
              <motion.span
                className="absolute inline-block text-primary-dark font-extrabold text-[2.5em] leading-none z-50 pointer-events-none"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
              {/* Expanding persistence rings */}
               <motion.div 
                 className="absolute inset-0 m-auto w-[2em] h-[2em] rounded-full border-[1.5px] border-primary-dark/40 pointer-events-none"
                 animate={{ scale: [1, 3], opacity: [1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
               />
               <motion.div 
                 className="absolute inset-0 m-auto w-[2em] h-[2em] rounded-full border-[1px] border-primary-dark/20 pointer-events-none"
                 animate={{ scale: [1, 3], opacity: [1, 0] }}
                 transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }}
               />
            </div>
          </div>
        </div>

        <div className="bg-primary-dark text-primary-light p-12 md:p-20">
          <div className="max-w-2xl">
            <div className="font-heading font-bold text-2xl uppercase tracking-architectural mb-8">DECOUPLING TALENT FROM VOLATILITY</div>
            <p className="font-sans text-lg opacity-80 leading-relaxed italic">
              "Raw talent is the variable. UTR is the constant. We provide the technical architecture to decouple artistic integrity from market instability. Persistence is engineered, not hoped for."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
