import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ClubSection from './components/ClubSection';
import ProductCatalog from './components/ProductCatalog';
import BudgetModal from './components/CartModal'; // Reutilizamos el archivo renombrado o importado
import Footer from './components/Footer';

export default function App() {
  const [budgetItems, setBudgetItems] = useState([]);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  const handleAddToBudget = (product, size) => {
    setBudgetItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.size === size);
      if (existingIndex > -1) {
        const newItems = [...prev];
        newItems[existingIndex].quantity += 1;
        return newItems;
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setIsBudgetOpen(true); // Abre automáticamente el simulador al agregar
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setBudgetItems(prev => prev.map(item => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id, size) => {
    setBudgetItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const totalBudgetCount = budgetItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar budgetCount={totalBudgetCount} onOpenBudget={() => setIsBudgetOpen(true)} />
      
      <main>
        <Hero />
        
        <Categories onSelectCategory={(cat) => setActiveCategory(cat)} />

        {/* Sección Quiénes Somos */}
        <section id="quienes-somos" className="py-20 bg-white">
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600" alt="LEFA 1" className="rounded-2xl shadow-md h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" alt="LEFA 2" className="rounded-2xl shadow-md h-64 object-cover mt-8" />
              </div>
            </div>
          </div>
        </section>

        <ProductCatalog 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          onAddToCart={handleAddToBudget} 
        />

        <ClubSection />
      </main>

      <Footer />

      <BudgetModal 
        isOpen={isBudgetOpen} 
        onClose={() => setIsBudgetOpen(false)} 
        budgetItems={budgetItems} 
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem} 
      />
    </div>
  );
}