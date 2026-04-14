export default function Journal() {
  return (
    <div className="flex-1 relative w-full overflow-hidden p-6 md:p-12">
      <div className="relative z-10 max-w-4xl mx-auto py-20">
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl uppercase tracking-architectural mb-16">
          Diagnostic<br />Archive
        </h1>

        <div className="space-y-12 mb-20">
          <a href="https://undertheroofutr.substack.com/p/skg-esskeyg-years-of-electronic-music" target="_blank" rel="noopener noreferrer" className="group border-b border-structure pb-12 cursor-pointer block">
            <div className="flex justify-between items-baseline mb-4">
              <div className="text-tertiary font-mono text-[10px] uppercase">April 2026</div>
              <div className="text-[10px] bg-secondary text-primary-light px-2 py-1 uppercase tracking-widest">Introduction</div>
            </div>
            <h2 className="font-heading font-bold text-2xl uppercase tracking-widest group-hover:pl-4 transition-all">Under The Roof — UTR</h2>
            <p className="font-sans text-tertiary mt-4 max-w-2xl leading-relaxed">
              If you’ve heard the name SKG on a playlist, a radio station, or inside a stadium — and found yourself searching for who’s behind it — you’ve arrived at the right place.
            </p>
          </a>

          <div className="group border-b border-structure pb-12 cursor-pointer opacity-50">
            <div className="flex justify-baseline items-baseline mb-4 gap-4">
              <div className="text-tertiary font-mono text-[10px] uppercase">Upcoming</div>
            </div>
            <h2 className="font-heading font-bold text-2xl uppercase tracking-widest">The Fine Print: Sync Rights</h2>
            <p className="font-sans text-tertiary mt-4 max-w-2xl leading-relaxed italic">
              Status: Clinical Analysis in Progress.
            </p>
          </div>
        </div>

        <div className="border border-secondary p-12 text-center flex flex-col items-center gap-8">
          <div className="font-heading font-bold text-xl uppercase tracking-widest">Beyond the surface coverage.</div>
          <p className="font-sans text-sm max-w-md text-tertiary leading-relaxed">
            Deep dives, case studies, and structural solutions for the independent architect.
          </p>
          <a href="https://undertheroofutr.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-dark text-primary-light px-10 py-4 font-heading font-bold text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
            Subscribe to Substack
          </a>
        </div>
      </div>
    </div>
  );
}
