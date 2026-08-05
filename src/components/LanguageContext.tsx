import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

// Diccionario de traducciones basado en tu estructura
const translations: Translations = {
  navProfile: { es: 'Perfil', en: 'Profile' },
  navExperience: { es: 'Experiencia', en: 'Experience' },
  navProjects: { es: 'Proyectos', en: 'Projects' },
  navSkills: { es: 'Habilidades', en: 'Skills' },
  navEducation: { es: 'Educación', en: 'Education' },
  navReferences: { es: 'Referencias', en: 'References' },
  navContact: { es: 'Contacto', en: 'Contact' },
  
  heroBadge: { es: 'Desarrollador Web & Analista', en: 'Web Developer & Analyst' },
  heroDesc: {
    es: 'Desarrollador Web y Analista de Software con sólida formación técnica y experiencia comprobada en la creación, optimización y mantenimiento de aplicaciones robustas.',
    en: 'Web Developer and Software Analyst with solid technical background and proven experience in creating, optimizing, and maintaining robust applications.'
  },
  exploreSystems: { es: 'Explorar Sistemas', en: 'Explore Systems' },
  securitySpecs: { es: 'Ver Experiencia', en: 'View Experience' },
  
  aboutTitle: { es: 'Sobre Mí', en: 'About Me' },
  experienceTitle: { es: 'Experiencia Laboral', en: 'Work Experience' },
  projectsTitle: { es: 'Proyectos Destacados', en: 'Featured Projects' },
  skillsTitle: { es: 'Stack Tecnológico', en: 'Tech Stack' },
  educationTitle: { es: 'Educación', en: 'Education' },
  referencesTitle: { es: 'Referencias', en: 'References' },
  
  ctaTitle: { es: '¿Iniciamos un proyecto?', en: 'Shall we start a project?' },
  ctaDesc: {
    es: 'Estoy siempre dispuesto a explorar nuevas oportunidades y retos tecnológicos. ¡Hablemos!',
    en: 'I am always ready to explore new opportunities and technological challenges. Let\'s talk!'
  },
  sendEmail: { es: 'Enviar Correo', en: 'Send Email' },

  // Descripciones de Proyectos complementadas
  moblarchDesc: {
    es: 'Estructuración y desarrollo de una plataforma web multipágina interactiva orientada al sector arquitectónico y gestión de mobiliario comercial, implementando Vite, Tailwind CSS y Framer Motion.',
    en: 'Structuring and development of an interactive multi-page web platform oriented towards the architectural sector and commercial furniture management, implementing Vite, Tailwind CSS, and Framer Motion.'
  },
  procapsB2BDesc: {
    es: 'Desarrollo de una solución web robusta en Scriptcase interconectada con SQL Server para el control y la visualización del estado transaccional de estructuras de bases de datos empresariales.',
    en: 'Development of a robust web solution in Scriptcase interconnected with SQL Server for control and visualization of the transactional state of enterprise database structures.'
  },
  procapsAlertsDesc: {
    es: 'Implementación de un sistema de notificaciones asíncronas en Python y SQL Server que audita la integridad de tablas críticas y gestiona el envío automatizado de reportes e incidencias por correo electrónico.',
    en: 'Implementation of an asynchronous notification system in Python and SQL Server that audits the integrity of critical tables and manages automated sending of reports and incidents via email.'
  },
  auraEditDesc: {
    es: 'Diseño conceptual, estructuración de entorno local y arquitectura base para una aplicación de edición fotográfica avanzada multiplataforma empleando el framework Flutter.',
    en: 'Conceptual design, local environment structuring, and base architecture for an advanced cross-platform photo editing application using the Flutter framework.'
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es'); // Español por defecto

  // Función para alternar rápidamente entre idiomas (útil para un botón de switch)
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Función para obtener la traducción
  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};