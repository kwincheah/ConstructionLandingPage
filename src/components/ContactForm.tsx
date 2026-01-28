"use client";

import { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  // Logic States: 'idle' | 'loading' | 'success'
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    // Replace 'your_id_here' with your actual Formspree ID
    const response = await fetch("https://formspree.io/f/your_id_here", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* 1. THE BACKDROP */}
      <div 
        className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={onClose}
      />

      {/* 2. THE DIALOG BOX */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        
        {/* Close Button (Always visible) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10">
          {status === "success" ? (
            /* SUCCESS STATE */
            <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-3">
                Message Sent.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Thank you for reaching out. Our team will review your project details and get back to you shortly.
              </p>
              <button 
                onClick={onClose}
                className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-8 py-3 rounded-full font-bold transition-transform active:scale-95"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                  Let's <span className="text-orange-500">Build.</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Fill out the details below to start your inquiry.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-orange-500 dark:text-white transition-all outline-none" placeholder="John Doe" />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 ml-1">Email</label>
                  <input type="email" name="email" required className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-orange-500 dark:text-white transition-all outline-none" placeholder="john@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 ml-1">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-orange-500 dark:text-white transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
                </div>

                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full bg-slate-900 dark:bg-orange-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl hover:shadow-orange-500/20 active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}