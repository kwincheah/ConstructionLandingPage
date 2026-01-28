import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND & SLOGAN */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-black text-2xl text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
              Build<span className="text-orange-500">It</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Excellence in construction and modern architectural engineering since 2011.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-orange-500 transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* 3. QUICK CONTACT */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@buildit.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>

          {/* 4. LEGAL/SOCIAL (Placeholder) */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Social</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all cursor-pointer">In</div>
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all cursor-pointer">Fb</div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            © 2026 BuildIt Construction Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}