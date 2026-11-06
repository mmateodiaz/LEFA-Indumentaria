import React, { useState } from 'react';
import { X, Trash2, Calculator, Send, Plus, Minus } from 'lucide-react';

export default function BudgetModal({ isOpen, onClose, budgetItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const [clubName, setClubName] = useState('');

  const totalPrice = budgetItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalUnits = budgetItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppBudget = () => {
    if (budgetItems.length === 0) return;
    
    let message = `Hola LEFA! Soy de *${clubName || 'Mi Club / Equipo'}* y quiero solicitar el siguiente presupuesto:\n\n`;
    budgetItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* \n   - Talle: ${item.size} | Cantidad: ${item.quantity} un.\n   - Subtotal: $${(item.price * item.quantity).toLocaleString('es-AR')}\n\n`;
    });
    message += `----------------------------------\n`;
    message += `*Total Unidades:* ${totalUnits} prendas\n`;
    message += `*Presupuesto Estimado:* $${totalPrice.toLocaleString('es-AR')}\n\n`;
    message += `¿Me podrían confirmar disponibilidad y tiempos de entrega?`;
    
    const encodedUrl = `https://wa.me/5493510000000?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-black uppercase text-gray-900">Simulador de Presupuesto</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-200 text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input nombre de club/equipo */}
        <div className="p-6 pb-2 border-b border-gray-100 bg-white">
          <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
            Nombre de tu Club o Equipo:
          </label>
          <input 
            type="text" 
            placeholder="Ej: Club Atlético Talleres / Equipo Los Amigos" 
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-blue-600 font-medium"
          />
        </div>

        {/* Lista de Items seleccionados */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50">
          {budgetItems.length === 0 ? (
            <div className="text-center py-20">
              <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">El simulador está vacío.</p>
              <p className="text-gray-400 text-xs mt-1">Agregá prendas y definí cantidades por talle.</p>
            </div>
          ) : (
            budgetItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">Talle: <span className="font-bold text-gray-800">{item.size}</span></p>
                    <p className="text-xs font-black text-blue-600 mt-0.5">${item.price.toLocaleString('es-AR')} c/u</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100">
                  {/* Control de cantidad */}
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                      className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                      className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-sm font-black text-gray-900 min-w-[80px] text-right">
                    ${(item.price * item.quantity).toLocaleString('es-AR')}
                  </span>

                  <button 
                    onClick={() => onRemoveItem(item.id, item.size)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total y Botón Enviar Presupuesto */}
        {budgetItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-white shadow-lg">
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between items-center text-xs text-gray-500 font-semibold">
                <span>Total Prendas:</span>
                <span>{totalUnits} unidades</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700">Presupuesto Estimado:</span>
                <span className="text-2xl font-black text-gray-900">${totalPrice.toLocaleString('es-AR')}</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppBudget}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-sm uppercase"
            >
              <Send className="w-5 h-5" />
              <span>Solicitar Presupuesto por WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}