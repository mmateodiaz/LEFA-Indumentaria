import React, { useState } from 'react';
import { User, Shield, Shirt, Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BudgetWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nombreEquipo: '',
    categoria: 'Club',
    cantidadPersonas: '10-25',
    tipoIndumentaria: 'Indumentaria deportiva'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const mensaje = `Hola LEFA! Quiero solicitar un presupuesto institucional:\n\n` +
      `👤 *Contacto:* ${formData.nombre} ${formData.apellido}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `🛡️ *Equipo/Institución:* ${formData.nombreEquipo}\n` +
      `🏢 *Categoría:* ${formData.categoria}\n` +
      `👥 *Cantidad aprox:* ${formData.cantidadPersonas} personas\n` +
      `👕 *Indumentaria:* ${formData.tipoIndumentaria}\n\n` +
      `¿Me podrán asesorar con los diseños y precios?`;

    const url = `https://wa.me/5493543609577?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="presupuesto" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Cotizador Online</span>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mt-1 mb-4">
            Simulador de Presupuesto Institucional
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Completá los datos en 3 simples pasos y envianos tu requerimiento directamente a nuestro WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
          
          {/* Indicador de Pasos */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-100 z-0"></div>
            
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs transition-colors ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs transition-colors ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-xs transition-colors ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
          </div>

          {/* Formulario por Pasos */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-gray-900 font-bold">
                <User className="w-5 h-5 text-blue-600" />
                <h3>Paso 1: Tus Datos de Contacto</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Nombre:</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    value={formData.nombre} 
                    onChange={handleChange}
                    placeholder="Ej: Mateo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Apellido:</label>
                  <input 
                    type="text" 
                    name="apellido" 
                    required 
                    value={formData.apellido} 
                    onChange={handleChange}
                    placeholder="Ej: Díaz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Correo Electrónico:</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="tucorreo@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-colors"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-gray-900 font-bold">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3>Paso 2: Datos del Equipo o Institución</h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Nombre del Equipo / Club:</label>
                <input 
                  type="text" 
                  name="nombreEquipo" 
                  required 
                  value={formData.nombreEquipo} 
                  onChange={handleChange}
                  placeholder="Ej: Club Atlético Talleres / Los Amigos FC"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Categoría:</label>
                  <select 
                    name="categoria" 
                    value={formData.categoria} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Club">Club</option>
                    <option value="Equipo amateur">Equipo amateur</option>
                    <option value="Complejo deportivo">Complejo deportivo</option>
                    <option value="Gimnasio">Gimnasio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Cantidad Aprox. de Personas:</label>
                  <select 
                    name="cantidadPersonas" 
                    value={formData.cantidadPersonas} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="10-20 personas">10 a 20 personas</option>
                    <option value="20-50 personas">20 a 50 personas</option>
                    <option value="50-100 personas">50 a 100 personas</option>
                    <option value="Más de 100 personas">Más de 100 personas</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase px-6 py-4 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-colors"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-gray-900 font-bold">
                <Shirt className="w-5 h-5 text-blue-600" />
                <h3>Paso 3: Tipo de Indumentaria Deseada</h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-2">Seleccioná la línea principal:</label>
                <select 
                  name="tipoIndumentaria" 
                  value={formData.tipoIndumentaria} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-600 bg-white font-medium"
                >
                  <option value="Indumentaria deportiva (Camisetas, Shorts, Kits)">Indumentaria deportiva (Camisetas, Shorts, Kits)</option>
                  <option value="Indumentaria de trabajo / Staff">Indumentaria de trabajo / Staff</option>
                  <option value="Ropa de invierno (Buzos, camperas, conjuntos)">Ropa de invierno (Buzos, camperas, conjuntos)</option>
                  <option value="Tercer tiempo y accesorios">Tercer tiempo y accesorios</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed">
                  Al hacer clic en enviar, se abrirá tu WhatsApp con el mensaje estructurado para que nuestro equipo te responda al instante con asesoramiento y cotización personalizada.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase px-6 py-4 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase px-8 py-4 rounded-xl shadow-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Presupuesto por WhatsApp</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}