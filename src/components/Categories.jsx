import React from 'react';
import { categories } from '../data/products';

export default function Categories({ onSelectCategory }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mb-4">
            Explorá Nuestras Líneas
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">
            Equipamiento integral desarrollado para cada etapa de la temporada deportiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                const element = document.getElementById('productos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer bg-gray-900"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">LEFA Sport</span>
                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Ver productos &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}