"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/framework", label: "Framework" },
    { href: "/journal", label: "Journal" },
    { href: "/roster", label: "Roster" },
    { href: "/manifesto", label: "Manifesto" },
  ];

  return (
    <>
      <nav className="w-full h-16 px-6 md:px-12 flex justify-between items-center bg-primary-light/80 backdrop-blur-md border-b border-structure sticky top-0 z-[60]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/UTR_LOGO_01.svg"
            alt="UTR Logo"
            width={64}
            height={64}
            priority
            className="w-12 h-12"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex font-sans text-[10px] tracking-[0.2em] text-tertiary uppercase items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary-dark transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center min-w-[80px] h-9 px-4 border border-primary-dark/10 rounded-sm font-heading font-bold text-[10px] tracking-widest uppercase text-primary-dark hover:bg-primary-dark hover:text-primary-light active:scale-95 transition-all"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 bg-primary-light flex flex-col pt-32 px-12"
          >
            <div className="flex flex-col gap-12">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="font-heading font-extrabold text-5xl uppercase tracking-tighter text-primary-dark hover:text-structure transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto mb-12 border-t border-structure pt-8">
              <div className="text-[10px] uppercase tracking-[1em] text-structure/40">UTR : SYSTEM MODEL</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
