import React from 'react';
import { MessageCircle, Palette, Clock, CreditCard, Sparkles } from 'lucide-react';

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Proceso Oficial</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 uppercase mt-1 mb-4">
            ¿Cómo hacer tu pedido en LEFA?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Los 3 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center relative group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-md">
              1
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              Escribinos por WhatsApp
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Envianos un mensaje y te asesoramos en todo el proceso de inicio a fin.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center relative group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-md">
              2
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-600" />
              Enviá tu diseño
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Mandanos tus ideas con fotos de referencia o bocetos y juntos lo ajustamos hasta llegar al diseño ideal.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center relative group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-md">
              3
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Confirmación y entrega
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Una vez confirmado el diseño y señado el pedido, tu prenda estará lista en 5 semanas aproximadamente.
            </p>
          </div>

        </div>

        {/* Formas de pago y Mensaje Motivador */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 text-blue-400 text-xs font-bold uppercase px-3 py-1.5 rounded-full border border-blue-500/30">
              <CreditCard className="w-4 h-4" /> Medios de Pago Disponibles
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Efectivo y Transferencia Bancaria
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Aceptamos pagos en efectivo y transferencias para coordinar la seña y producción de tu pedido de forma segura.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl text-center lg:text-left flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> ¡Hacemos tus ideas realidad!
            </div>
            <p className="text-sm font-semibold text-gray-200">
              Escribinos y arrancamos con tu pedido.
            </p>
            <a 
              href="https://wa.me/5493543609577?text=Hola%20LEFA,%20quiero%20hacer%20realidad%20las%20ideas%20para%20mi%20equipo!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar Pedido por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}