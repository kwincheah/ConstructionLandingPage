import Image from "next/image"; // <--- Import this
import { Phone, Mail, ShieldCheck, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* 1. THE VISUAL SIDE */}
        <div className="w-full lg:w-1/2 relative">
          {/* We need a 'relative' container with a height for 'fill' to work */}
          <div className="relative h-[650px] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" 
              alt="Modern Office Building" 
              fill // <--- Makes the image fill the container
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw" // Helps browser choose the right size
              priority // Tells Next.js to load this quickly
            />
            
            {/* Badge */}
            <div className="absolute top-10 right-10 backdrop-blur-xl p-6 rounded-3xl border transition-all z-10
              bg-white/70 border-slate-200 text-slate-900 
              dark:bg-white/10 dark:border-white/20 dark:text-white">
              <p className="text-5xl font-black tracking-tighter">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Years of Quality</p>
            </div>
          </div>
        </div>

        {/* ... Rest of your code stays the same ... */}
      </div>
    </section>
  );
}