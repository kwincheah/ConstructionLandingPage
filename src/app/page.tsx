"use client";

import { useState, useEffect } from "react"; 
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsGallery from "@/components/ProjectsGallery";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  // CS CONCEPT: Side Effects
  // This prevents the background from scrolling when the modal is open
  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showContact]);

  return (
    // 'bg-white dark:bg-slate-950' ensures the background transition 
    // covers the entire page during theme switching.
    <main className="pt-20 bg-white dark:bg-slate-950 transition-colors duration-500 min-h-screen">
      <Navbar onContactClick={() => setShowContact(true)} />
      
      {/* Since you removed the button from the Hero, we pass 'showContact' 
         so the Hero can still react (like showing a badge or changing text).
      */}
      <Hero showContact={showContact} />
      
      <Services />
      
      <ProjectsGallery />
      
      <About />

      <Footer />

      {/* MODAL LAYER */}
      {showContact && (
        <ContactForm onClose={() => setShowContact(false)} />
      )}
    </main>
  );
}