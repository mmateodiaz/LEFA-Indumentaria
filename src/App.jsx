import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToOrder from './components/HowToOrder';
import BudgetWizard from './components/BudgetWizard';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import { Shirt, Snowflake, Briefcase, Users, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Sección Quiénes Somos con Animación */}
        <ScrollAnimation>
          <section id="quienes-somos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Sobre LEFA</span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-6">
                    Pasión y tecnología textil en cada prenda
                  </h2>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    En **LEFA Indumentaria** nos especializamos en diseñar y fabricar indumentaria deportiva de alta gama para clubes, torneos y planteles que buscan diferenciarse.
                  </p>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    Utilizamos telas con tecnología de rápida evaporación, costuras reforzadas y sublimación digital de máxima definición para que los colores y escudos perduren intactos temporada tras temporada.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/lefaindumentaria" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver Trabajos en Instagram</span>
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600" alt="LEFA 1" className="rounded-2xl shadow-md h-64 object-cover" />
                  <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" alt="LEFA 2" className="rounded-2xl shadow-md h-64 object-cover mt-8" />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* 4 Cuadros de Líneas de Indumentaria */}
        <ScrollAnimation>
          <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Nuestras Líneas</span>
                <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mt-1 mb-4">
                  Equipamiento Integral para Clubes
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Cuadro 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Shirt className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Juegos de fútbol</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Camisetas y shorts personalizados con los colores y escudos de tu institución.
                  </p>
                  <a href="#presupuesto" className="mt-auto text-xs font-bold text-blue-600 hover:underline">
                    Pedir Presupuesto &rarr;
                  </a>
                </div>

                {/* Cuadro 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Snowflake className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Equipos de invierno</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Buzos, camperas y conjuntos térmicos afrizados para proteger al plantel en los días fríos.
                  </p>
                  <a href="#presupuesto" className="mt-auto text-xs font-bold text-blue-600 hover:underline">
                    Pedir Presupuesto &rarr;
                  </a>
                </div>

                {/* Cuadro 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Ropa institucional</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Chombas y prendas formales para cuerpo técnico, dirigentes y presentación.
                  </p>
                  <a href="#presupuesto" className="mt-auto text-xs font-bold text-blue-600 hover:underline">
                    Pedir Presupuesto &rarr;
                  </a>
                </div>

                {/* Cuadro 4 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">Equipos de 3er tiempo</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Indumentaria cómoda y casual diseñada especialmente para momentos fuera de la cancha.
                  </p>
                  <a href="#presupuesto" className="mt-auto text-xs font-bold text-blue-600 hover:underline">
                    Pedir Presupuesto &rarr;
                  </a>
                </div>

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