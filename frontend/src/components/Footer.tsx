export default function Footer() {
  return (
    <footer className="w-full border-t border-structure py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center font-sans text-[10px] text-tertiary uppercase tracking-widest relative z-10 bg-primary-light">
      <div className="mb-4 md:mb-0">
        Under The Roof — Independent Music Management Framework
      </div>
      <div className="flex gap-8 items-center">
        <a 
          href="https://x.com/undertheroofutr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary-dark transition-colors"
        >
          X
        </a>
        <a 
          href="https://www.instagram.com/undertheroof_utr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary-dark transition-colors"
        >
          Instagram
        </a>
        <span className="hidden md:inline text-structure/30">|</span>
        <span>Confidential & Proprietary</span>
        <span className="hidden md:inline text-structure/30">|</span>
        <span>2026</span>
      </div>
    </footer>
  );
}
