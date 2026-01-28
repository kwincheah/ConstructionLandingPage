import Image from "next/image";

const projects = [
  { 
    title: "Glass House", 
    location: "Malibu, CA", 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
  },
  { 
    title: "Modern Loft", 
    location: "Brooklyn, NY", 
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800" 
  },
  { 
    title: "Urban Pavilion", 
    location: "Seattle, WA", 
    img: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169"
  },
];

export default function ProjectsGallery() {
  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter">
            Featured Work
          </h2>
          <div className="h-1.5 w-20 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="group relative h-[450px] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <Image 
                src={p.img} 
                alt={p.title} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />

              {/* MODIFIED OVERLAY: Visible on mobile, hover only on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent 
                opacity-100 md:opacity-0 md:group-hover:opacity-100 
                transition-all duration-500 flex flex-col justify-end p-8 z-10"
              >
                <h3 className="text-white text-2xl font-bold 
                  translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 
                  transition-transform duration-500"
                >
                  {p.title}
                </h3>
                <p className="text-orange-400 font-medium 
                  translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 
                  transition-transform duration-500 delay-75"
                >
                  {p.location}
                </p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl border border-black/5 dark:border-white/5 pointer-events-none z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}