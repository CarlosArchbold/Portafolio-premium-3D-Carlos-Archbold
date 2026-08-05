import React, { useState } from 'react';
const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/assets/carlos-normal.png');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold tracking-wider uppercase">
            Desarrollador de Software
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Carlos Archbold</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Especializado en construir experiencias digitales excepcionales, desde infraestructuras robustas hasta interfaces intuitivas y modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#proyectos" className="w-full sm:w-auto px-8 py-3 bg-white text-space-900 font-semibold rounded-xl hover:bg-accent hover:text-white transition-all shadow-lg shadow-white/5">
              Ver Proyectos
            </a>
            <a href="#cv" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all">
              Descargar CV
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          {/* Profile image container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-3xl rotate-6 opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-space-800 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              <img 
                src={imageSrc} 
                alt="Profile"
                className="w-full h-full object-cover"
                onMouseEnter={() => setImageSrc('/assets/carlos-terminator.png')}
                onMouseLeave={() => setImageSrc('/assets/carlos-normal.png')}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;