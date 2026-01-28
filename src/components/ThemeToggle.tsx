"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Import the industry-standard icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 border border-slate-200 dark:border-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
      aria-label="Toggle Dark Mode"
    >
      {/* CS CONCEPT: Conditional Icon Rendering
         We check the 'theme' state and render the appropriate Lucide component.
      */}
      {theme === "dark" ? (
        <Moon className="w-5 h-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0" />
      )}
      
      {/* Subtle Tooltip for UX */}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Switch to {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}