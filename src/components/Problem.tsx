export default function Problem() {
  const problemas = [
    {
      icon: "📈",
      titulo: "Tu factura sube cada mes",
      texto: "Sin que sepas exactamente por qué ni cómo evitarlo.",
    },
    {
      icon: "📄",
      titulo: "No entiendes tu factura",
      texto: "Términos raros, cargos ocultos y letra pequeña por todas partes.",
    },
    {
      icon: "⏳",
      titulo: "No tienes tiempo para comparar",
      texto: "Cada comercializadora te ofrece algo distinto y ninguna es clara.",
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Miles de hogares y empresas en España pagan de más cada mes sin saberlo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problemas.map((p) => (
            <div
              key={p.titulo}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{p.titulo}</h3>
              <p className="text-slate-600 dark:text-slate-400">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}