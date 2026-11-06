import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

export default function ClubSection() {
  return (
    <section id="clubes" className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 font-bold text-xs uppercase px-3 py-1.5 rounded-full mb-4">
              <Users className="w-4 h-4" /> Asesoramiento Institucional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-6">
              ¿Sos directivo de un club o querés equipar a tu equipo?
            </h2>
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Tenemos una propuesta integral para generar ingresos a la institución, descuentos por volumen en kits de entrenamiento, camisetas oficiales personalizadas y atención directa con nuestro Asesor de Clubes.
            </p>
            <a 
              href="https://wa.me/5493510000000?text=Hola%20LEFA,%20soy%20dirigente/representante%20de%20un%20club%20y%20quiero%20recibir%20asesoramiento." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base"
            >
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span>¡Escribinos por WhatsApp!</span>
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96">
            <img 
              src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=1000" 
              alt="Equipos y Clubes LEFA" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}