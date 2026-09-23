export default function Benefits() {
  const beneficios = [
    { icon: "💸", titulo: "Ahorro real desde el primer mes", texto: "Sin inversión inicial ni permanencia." },
    { icon: "🔍", titulo: "Análisis transparente", texto: "Te explicamos cada línea de tu factura." },
    { icon: "⚡", titulo: "Gestión rápida", texto: "En menos de 48h tienes tu propuesta." },
    { icon: "🤝", titulo: "Sin compromiso", texto: "Solo avanzas si el ahorro te convence." },
    { icon: "📱", titulo: "Todo online", texto: "Sin llamadas pesadas ni visitas." },
    { icon: "🛡️", titulo: "Datos protegidos", texto: "Cumplimos con el RGPD europeo." },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Beneficios reales para hogares y empresas que quieren pagar menos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-2xl mb-4">
                {b.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{b.titulo}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}