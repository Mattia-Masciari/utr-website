"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const artists = [
  {
    id: "skg",
    name: "SKG",
    role: "Electronic Music Architect",
    logo: "/ROSTER - SKG/Logo & Trademark - SKG-03.svg",
    image: "/ROSTER - SKG/SKG.jpg",
    summary: "15+ years of clinical sonic evolution. From the underground clubs of Italy to the stages of MLB and Global Labels.",
  }
];

export default function RosterPage() {
  return (
    <div className="flex-1 bg-primary-light selection:bg-primary-dark selection:text-primary-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header Section */}
        <header className="mb-24 border-l-2 border-primary-dark pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.5em] text-tertiary mb-4"
          >
            Operational Framework // Talent Index
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-extrabold text-6xl md:text-8xl uppercase tracking-tighter leading-none"
          >
            The Roster.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 font-sans text-sm md:text-base text-tertiary max-w-xl leading-relaxed"
          >
            UTR functions as the technical architecture behind resilient talent. We do not manage careers; we structure them for decades of sustainability.
          </motion.p>
        </header>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-structure/20 border border-structure/20">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group relative bg-primary-light overflow-hidden aspect-[4/5] flex flex-col pt-12"
            >
              <Link href={`/roster/${artist.id}`} className="block h-full w-full">
                {/* Logo Area */}
                <div className="px-12 mb-12 flex justify-center h-24 relative z-10">
                  <Image
                    src={artist.logo}
                    alt={`${artist.name} Logo`}
                    width={180}
                    height={80}
                    className="w-auto h-full object-contain grayscale"
                  />
                </div>

                {/* Info Overlay (appears on hover) */}
                <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-primary-light z-20">
                  <div className="font-heading font-bold text-2xl uppercase mb-2">{artist.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-structure mb-6 font-medium">{artist.role}</div>
                  <p className="text-xs leading-relaxed opacity-80 mb-8">
                    {artist.summary}
                  </p>
                  <div className="h-px w-full bg-primary-light/20 mb-8"></div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold">View Architecture →</div>
                </div>

                {/* Background Image (subtle) */}
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Border line */}
                <div className="absolute top-0 right-0 w-px h-0 bg-primary-dark group-hover:h-full transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary-dark group-hover:w-full transition-all duration-700"></div>
              </Link>
            </motion.div>
          ))}

          {/* Empty Placeholder Slot (to maintain the grid feel) */}
          <div className="hidden md:flex bg-primary-light/50 items-center justify-center p-12 border border-dashed border-structure/20 aspect-[4/5]">
            <div className="text-[10px] uppercase tracking-widest text-structure text-center">
              [ Slot Pending Assignment ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
