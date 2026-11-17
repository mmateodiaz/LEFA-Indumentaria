import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToOrder from './components/HowToOrder';
import BudgetWizard from './components/BudgetWizard';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import { ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Sección Quiénes Somos y los 4 Grandes Cuadros con Fotos Reales */}
        <ScrollAnimation>
          <section id="quienes-somos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Texto institucional */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Sobre LEFA</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-6">
                  Pasión y tecnología textil en cada prenda
                </h2>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  En **LEFA Indumentaria** nos especializamos en diseñar y fabricar indumentaria deportiva de alta gama para clubes, torneos y planteles que buscan diferenciarse.
                </p>
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  Utilizamos telas con tecnología de rápida evaporación, costuras reforzadas y sublimación digital de máxima definición para que los colores y escudos perduren intactos temporada tras temporada.
                </p>
                <div>
                  <a 
                    href="https://www.instagram.com/lefaindumentaria" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Trabajos en Instagram</span>
                  </a>
                </div>
              </div>

              {/* Los 4 Grandes Cuadros con Imágenes de Fondo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
                
                {/* Cuadro 1: Juegos de Fútbol */}
                <a 
                  href="#presupuesto"
                  className="group relative h-96 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="/EquipoFutbol.png" 
                      alt="Juegos de fútbol" 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                      Línea Oficial
                    </span>
                    <h3 className="text-xl font-black text-white uppercase mb-2">Juegos de fútbol</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      Camisetas y shorts personalizados con los colores y escudos de tu institución.
                    </p>
                    <span className="text-xs font-bold text-blue-400 group-hover:underline">
                      Pedir Presupuesto &rarr;
                    </span>
                  </div>
                </a>

                {/* Cuadro 2: Equipos de Invierno */}
                <a 
                  href="#presupuesto"
                  className="group relative h-96 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="/EquipoInvierno.png" 
                      alt="Equipos de invierno" 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                      Térmicos y Abrigo
                    </span>
                    <h3 className="text-xl font-black text-white uppercase mb-2">Equipos de invierno</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      Buzos, camperas y conjuntos afrizados para proteger al plantel en los días fríos.
                    </p>
                    <span className="text-xs font-bold text-blue-400 group-hover:underline">
                      Pedir Presupuesto &rarr;
                    </span>
                  </div>
                </a>

                {/* Cuadro 3: Ropa Institucional */}
                <a 
                  href="#presupuesto"
                  className="group relative h-96 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="/RopaInstitucional.png" 
                      alt="Ropa institucional" 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                      Staff y Dirigentes
                    </span>
                    <h3 className="text-xl font-black text-white uppercase mb-2">Ropa institucional</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      Chombas y prendas formales para cuerpo técnico, dirigentes y presentación.
                    </p>
                    <span className="text-xs font-bold text-blue-400 group-hover:underline">
                      Pedir Presupuesto &rarr;
                    </span>
                  </div>
                </a>

                {/* Cuadro 4: Equipos de 3er Tiempo */}
                <a 
                  href="#presupuesto"
                  className="group relative h-96 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="/TercerTiempo.png" 
                      alt="Equipos de 3er tiempo" 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                      Casual y Relax
                    </span>
                    <h3 className="text-xl font-black text-white uppercase mb-2">Equipos de 3er tiempo</h3>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      Indumentaria cómoda y casual diseñada especialmente para momentos fuera de la cancha.
                    </p>
                    <span className="text-xs font-bold text-blue-400 group-hover:underline">
                      Pedir Presupuesto &rarr;
                    </span>
                  </div>
                </a>

              </div>

            </div>
          </section>
        </ScrollAnimation>

        {/* Sección Como Hacer tu Pedido con Animación */}
        <ScrollAnimation>
          <HowToOrder />
        </ScrollAnimation>

        {/* Simulador de Presupuesto con Animación */}
        <ScrollAnimation>
          <BudgetWizard />
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
}