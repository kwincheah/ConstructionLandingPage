"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Ensure these are imported!
import { useTheme } from "next-themes";

export default function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-black text-2xl tracking-tighter uppercase text-slate-900 dark:text-white">
          Build<span className="text-orange-500">It</span>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-bold dark:text-slate-300">Services</a>
          <a href="#projects" className="text-sm font-bold dark:text-slate-300">Projects</a>
          <a href="#about" className="text-sm font-bold dark:text-slate-300">About</a>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 dark:text-white">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={onContactClick} className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold">
            Contact
          </button>
        </div>

        {/* --- MOBILE TOGGLE (THE HAMBURGER) --- */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="p-2 text-slate-900 dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* We use a button with a clear background and explicit width/height */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white relative z-[110]"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isOpen ? (
              <X style={{ width: '32px', height: '32px' }} strokeWidth={2.5} />
            ) : (
              <Menu style={{ width: '32px', height: '32px' }} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`
        fixed inset-0 bg-white dark:bg-slate-950 z-[105] md:hidden transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-3xl font-black dark:text-white">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-3xl font-black dark:text-white">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-black dark:text-white">About</a>
          <button 
            onClick={() => { onContactClick(); setIsOpen(false); }}
            className="bg-orange-500 text-white px-10 py-4 rounded-full font-black text-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}