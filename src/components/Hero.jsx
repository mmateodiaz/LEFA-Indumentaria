import React from 'react';
import { ArrowRight, ShieldCheck, Trophy, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Imagen de fondo con overlay oscuro */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1920" 
          alt="LEFA Indumentaria Deportiva" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start justify-center min-h-[580px]">
        <span className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4">
          Nueva Colección Oficial
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-2xl mb-6 leading-none">
          INDUMENTARIA DEPORTIVA <span className="text-blue-500">para Clubes y Equipos</span>
        </h1>
        
        <p className="text-lg text-gray-300 max-w-xl mb-8 font-normal">
          Diseño, tecnología textil avanzada y máxima resistencia para potenciar el rendimiento dentro y fuera de la cancha.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#productos" 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            <span>Ver Catálogo</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#clubes" 
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-md transition-all border border-white/20"
          >
            <span>Asesoramiento para Clubes</span>
          </a>
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