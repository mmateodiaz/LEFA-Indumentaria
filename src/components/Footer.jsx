import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

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
            <li><a href="#productos" className="hover:text-white">Catálogo</a></li>
            <li><a href="#clubes" className="hover:text-white">Asesoramiento a Clubes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Contacto</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+54 9 351 000-0000</span>
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
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-400">Redes Sociales</h4>
          <p className="text-xs text-gray-400 mb-4">Seguinos en nuestro Instagram oficial para ver todos los trabajos realizados.</p>
          <a 
            href="https://www.instagram.com/lefaindumentaria" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            <span>@lefaindumentaria</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} LEFA Indumentaria Deportiva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}