import Image from 'next/image';

interface HeroProps {
  showContact: boolean;
}

export default function Hero({ showContact }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden px-6 transition-colors duration-500">
      
      {/* 1. BACKGROUND IMAGE OPTIMIZATION */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
          alt="Modern Architecture"
          fill
          priority // CRITICAL: This tells Next.js to load this image first (fixes LCP)
          className="object-cover opacity-10 dark:opacity-20 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/50 dark:to-slate-950" />
      </div>

      <div className="max-w-5xl text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
          Est. 2011 • Quality Guaranteed
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-slate-900 dark:text-white">
          Building <br />
          <span className="text-orange-500">Excellence.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Bespoke construction and structural engineering. <br className="hidden md:block" />
          Where modern design meets master craftsmanship.
        </p>
      </div>
    </section>
  );
}