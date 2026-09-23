import { useDarkMode } from "../hooks/useDarkMode";

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white">
          <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
            ⚡
          </span>
          EnergySave
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <li><a href="#problema" className="hover:text-emerald-600 dark:hover:text-emerald-400">Problema</a></li>
          <li><a href="#solucion" className="hover:text-emerald-600 dark:hover:text-emerald-400">Solución</a></li>
          <li><a href="#beneficios" className="hover:text-emerald-600 dark:hover:text-emerald-400">Beneficios</a></li>
          <li><a href="#como-funciona" className="hover:text-emerald-600 dark:hover:text-emerald-400">Cómo funciona</a></li>
        </ul>

        <div className="flex items-center gap-3">
          {/* Botón dark mode */}
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <a
            href="#contacto"
            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Consulta gratis
          </a>
        </div>
      </nav>
    </header>
  );
}