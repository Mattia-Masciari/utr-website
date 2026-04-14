"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex-1 relative w-full overflow-x-hidden selection:bg-primary-dark selection:text-primary-light flex flex-col justify-center">


      <div className="relative z-10 w-full max-w-[1400px] mx-auto">

        {/* Section 1: Hero - Pure Branding */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-5xl -mt-32 md:mt-0">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                }
              }}
              className="flex flex-col items-start font-heading font-extrabold text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-tight md:tracking-architectural text-primary-dark leading-none gap-y-[0.02em]"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex items-baseline"
              >
                <span>BEYOND</span>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex items-baseline"
              >
                <span>THE</span>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex items-baseline relative"
              >
                <span>POINT</span>
                {/* Mobile Dot: Compact jump for adjacent visibility */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, scale: 0, filter: "blur(10px)" },
                    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6 } }
                  }}
                  animate={{
                    y: [0, -20, -150, -160, -150, -20, 0],
                    scaleX: [1.7, 0.6, 1.0, 1.25, 1.0, 0.4, 1.7],
                    scaleY: [0.3, 2.0, 1.0, 0.8, 1.0, 2.5, 0.3],
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 1.0,
                    repeat: Infinity,
                    times: [0, 0.1, 0.35, 0.5, 0.65, 0.95, 1],
                    ease: ["easeOut", "easeOut", "easeInOut", "easeInOut", "easeIn", "easeIn"]
                  }}
                  className="absolute left-full ml-36 md:hidden bottom-0 origin-bottom outline-none will-change-transform text-[1.2em] leading-none"
                >
                  .
                </motion.span>

                {/* Desktop Dot: Original architectural monumental jump */}
                <motion.span
                  style={{ x: 280 }}
                  variants={{
                    hidden: { opacity: 0, scale: 0, filter: "blur(10px)" },
                    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6 } }
                  }}
                  animate={{
                    y: [0, -20, -300, -320, -300, -20, 0],
                    scaleX: [1.7, 0.6, 1.0, 1.25, 1.0, 0.4, 1.7],
                    scaleY: [0.3, 2.0, 1.0, 0.8, 1.0, 2.5, 0.3],
                  }}
                  transition={{
                    delay: 1.5,
                    duration: 1.0,
                    repeat: Infinity,
                    times: [0, 0.1, 0.35, 0.5, 0.65, 0.95, 1],
                    ease: ["easeOut", "easeOut", "easeInOut", "easeInOut", "easeIn", "easeIn"]
                  }}
                  className="absolute left-full hidden md:block md:ml-32 lg:ml-48 bottom-0 origin-bottom outline-none will-change-transform text-[1.5em] leading-none"
                >
                  .
                </motion.span>
              </motion.div>
            </motion.h1>
          </div>
        </section>

        {/* Section 2: Manifesto/Description - Below the Fold */}
        <section className="px-6 md:px-12 py-32 border-t border-structure">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(15px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
              }}
            >
              <p className="font-sans text-primary-dark text-lg md:text-xl font-medium leading-relaxed">
                The rational interface between artistic talent and the music market.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(15px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
              }}
            >
              <p className="font-sans text-tertiary text-base leading-relaxed">
                We operate as a fully codified system: providing the technical, legal, and strategic infrastructure that transforms raw creative output into a resilient, long-term industry presence.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>

    </div>
  );
}
