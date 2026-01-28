import { Phone, Mail, ShieldCheck, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* 1. THE VISUAL SIDE */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 shadow-2xl">
            {/* FIXED IMAGE URL */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" 
              alt="Modern Office Building" 
              className="w-full h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* FIXED BADGE CONTRAST */}
            <div className="absolute top-10 right-10 backdrop-blur-xl p-6 rounded-3xl border transition-all
              bg-white/70 border-slate-200 text-slate-900 
              dark:bg-white/10 dark:border-white/20 dark:text-white">
              <p className="text-5xl font-black tracking-tighter">15+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Years of Quality</p>
            </div>
          </div>
        </div>

        {/* 2. THE CONTENT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest">
            <Award className="w-3 h-3" /> Our Heritage
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.95]">
            We Build for the <br /> 
            <span className="text-orange-500 italic">Next Generation.</span>
          </h2>

          <div className="space-y-6 text-slate-500 dark:text-slate-400 font-light text-lg mb-12">
            <p>
              BuildIt was founded on a simple premise: **Precision matters.** We believe that every structural beam and glass pane should be placed with intent.
            </p>
          </div>

          {/* VALUES SUB-GRID */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <ShieldCheck className="w-6 h-6 text-orange-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Safety First</h4>
                <p className="text-xs text-slate-400">Zero-compromise site standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-orange-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Efficiency</h4>
                <p className="text-xs text-slate-400">Optimized timelines.</p>
              </div>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <a href="tel:+15550123456" className="group flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Call</p>
                <p className="font-bold text-slate-900 dark:text-white">+1 (555) 012-3456</p>
              </div>
            </a>
            
            <a href="mailto:hello@buildit.com" className="group flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Email</p>
                <p className="font-bold text-slate-900 dark:text-white">hello@buildit.com</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}