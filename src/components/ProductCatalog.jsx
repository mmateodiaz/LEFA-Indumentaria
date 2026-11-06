import React, { useState } from 'react';
import { products } from '../data/products';
import { ShoppingBag, Check } from 'lucide-react';

export default function ProductCatalog({ activeCategory, setActiveCategory, onAddToCart }) {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleAdd = (product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    onAddToCart(product, size);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Catálogo LEFA</span>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mt-1">
              Indumentaria y Equipamiento
            </h2>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {['todos', 'camisetas', 'invierno', 'shorts', 'accesorios'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'todos' ? 'Ver Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const isJustAdded = addedId === product.id;

            return (
              <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                
                {/* Imagen */}
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-xs mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mt-auto">
                    {/* Selector de Talles */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-gray-500 uppercase block mb-1.5">Talle:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(product.id, size)}
                            className={`px-2.5 py-1 text-xs font-bold rounded border transition-colors ${
                              currentSize === size 
                                ? 'bg-gray-900 text-white border-gray-900' 
                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-black text-gray-900">
                        ${product.price.toLocaleString('es-AR')}
                      </span>
                      <button
                        onClick={() => handleAdd(product)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase transition-all shadow-sm ${
                          isJustAdded 
                            ? 'bg-green-600 text-white' 
                            : 'bg-blue-600 hover:bg-blue-500 text-white'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>¡Agregado!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Agregar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}