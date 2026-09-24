import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);

  // Cerrar el menú cuando cambia el tamaño a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cerrar con la tecla Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { href: "#problema", label: "Problema" },
    { href: "#solucion", label: "Solución" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Cómo funciona" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white">
          <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
            ⚡
          </span>
          EnergySave
        </a>

        {/* Nav desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones derecha */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Toggle dark mode */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-200">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-200">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>

          {/* CTA (solo desktop) */}
          <a
            href="#contacto"
            className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Consulta gratis
          </a>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {open ? (
              // Icono X
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-200">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-200">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-4 pt-2 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block text-center bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition text-white text-sm font-semibold px-5 py-3 rounded-full"
            >
              Consulta gratis
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}