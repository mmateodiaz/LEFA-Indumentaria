import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        <div>
          <span className="text-2xl font-black tracking-widest uppercase">
            LEFA<span className="text-blue-500">.</span>
          </span>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed">
            Indumentaria deportiva oficial para clubes, equipos y deportistas que buscan máxima calidad y diseño exclusivo.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Navegación</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-white">Quiénes Somos</a></li>
            <li><a href="#clubes" className="hover:text-white">Clubes y Equipos</a></li>
            <li><a href="#presupuesto" className="hover:text-white">Simulador de Presupuesto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Contacto Directo</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              <span>+54 3543 60-9577</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>contacto@lefaindumentaria.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Córdoba, Argentina</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Canales Oficiales</h4>
          <div className="flex flex-col gap-3">
            <a 
              href="https://wa.me/5493543609577?text=Hola%20LEFA,%20quiero%20consultar%20por%20indumentaria." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/lefaindumentaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white text-xs font-bold px-4 py-3 rounded-xl transition-opacity shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Seguinos en Instagram</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} LEFA Indumentaria Deportiva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}