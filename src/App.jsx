import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClubSection from './components/ClubSection';
import Footer from './components/Footer';
import { Instagram, Phone, Shirt, Snowflake, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Sección Quiénes Somos */}
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
                    <Instagram className="w-4 h-4" />
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

        {/* Líneas de Indumentaria (Reemplazo del Catálogo) */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Nuestras Líneas</span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mt-1 mb-4">
                Equipamiento Integral para Clubes
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shirt className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Camisetas y Kits de Partido</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  Diseños sublimados personalizados con los colores y escudos de tu institución. Telas técnicas respirables de alta durabilidad.
                </p>
                <a 
                  href="https://wa.me/5493510000000?text=Hola%20LEFA,%20quiero%20consultar%20por%20camisetas%20y%20kits%20de%20partido." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-xs font-bold text-blue-600 hover:underline"
                >
                  Consultar por WhatsApp &rarr;
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Snowflake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Indumentaria de Invierno</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  Buzos de entrenamiento, camperas cortavientos y conjuntos térmicos afrizados para proteger al plantel en los días fríos.
                </p>
                <a 
                  href="https://wa.me/5493510000000?text=Hola%20LEFA,%20quiero%20consultar%20por%20ropa%20de%20invierno." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-xs font-bold text-blue-600 hover:underline"
                >
                  Consultar por WhatsApp &rarr;
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accesorios y Tercer Tiempo</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  Shorts, medias técnicas y chombas institucionales para cuerpo técnico, dirigentes y momentos fuera de la cancha.
                </p>
                <a 
                  href="https://wa.me/5493510000000?text=Hola%20LEFA,%20quiero%20consultar%20por%20accesorios%20y%20tercer%20tiempo." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-xs font-bold text-blue-600 hover:underline"
                >
                  Consultar por WhatsApp &rarr;
                </a>
              </div>

            </div>
          </div>
        </section>

        <ClubSection />
      </main>

      <Footer />
    </div>
  );
}