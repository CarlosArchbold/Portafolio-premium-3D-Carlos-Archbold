import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO Y NOMBRE CON ACCIÓN PARA VOLVER AL INICIO */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-105">
            <span className="text-accent">C</span>A
          </div>
          <span className="font-bold text-white tracking-widest text-sm md:text-base transition-colors duration-300 group-hover:text-cyan-400">
            CARLOS ARCHBOLD
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-accent transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a>
          <a href="#experiencia" className="hover:text-accent transition-colors">Experiencia</a>
          <a href="#contacto" className="px-4 py-2 bg-white text-space-900 rounded-full hover:bg-accent hover:text-white transition-all">
            Contacto
          </a>
        </div>

        {/* Mobile menu button (placeholder) */}
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;