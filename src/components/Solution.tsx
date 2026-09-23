export default function Solution() {
  return (
    <section id="solucion" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <div>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wider">
            Nuestra solución
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Una revisión energética clara y sin rodeos
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Analizamos tu factura y tu consumo real para detectar mejoras,
            tarifas mal contratadas y oportunidades de ahorro que hoy estás perdiendo.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Analizamos tu factura actual sin coste",
              "Comparamos con las mejores tarifas del mercado",
              "Te proponemos un plan claro y sin compromiso",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-100 dark:border-slate-700 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-slate-900 dark:text-white">Tu ahorro estimado</p>
            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full font-semibold">
              Ejemplo real
            </span>
          </div>
          {[
            { label: "Factura actual", value: "142 €", color: "text-slate-500 dark:text-slate-400" },
            { label: "Con EnergySave", value: "96 €", color: "text-emerald-600 dark:text-emerald-400" },
            { label: "Ahorro mensual", value: "46 €", color: "text-emerald-600 dark:text-emerald-400 font-bold" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700 last:border-0"
            >
              <span className="text-slate-600 dark:text-slate-300">{row.label}</span>
              <span className={`text-lg ${row.color}`}>{row.value}</span>
            </div>
          ))}
          <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
            * Ejemplo ilustrativo. El ahorro real depende de cada caso.
          </p>
        </div>
      </div>
    </section>
  );
}