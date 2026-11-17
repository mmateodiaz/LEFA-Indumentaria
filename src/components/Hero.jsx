import React, { useState, useEffect } from 'react';
import { ShieldCheck, Trophy, Truck, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: '/hero-1.jpg',
    alt: 'LEFA Indumentaria - Fútbol en cancha'
  },
  {
    url: '/hero-2.jpg',
    alt: 'LEFA Indumentaria - Conjuntos deportivos'
  },
  {
    url: '/hero-3.jpg',
    alt: 'LEFA Indumentaria - Jugador con camiseta oficial'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar de foto automáticamente cada 5 segundos (opcional, o solo con flechas)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[580px] flex flex-col justify-between">
      
      {/* Carrusel de Imágenes de Fondo */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-50 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Flechas de Navegación del Carrusel */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Siguiente foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenido Central del Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start justify-center flex-grow w-full">
        <span className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
          Indumentaria Oficial para Clubes
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-2xl mb-6 leading-none">
          DISEÑO Y RENDIMIENTO <span className="text-blue-500">para tu Equipo</span>
        </h1>
        
        <p className="text-lg text-gray-300 max-w-xl mb-8 font-normal">
          Confección integral de indumentaria deportiva personalizada, camisetas oficiales y kits de entrenamiento de alta resistencia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="https://wa.me/5493543609577?text=Hola%20LEFA,%20quiero%20pedir%20presupuesto%20para%20mi%20equipo." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm uppercase"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar por WhatsApp</span>
          </a>
          <a 
            href="#como-pedir" 
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-md transition-all border border-white/20 text-sm uppercase"
          >
            <span>Ver Cómo Pedir</span>
          </a>
        </div>

        {/* Indicadores de puntos (dots) para saber en qué foto estás */}
        <div className="flex gap-2 mt-8">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'}`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Banner de beneficios inferiores */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Trophy className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Calidad Profesional</h3>
              <p className="text-xs text-gray-400">Prendas testeadas en alta competencia.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Diseños Personalizados</h3>
              <p className="text-xs text-gray-400">Escudos, sublimados y colores a medida.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Envíos a Todo el País</h3>
              <p className="text-xs text-gray-400">Logística rápida y segura para instituciones.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}