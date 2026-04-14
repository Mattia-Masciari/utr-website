"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function SKGPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Animated transforms for that "Baby K / Cielo" effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 0.4]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.05]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const images = [
    "/ROSTER - SKG/apr-2022-13.JPG",
    "/ROSTER - SKG/Foto 2.jpg",
    "/ROSTER - SKG/SKG.jpg",
    "/ROSTER - SKG/Screenshot 2026-04-13 alle 18.35.25.png",
    "/ROSTER - SKG/skg-footer-impact.jpg"
  ];

  const videos = [
    { id: "2_sAtRRduJw", title: "SKG - ELEVATE (FT. BRYAN THE MENSAH)" },
    { id: "VqMizmpslLQ", title: "SKG - DREAMERS" },
    { id: "yi3dwvHtfKk", title: "SKG - SO HIGH" },
    { id: "Vg9Do3J6fM4", title: "SKG - More Than Your Laughs" }
  ];

  const labels = [
    "Barong Family (Virgin)",
    "7Clouds (Universal)",
    "Trap Nation",
    "EDM.Com",
    "Hexagon",
    "Champion Records",
    "Sleazy Deep",
    "Flex Up Records",
    "Sony Music"
  ];

  const achievements = [
    {
      category: "International Charting",
      items: [
        "New Music Friday (SPOTIFY EDITORIAL Italy, Spain, South Africa, Portugal)",
        "BREAKING DANCE (APPLE EDITORIAL)",
        "NEW IN DANCE (APPLE EDITORIAL)",
        "Topsify Italy",
        "iTunes #12 - R&B Italy",
        "iTunes Dance Spain #9",
        "iTunes Reggae Canada #11",
        "Shazam #50 (Istanbul)"
      ]
    },
    {
      category: "Radio Plays",
      items: [
        "KISS FM", "NOVA GM", "NRJ Radio", "M2O", "FG", "FLEX FM", "& more"
      ]
    },
    {
      category: "Global Support",
      items: [
        "Samsung", "EDM.com", "Dancing Astronaut", "DJ City",
        "Don Diablo", "Kryder", "Claptone", "Merk & Kremont",
        "Jovani", "Albertino", "& more"
      ]
    },
    {
      category: "Commercial Placement",
      value: "MLB (Walk-up Brewers)"
    }
  ];

  return (
    <div className="flex-1 bg-primary-light selection:bg-primary-dark selection:text-primary-light">

      {/* Interactive Sticky Hero Section */}
      <div ref={containerRef} className="relative h-[300vh] w-full bg-primary-dark">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0"
          >
            <Image
              src="/ROSTER - SKG/apr-2022-13.JPG"
              alt="SKG Background"
              fill
              className="object-cover grayscale object-[center_18%]"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
            <motion.div
              style={{ opacity: logoOpacity, scale: logoScale }}
              className="w-full max-w-4xl mix-blend-screen"
            >
              <Image
                src="/ROSTER - SKG/Logo & Trademark - SKG_Tavola disegno 1.svg"
                alt="SKG Logo Watermark"
                width={800}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-6 md:left-12 z-20">
            <Link href="/roster" className="text-[10px] uppercase tracking-[0.4em] text-primary-light/50 hover:text-primary-light transition-colors">
              — Back to Talent Index
            </Link>
          </div>
        </div>
      </div>

      <main className="relative z-30 bg-primary-light">
        {/* Narrative Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 grid grid-cols-1 lg:grid-cols-2 gap-24 font-sans uppercase">
          <div className="space-y-12">
            <header>
              <div className="text-[10px] uppercase tracking-[0.5em] text-tertiary mb-4">Artist Profile // Technical Specs</div>
              <h2 className="font-heading font-extrabold text-5xl uppercase leading-none tracking-tighter">
                15+ Years of<br />Structural Evolution.
              </h2>
            </header>

            <div className="font-sans text-sm tracking-widest leading-relaxed text-tertiary space-y-6 max-w-xl text-justify text-balance">
              <p>
                SKG represents the core of UTR’s methodology: persistence as an engineered constant. His trajectory serves as a clinical audit in sound refinement and systemic market adaptability.
              </p>
              <p>
                Moving beyond the frantic cycles of the industry, SKG has built a career defined by high-impact placements and technical rigor. His narrative is not one of viral luck, but of structural resilience—treating every release as a precise design specification.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div>
              <div className="font-heading font-bold text-xs uppercase tracking-widest text-primary-dark mb-8 border-b border-structure/20 pb-4">Label Partner Ecosystem</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {labels.map((label) => (
                  <div key={label} className="text-[10px] tracking-[0.2em] border border-structure/10 p-4 hover:bg-primary-dark hover:text-primary-light transition-colors duration-300">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-heading font-bold text-xs uppercase tracking-widest text-primary-dark mb-8 border-b border-structure/20 pb-4">Performance Metrics</div>
              <div className="space-y-10">
                {achievements.map((achievement) => (
                  <div key={achievement.category}>
                    <div className="text-[9px] tracking-[0.4em] text-tertiary mb-4">{achievement.category}</div>
                    {"items" in achievement ? (
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {achievement.items.map((item) => (
                          <div key={item} className="text-[10px] tracking-wider text-primary-dark border-l border-structure/30 pl-3">
                            {item}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[10px] tracking-wider text-primary-dark border-l border-structure/30 pl-3">
                        {achievement.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Archive Section */}
        <section className="bg-primary-dark py-32 border-t border-structure/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <header className="mb-16">
               <div className="text-[10px] uppercase tracking-[0.5em] text-primary-light/30 mb-4">Video Archive // Systemic Documentation</div>
               <h2 className="font-heading font-extrabold text-5xl text-primary-light uppercase tracking-tighter">Visual Audits.</h2>
            </header>

            <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="relative flex-none w-[80vw] md:w-[420px] aspect-video bg-black overflow-hidden border border-primary-light/5 group cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  {activeVideo === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-primary-light/50 flex items-center justify-center bg-primary-dark/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                           <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-primary-light ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="text-[9px] uppercase tracking-widest text-primary-light opacity-50 font-bold max-w-[70%] truncate">{video.title}</div>
                        <div className="text-[9px] text-primary-light/30">[ PLAY ]</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {/* Technical end-spacer for mobile horizontal scroll breathing room */}
              <div className="flex-none w-12 md:hidden"></div>
            </div>
          </div>
        </section>

        {/* Infinite Marquee Section */}
        <section className="py-12 bg-primary-dark border-y border-structure/10 overflow-hidden flex items-center">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap gap-12 text-[8vw] md:text-[6vw] font-heading font-black uppercase text-primary-light select-none"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                SKG <span className="text-structure/40">•</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[...Array(10)].map((_, i) => (
              <span key={i + 10} className="flex items-center gap-12">
                SKG <span className="text-structure/40">•</span>
              </span>
            ))}
          </motion.div>
        </section>

        {/* Visual Archive Documentation */}
        <section className="border-t border-structure/10 bg-primary-dark py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-[10px] uppercase tracking-[0.5em] text-primary-light/30 mb-12">Visual Archive // Industrial Documentation</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src={images[3]}
                  alt="SKG Live/Documentation"
                  fill
                  className="object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="grid grid-rows-2 gap-6">
                <div className="relative overflow-hidden group">
                  <Image
                    src={images[2]}
                    alt="SKG Portrait"
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="relative overflow-hidden group border border-primary-light/10">
                  <Image
                    src={images[4]}
                    alt="SKG Urban Documentation"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Branding */}
        <section className="py-48 flex justify-center items-center relative z-10 bg-primary-light">
          <div className="text-center">
            <div className="font-heading font-extrabold text-[8vw] opacity-[0.03] select-none tracking-tighter text-primary-dark">UTR : SYSTEM MODEL</div>
            <div className="text-[10px] uppercase tracking-[1em] text-tertiary mt-[-2vw]">Structural Resilience</div>
          </div>
        </section>
      </main>
    </div>
  );
}
