import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-20 md:py-28">
        <div>
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Revisión energética gratuita
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Paga menos en tu factura de <span className="text-emerald-600 dark:text-emerald-400">luz y gas</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-lg">
            Analizamos tu consumo y te mostramos cuánto puedes ahorrar cada mes.
            Sin compromiso, sin letra pequeña.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition text-white font-semibold px-8 py-4 rounded-full text-center shadow-lg shadow-emerald-500/20"
            >
              Solicitar consulta gratuita
            </a>
            <a
              href="#como-funciona"
              className="border border-slate-300 dark:border-slate-700 hover:border-slate-400 text-slate-700 dark:text-slate-200 font-semibold px-8 py-4 rounded-full text-center transition"
            >
              Cómo funciona
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">✅ 100% gratuito</span>
            <span className="flex items-center gap-1">✅ Sin compromiso</span>
          </div>
        </div>

        <div className="relative">
          <HeroSlider />

          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 flex items-center gap-3 transition-colors z-20">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-2xl">
              💰
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ahorro medio</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">-32% / mes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}