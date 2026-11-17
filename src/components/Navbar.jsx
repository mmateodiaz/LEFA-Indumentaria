import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo LEFA + Imagen */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="LEFA Logo" 
              className="w-10 h-10 object-contain rounded-lg bg-gray-900 p-1" 
            />
            <span className="text-2xl font-black tracking-widest text-gray-900 uppercase">
              LEFA<span className="text-blue-600">.</span>
            </span>
          </a>
          <span className="hidden sm:inline-block text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
            INDUMENTARIA DEPORTIVA
          </span>
        </div>

        {/* Links de navegación desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#quienes-somos" className="hover:text-blue-600 transition-colors">Quiénes Somos</a>
          <a href="#clubes" className="hover:text-blue-600 transition-colors">Clubes y Equipos</a>
          <a href="#presupuesto" className="hover:text-blue-600 transition-colors">Presupuesto</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>

        {/* CTA Presupuesto superior */}
        <div className="hidden sm:block">
          <a 
            href="#presupuesto" 
            className="bg-gray-900 hover:bg-blue-600 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            Pedir Presupuesto
          </a>
        </div>

        {/* Botón menú hamburguesa mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Inicio</a>
          <a href="#quienes-somos" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Quiénes Somos</a>
          <a href="#clubes" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Clubes y Equipos</a>
          <a href="#presupuesto" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Presupuesto</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800 font-medium">Contacto</a>
        </div>
      )}
    </header>
  );
}