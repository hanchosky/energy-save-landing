export default function HowItWorks() {
  const pasos = [
    {
      num: "01",
      titulo: "Analizamos tu caso",
      texto: "Nos cuentas tu situación energética en 1 minuto.",
    },
    {
      num: "02",
      titulo: "Revisamos tu factura",
      texto: "Estudiamos tu consumo y detectamos oportunidades de ahorro.",
    },
    {
      num: "03",
      titulo: "Te proponemos una solución",
      texto: "Recibes un plan claro con el ahorro estimado. Tú decides.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-slate-900 dark:bg-black text-white transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tres pasos simples. Sin complicaciones.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {pasos.map((p, i) => (
            <div key={p.num} className="relative">
              <div className="text-5xl font-extrabold text-emerald-500 mb-4">
                {p.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.titulo}</h3>
              <p className="text-slate-400">{p.texto}</p>
              {i < pasos.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-emerald-500/40 text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}