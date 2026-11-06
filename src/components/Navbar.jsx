import React, { useState } from 'react';
import { Calculator, Menu, X, Phone } from 'lucide-react';

export default function Navbar({ budgetCount, onOpenBudget }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo LEFA */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-2xl font-black tracking-widest text-gray-900 uppercase">
            LEFA<span className="text-blue-600">.</span>
          </a>
          <span className="hidden sm:inline-block text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
            INDUMENTARIA DEPORTIVA
          </span>
        </div>

        {/* Links de navegación desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#quienes-somos" className="hover:text-blue-600 transition-colors">Quiénes Somos</a>
          <a href="#productos" className="hover:text-blue-600 transition-colors">Productos</a>
          <a href="#clubes" className="hover:text-blue-600 transition-colors">Clubes y Organismos</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>

        {/* Acciones derecha (Simulador de Presupuesto + WhatsApp) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenBudget}
            className="relative flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-4 py-2.5 rounded-xl transition-colors text-xs uppercase border border-blue-200"
          >
            <Calculator className="w-4 h-4" />
            <span className="hidden sm:inline">Simulador de Presupuesto</span>
            {budgetCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-1">
                {budgetCount}
              </span>
            )}
          </button>

          <a 
            href="https://wa.me/5493510000000?text=Hola%20LEFA,%20quiero%20consultar%20por%20un%20presupuesto%20para%20mi%20club." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>WHATSAPP</span>
          </a>

          {/* Botón menú hamburguesa mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Inicio</a>
          <a href="#quienes-somos" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Quiénes Somos</a>
          <a href="#productos" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Productos</a>
          <a href="#clubes" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Clubes y Organismos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Contacto</a>
        </div>
      )}
    </header>
  );
}