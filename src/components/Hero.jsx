import React, { useState, useEffect } from 'react';
import { ShieldCheck, Trophy, Truck, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: '/hero-1.jpg',
    alt: 'LEFA Indumentaria'
  },
  {
    url: '/hero-2.jpg',
    alt: 'LEFA Indumentaria'
  },
  {
    url: '/hero-3.jpg',
    alt: 'LEFA Indumentaria'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[560px] flex flex-col justify-between">
      
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Flechas de Navegación del Carrusel */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/10 hidden sm:flex items-center justify-center cursor-pointer"
        aria-label="Siguiente foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenido Central del Hero simplificado */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start justify-center flex-grow w-full">
        <span className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
          Indumentaria deportiva para clubes y equipos
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-2xl mb-4 leading-none">
          VESTIMOS A TU PLANTEL <span className="con text-blue-500">con identidad</span>
        </h1>
        
        <p className="text-base sm:text-lg text-gray-300 max-w-lg mb-8 font-normal">
          Camisetas oficiales, kits de entrenamiento y ropa para equipar a todo el club con la mejor calidad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="https://wa.me/5493543609577?text=Hola%20LEFA,%20quiero%20consultar%20por%20indumentaria%20para%20mi%20equipo." 
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

        {/* Indicadores de puntos (dots) */}
        <div className="flex gap-2 mt-8">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'}`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Banner de beneficios inferiores */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Trophy className="w-7 h-7 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Calidad de competencia</h3>
              <p className="text-xs text-gray-400">Telas respirables y duraderas.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-7 h-7 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Diseño personalizado</h3>
              <p className="text-xs text-gray-400">Escudos, colores y sublimados a medida.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck className="w-7 h-7 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm">Envíos a todo el país</h3>
              <p className="text-xs text-gray-400">Logística directa para instituciones.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
