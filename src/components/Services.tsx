const services = [
  { 
    title: "Residential Building", 
    desc: "We specialize in custom modern homes and high-end structural renovations designed for longevity.", 
    icon: "🏠" 
  },
  { 
    title: "Commercial Projects", 
    desc: "From sleek office builds to retail spaces, we deliver professional environments for your business.", 
    icon: "🏗️" 
  },
  { 
    title: "Site Planning", 
    desc: "Our expert consultation and structural planning ensure your project starts on a perfect foundation.", 
    icon: "📐" 
  },
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="bg-slate-50 dark:bg-slate-900 py-24 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 italic tracking-tight">
            Our Expertise
          </h2>
          <div className="h-1 w-12 bg-orange-500 mx-auto"></div>
        </div>

        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon with subtle background */}
              <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span className="text-3xl">{item.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}