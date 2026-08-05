import React, { useState } from 'react';
import BackgroundSequence from './components/BackgroundSequence';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

function ProfilePhotoCard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div 
      className="relative cursor-pointer flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Contenedor de la Imagen */}
<div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] overflow-visible flex items-center justify-center">
  
  {/* Imagen Normal (Fondo base con mix-blend para aislar la silueta) */}
  <img 
                  src="/assets/carlos-normal.png" 
                  alt="Carlos Archbold" 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}/>
  {/* Imagen Terminator (Aumentada: Más nítida, más brillante, más grande y con resplandor) */}
  <img 
    src="/assets/carlos-terminator.png" 
    alt="Carlos Archbold - Terminator Style" 
    className="absolute inset-0 w-full h-full object-cover filter contrast-200 saturate-110"
    style={{
      mixBlendMode: 'screen',
      opacity: isHovered ? 1 : 0,
      // Aumenté el círculo de 140px a 220px para que abarque más área
      WebkitMaskImage: isHovered ? `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, black 0% 70%, transparent 110%)` : 'none',
      maskImage: isHovered ? `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, black 0% 80%, transparent 100%)` : 'none',
    }}
  />
</div>
    </div>
  );
}

function PortfolioContent() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
    
      {/* Fondo de secuencia de imágenes */}
      <BackgroundSequence />

      {/* NAVBAR SUPERIOR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-5 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div 
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
       className="flex items-center gap-3 cursor-pointer group"
       >
       <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 font-extrabold text-sm tracking-wider text-black transition-transform duration-300 group-hover:scale-105">
       CA
       </div>
       <span className="font-bold tracking-widest text-xs sm:text-sm bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-400 drop-shadow-md transition-opacity duration-300 group-hover:opacity-80">
       CARLOS ARCHBOLD
       </span>
       </div>


        {/* MENÚ FLOTANTE EN CÁPSULA TRANSLÚCIDA */}
        <nav className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-xs font-semibold tracking-wider uppercase text-gray-200 shadow-2xl shadow-cyan-950/40">
          <a href="#about" className="hover:text-cyan-400 transition-all hover:scale-105 drop-shadow">{t('navProfile')}</a>
          <a href="#experience" className="hover:text-cyan-400 transition-all hover:scale-105 drop-shadow">{t('navExperience')}</a>
          <a href="#projects" className="hover:text-cyan-400 transition-all hover:scale-105 drop-shadow">{t('navProjects')}</a>
          <a href="#skills" className="hover:text-cyan-400 transition-all hover:scale-105 drop-shadow">{t('navSkills')}</a>
          <a href="#education" className="hover:text-cyan-400 transition-all hover:scale-105 drop-shadow">{t('navEducation')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
          >
            🌐 {lang === 'es' ? 'EN' : 'ES'}
          </button>
          
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black transition-all shadow-lg shadow-cyan-500/25"
          >
            {t('navContact')}
          </a>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex flex-col items-center px-4 pt-10 pb-10 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="my-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center text-left">
            
            {/* TEXTO A LA IZQUIERDA */}
            <div className="lg:col-span-6 flex flex-col items-start w-full relative z-20 p-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs tracking-widest mb-6 uppercase shadow-inner">
                {t('heroBadge')}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-amber-300 drop-shadow-[0_0_35px_rgba(251,191,36,0.8)] hover:bg-gradient-to-r hover:from-cyan-300 hover:via-purple-300 hover:to-white hover:drop-shadow-[0_0_50px_rgba(6,182,212,0.95)] transition-all duration-500 cursor-pointer">
                Carlos Archbold
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed font-light drop-shadow">
                {t('heroDesc')}
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full font-bold bg-white text-black hover:bg-gray-100 transition-all shadow-2xl shadow-white/20 flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                >
                  🚀 {t('exploreSystems')}
                </a>
                <a
                  href="#experience"
                  className="px-8 py-4 rounded-full font-bold bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all shadow-xl flex items-center justify-center text-sm w-full sm:w-auto text-white"
                >
                  ⚡ {t('securitySpecs')}
                </a>
              </div>
            </div>

            {/* FOTO A LA DERECHA */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative z-10">
              <ProfilePhotoCard />
            </div>

          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-3 gap-6 mt-16 p-6 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 w-full shadow-2xl backdrop-blur-md">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">1 Año</div>
              <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Exp. Software</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-400">15+</div>
              <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-pink-400">100%</div>
              <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Uptime Monitoreo</div>
            </div>
          </div>
        </section>

        {/* SECCIÓN SOBRE MÍ */}
       <section id="about" className="w-full scroll-mt-28 my-12 p-10 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="w-full">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl p-1.5 bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-2xl shrink-0 overflow-hidden">
                <img 
                  src="/assets/carlos-normal.png" 
                  alt="Carlos Archbold" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-extrabold mb-4 text-cyan-300">{t('aboutTitle')}</h2>
                <div className="text-gray-200 text-sm md:text-base leading-relaxed space-y-3 font-light">
                  <p>
                    Desarrollador Web y Analista de Software con sólida formación técnica y experiencia comprobada en la creación, optimización y mantenimiento de aplicaciones robustas.
                  </p>
                  <p>
                    Especializado en el diseño de soluciones backend y frontend, automatización de procesos de auditoría interna y monitoreo de datos en tiempo real mediante Python y SQL Server.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-xs text-gray-200">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">📍 Barranquilla, Colombia</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">✉️ archbold1991@hotmail.com</span>
                </div>
              </div>
            </div>
          </motion.div></section>
        <section id="experience" className="w-full my-16">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs tracking-widest uppercase font-semibold">01 // Trayectoria Profesional</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{t('experienceTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Desarrollador Junior / Analista de Datos</h3>
                  <p className="text-cyan-400 font-semibold text-sm">PROCAPS S.A.</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  May. 2025 - May. 2026 | Barranquilla
                </span>
              </div>
              <div className="text-sm text-gray-200 space-y-2 font-light leading-relaxed mb-6">
                <p>• Diseñé, desarrollé y ejecuté un sistema automatizado avanzado utilizando Python y SQL Server para el monitoreo de tablas de datos críticas B2B e integridad estructural en tiempo real.</p>
                <p>• Implementé flujos de control y módulos dinámicos en la plataforma Scriptcase para optimizar y agilizar los procesos de auditoría interna de la compañía.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">Python</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">SQL Server</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">Scriptcase</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Sales Development Representative (SDR)</h3>
                  <p className="text-purple-400 font-semibold text-sm">ZETRA IT SOLVO S.A.S.</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  Nov. 2024 - May. 2025 | Barranquilla
                </span>
              </div>
              <div className="text-sm text-gray-200 space-y-2 font-light leading-relaxed mb-6">
                <p>• Gestioné la prospección, cualificación y ventas de servicios y soluciones informáticas especializadas (IT) enfocadas en el mercado europeo (Campaña España).</p>
                <p>• Estructuré seguimientos comerciales estratégicos y brindé atención telefónica de alto nivel orientada al cumplimiento estricto de metas operativas.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">CRM</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">SAP</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">Siebel</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Asesor Comercial y Corporativo</h3>
                  <p className="text-pink-400 font-semibold text-sm">SISTEMAS Y COMPUTADORES S.A.</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-300">
                  Ene. 2015 - Jul. 2015 | Barranquilla
                </span>
              </div>
              <div className="text-sm text-gray-200 space-y-2 font-light leading-relaxed mb-6">
                <p>• Diseñé y propuse alternativas de valor tecnológico a clientes corporativos mediante la formulación de presupuestos y políticas ajustadas al negocio.</p>
                <p>• Coordiné visitas técnicas y comerciales presenciales para el levantamiento de requerimientos y despliegue del servicio.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">Consultoría TI</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-gray-200 border border-white/15">Sinco</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN PROYECTOS DESTACADOS */}
        <section id="projects" className="w-full my-16">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-xs tracking-widest uppercase font-semibold">02 // Innovación & Código</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{t('projectsTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🏢 Moblarch Platform</h3>
                <p className="text-sm text-gray-200 font-light leading-relaxed mb-6">
                  Estructuración y desarrollo de una plataforma web multipágina interactiva orientada al sector arquitectónico y gestión de mobiliario comercial, implementando Vite, Tailwind CSS y Framer Motion.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-cyan-300 border border-white/15">Vite</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-purple-300 border border-white/15">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-pink-300 border border-white/15">Framer Motion</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">📊 Sistema Integrado B2B (Procaps)</h3>
                <p className="text-sm text-gray-200 font-light leading-relaxed mb-6">
                  Desarrollo de una solución web robusta en Scriptcase interconectada con SQL Server para el control y la visualización del estado transaccional de estructuras de bases de datos empresariales.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-cyan-300 border border-white/15">Scriptcase</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-purple-300 border border-white/15">SQL Server</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-pink-300 border border-white/15">Python</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">⚡ Alertas y Correos (Procaps)</h3>
                <p className="text-sm text-gray-200 font-light leading-relaxed mb-6">
                  Implementación de un sistema de notificaciones asíncronas en Python y SQL Server que audita la integridad de tablas críticas y gestiona el envío automatizado de reportes e incidencias por correo electrónico.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-cyan-300 border border-white/15">Python</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-purple-300 border border-white/15">SQL Server</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-pink-300 border border-white/15">SMTP API</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🎨 AuraEdit AI</h3>
                <p className="text-sm text-gray-200 font-light leading-relaxed mb-6">
                  Diseño conceptual, estructuración de entorno local y arquitectura base para una aplicación de edición fotográfica avanzada multiplataforma empleando el framework Flutter.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/15">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-cyan-300 border border-white/15">Flutter</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-purple-300 border border-white/15">Dart</span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-pink-300 border border-white/15">UI/UX</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN HABILIDADES TÉCNICAS ACTUALIZADA CON LOGOS ORIGINALES Y HOVER */}
        <section id="skills" className="w-full my-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs tracking-widest uppercase font-semibold">03 // Stack Tecnológico</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{t('skillsTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Backend & Automatización */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-cyan-400 font-bold mb-5 text-sm flex items-center gap-2">💻 Backend & Automatización</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* Python */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#3776AB]/20 border border-[#3776AB]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#3776AB]/40 hover:shadow-lg hover:shadow-[#3776AB]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#3776AB" d="M11.918 2c-3.134 0-2.983 1.365-2.983 1.365v1.405h5.966v.702H8.847S6 5.09 6 8.358c0 3.268 2.76 3.167 2.76 3.167h1.693V10.37s-.08-1.405 1.365-1.405h3.146s1.385.08 1.385 1.385v3.146s0 1.365-1.385 1.365H11.53s-3.187.141-3.187 3.167c0 3.026 2.943 3.026 2.943 3.026h3.187v-1.405s.161-1.385-1.385-1.385h-3.146s-1.365-.06-1.365-1.365v-1.405h4.81s3.146.161 3.146-3.167C17.75 6.224 14.93 6.224 14.93 6.224V4.938S15.051 2 11.918 2zM9.456 4.412a.702.702 0 1 1 0 1.405.702.702 0 0 1 0-1.405z"/>
                    <path fill="#FFD43B" d="M12.082 22c3.134 0 2.983-1.365 2.983-1.365v-1.405H9.099v-.702h3.054s2.847.44 2.847-2.828c0-3.268-2.76-3.167-2.76-3.167H10.54v1.155s.08 1.405-1.365 1.405H6.029s-1.385-.08-1.385-1.385V9.456s0-1.365 1.385-1.365h3.442s3.187-.141 3.187-3.167c0-3.026-2.943-3.026-2.943-3.026H6.526v1.405s-.161 1.385 1.385 1.385h3.146s1.365.06 1.365 1.365v1.405H7.612s-3.146-.161-3.146 3.167c0 3.268 2.82 3.268 2.82 3.268z"/>
                    <circle fill="#FFD43B" cx="9.1" cy="5.1" r=".7"/>
                    <circle fill="#3776AB" cx="14.9" cy="18.9" r=".7"/>
                  </svg>
                  <span>Python</span>
                </div>

                {/* PHP */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#777BB4]/20 border border-[#777BB4]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#777BB4]/40 hover:shadow-lg hover:shadow-[#777BB4]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#777BB4" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.818c-5.418 0-9.818-4.4-9.818-9.818S6.582 2.182 12 2.182s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z"/>
                    <path fill="#777BB4" d="M7.4 12.87h1.42v-1.74H7.4v1.74zm2.84 0h1.42v-1.74h-1.42v1.74zm2.84 0h1.42v-1.74h-1.42v1.74zm2.84 0h1.42v-1.74h-1.42v1.74z"/>
                  </svg>
                  <span>PHP</span>
                </div>

                {/* SQL Server */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#CC2927]/20 border border-[#CC2927]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#CC2927]/40 hover:shadow-lg hover:shadow-[#CC2927]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#CC2927" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.78L9 15.5v1c0 .55.45 1 1 1v2.43zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-2c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span>SQL Server</span>
                </div>

                {/* Scriptcase */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1D3557]/40 border border-cyan-500/30 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer">
                  <span className="text-cyan-400">⚙️</span>
                  <span>Scriptcase</span>
                </div>

              </div>
            </div>

            {/* 2. Frontend & Frameworks */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-purple-400 font-bold mb-5 text-sm flex items-center gap-2">🎨 Frontend & Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* JavaScript */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F7DF1E]/20 border border-[#F7DF1E]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#F7DF1E]/40 hover:shadow-lg hover:shadow-[#F7DF1E]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#F7DF1E" d="M2 2h20v20H2V2zm18.3 16.965c.54-.33 1.002-.75 1.344-1.23l-1.32-1.008c-.28.38-.61.7-1.02.94-.41.24-.87.36-1.38.36-.67 0-1.21-.17-1.62-.51-.41-.34-.62-.82-.62-1.44 0-.66.23-1.19.69-1.59.46-.4 1.1-.65 1.92-.75l.9-.12c1.23-.15 2.22-.52 2.97-1.11.75-.59 1.13-1.43 1.13-2.52 0-1.14-.46-2.07-1.38-2.79-.92-.72-2.17-1.08-3.75-1.08-1.29 0-2.42.27-3.39.81-.97.54-1.7 1.3-2.19 2.28l1.32.96c.39-.75.97-1.34 1.74-1.77.77-.43 1.63-.65 2.58-.65.65 0 1.2.14 1.65.42.45.28.68.7.68 1.26 0 .5-.21.9-.63 1.2-.42.3-1.02.51-1.8.63l-.9.15c-1.26.18-2.27.56-3.03 1.14-.76.58-1.14 1.41-1.14 2.49 0 1.1.43 2 1.29 2.7.86.7 2.01 1.05 3.45 1.05 1.12 0 2.18-.28 3.18-.84z"/>
                  </svg>
                  <span>JavaScript</span>
                </div>

                {/* React */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#61DAFB]/20 border border-[#61DAFB]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#61DAFB]/40 hover:shadow-lg hover:shadow-[#61DAFB]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#61DAFB" d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-8.5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>React</span>
                </div>

                {/* HTML5 */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E34F26]/20 border border-[#E34F26]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#E34F26]/40 hover:shadow-lg hover:shadow-[#E34F26]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#E34F26" d="M3.5 3l1.8 17.2L12 22l6.7-1.8L20.5 3H3.5zm14.5 4.5H8.3l.1 1.5h9.5l-.8 8.5-5.1 1.4-5.1-1.4-.3-3.5h1.7l.2 2.2 3.5 1 3.5-1 .4-4.5H7.7L7 7.5h11z"/>
                  </svg>
                  <span>HTML5</span>
                </div>

                {/* CSS3 */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1572B6]/20 border border-[#1572B6]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#1572B6]/40 hover:shadow-lg hover:shadow-[#1572B6]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#1572B6" d="M3.5 3l1.8 17.2L12 22l6.7-1.8L20.5 3H3.5zm14.5 4.5H8.3l.1 1.5h9.5l-.3 3.5H8.3l.1 1.5h9.3l-.4 4.5-3.5 1-3.5-1-.3-3.5H9l.5 5.5 5.5 1.5 5.5-1.5.5-6.5h-11l-.2-2.5h11.2l.3-3z"/>
                  </svg>
                  <span>CSS3</span>
                </div>

                {/* Tailwind CSS */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#06B6D4]/20 border border-[#06B6D4]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#06B6D4]/40 hover:shadow-lg hover:shadow-[#06B6D4]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#06B6D4" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                  <span>Tailwind CSS</span>
                </div>

                {/* Flutter */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#02569B]/20 border border-[#02569B]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#02569B]/40 hover:shadow-lg hover:shadow-[#02569B]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#02569B" d="M14.316 0L24 9.684H14.316V0zM24 14.316L14.316 24H9.684l9.632-9.684H24zM0 9.684L9.684 0h4.632L4.632 9.684H0zM9.684 24l-4.632-4.632L14.684 9.684H19.316L9.684 24z"/>
                  </svg>
                  <span>Flutter</span>
                </div>

              </div>
            </div>

            {/* 3. Herramientas & Sistemas Corporativos */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-pink-400 font-bold mb-5 text-sm flex items-center gap-2">⚙️ Herramientas & Corporativos</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* Git & GitHub */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F05032]/20 border border-[#F05032]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#F05032]/40 hover:shadow-lg hover:shadow-[#F05032]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#F05032" d="M2.35 15.37L10.3 7.42l2.4 2.4-7.95 7.95a1.5 1.5 0 0 1-2.12 0l-.28-.28a1.5 1.5 0 0 1 0-2.12z"/>
                  </svg>
                  <span>Git & GitHub</span>
                </div>

                {/* Figma */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F24E1E]/20 border border-[#F24E1E]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#F24E1E]/40 hover:shadow-lg hover:shadow-[#F24E1E]/30 cursor-pointer">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fill="#F24E1E" d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z"/>
                  </svg>
                  <span>Figma</span>
                </div>

                {/* SAP */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0FA7FF]/20 border border-[#0FA7FF]/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#0FA7FF]/40 hover:shadow-lg hover:shadow-[#0FA7FF]/30 cursor-pointer">
                  <span className="text-[#0FA7FF]">🏢</span>
                  <span>SAP</span>
                </div>

                {/* CRM Systems */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-700/40 border border-gray-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-600/50 hover:shadow-lg cursor-pointer">
                  <span>📊</span>
                  <span>CRM Systems</span>
                </div>

                {/* Siebel */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/20 border border-blue-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-600/40 hover:shadow-lg cursor-pointer">
                  <span>💼</span>
                  <span>Siebel</span>
                </div>

                {/* Sinco */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-600/20 border border-green-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-green-600/40 hover:shadow-lg cursor-pointer">
                  <span>🟢</span>
                  <span>Sinco</span>
                </div>

              </div>
            </div>

            {/* 4. Asistencias de Inteligencia Artificial */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-amber-400 font-bold mb-5 text-sm flex items-center gap-2">🤖 Asistencias de IA</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* Gemini */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600/20 border border-purple-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-purple-600/40 hover:shadow-lg cursor-pointer">
                  <span>✨</span>
                  <span>Gemini</span>
                </div>

                {/* Claude */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-600/20 border border-amber-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-amber-600/40 hover:shadow-lg cursor-pointer">
                  <span>🧠</span>
                  <span>Claude</span>
                </div>

                {/* GitHub Copilot */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-600/20 border border-cyan-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-600/40 hover:shadow-lg cursor-pointer">
                  <span>🤖</span>
                  <span>GitHub Copilot</span>
                </div>

              </div>
            </div>

            {/* 5. Entornos de Desarrollo & IDEs */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-cyan-400 font-bold mb-5 text-sm flex items-center gap-2">🛠️ Entornos de Desarrollo & IDEs</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* Cursor */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/80 border border-cyan-400/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-lg cursor-pointer">
                  <span>⚡</span>
                  <span>Cursor</span>
                </div>

                {/* VS Code */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/20 border border-blue-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500/40 hover:shadow-lg cursor-pointer">
                  <span>💻</span>
                  <span>VS Code</span>
                </div>

                {/* PyCharm */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-green-500/20 border border-green-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-green-500/40 hover:shadow-lg cursor-pointer">
                  <span>🐍</span>
                  <span>PyCharm</span>
                </div>

              </div>
            </div>

            {/* 6. Cloud & Despliegue */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col justify-between shadow-xl">
              <h4 className="text-teal-400 font-bold mb-5 text-sm flex items-center gap-2">☁️ Cloud & Despliegue</h4>
              <div className="flex flex-wrap gap-3">
                
                {/* Render */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-500/20 border border-teal-500/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-teal-500/40 hover:shadow-lg cursor-pointer">
                  <span>🚀</span>
                  <span>Render</span>
                </div>

                {/* Flask */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-800/60 border border-gray-600/50 text-white text-xs font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg cursor-pointer">
                  <span>🧪</span>
                  <span>Flask</span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN EDUCACIÓN & REFERENCIAS */}
        <section id="education" className="w-full scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-cyan-300 flex items-center gap-2">🎓 {t('educationTitle')}</h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="font-bold text-white">Tecnólogo en Análisis y Desarrollo de Software (ADSO)</div>
                <div className="text-xs text-cyan-400 mt-1">SENA • Finalizado</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="font-bold text-white">Administrador de Empresas</div>
                <div className="text-xs text-green-400 mt-1">Corporación Unificada Nacional (CUN)</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-cyan-300 flex items-center gap-2">🎓 {t('educationTitle')}</h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="font-bold text-white">Bachiller Académico</div>
                <div className="text-xs text-purple-400 mt-1">Colegio Francisco José de Caldas (2008)</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="font-bold text-white">Cursos SENA de Perfeccionamiento Ejecutivo</div>
                <div className="text-xs text-cyan-400 mt-1">Frontend Web, Toma de Decisiones, Correos Corporativos, Contabilidad e Inventarios.</div>
              </div>
            </div>
          </div>

        </section>

        {/* SECCIÓN CONTACTO / CTA */}
        <section id="contact" className="w-full my-16 text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/70 via-cyan-900/60 to-black/95 border border-white/25 shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">{t('ctaTitle')}</h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm font-light">
            {t('ctaDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:archbold1991@hotmail.com"
              className="px-8 py-4 rounded-full font-bold bg-cyan-400 hover:bg-cyan-300 text-black transition-all shadow-xl shadow-cyan-500/30 flex items-center gap-2 text-sm"
            >
              ✉️ {t('sendEmail')}
            </a>
            <a
              href="https://github.com/CarlosArchbold"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-xl flex items-center gap-2 text-sm text-white"
            >
              🐙 GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/carlos-jesus-archbold-flechas-ab1998129/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-xl flex items-center gap-2 text-sm text-white"
            >
              💼 LinkedIn ↗
            </a>
          </div>
        </section>
        
      </main>
          
      {/* FOOTER */}
      <footer className="relative z-10 text-center py-8 border-t border-white/10 text-xs text-gray-400 bg-black/40 backdrop-blur-md">
        <p>© 2026 Carlos Jesus Archbold Flechas. Built with React, Tailwind CSS & Cosmic Galaxy Core.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}