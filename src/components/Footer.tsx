export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              ⚡
            </span>
            EnergySave
          </div>
          <p className="text-sm">
            Asesoramiento energético para hogares y empresas en España.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-emerald-400">Servicios</a></li>
            <li><a href="#" className="hover:text-emerald-400">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Aviso legal</a></li>
            <li><a href="#" className="hover:text-emerald-400">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-emerald-400">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 info@energysave.es</li>
            <li>📞 +34 900 000 000</li>
            <li>📍 Madrid, España</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-xs text-center space-y-2">
  <p>
    © {new Date().getFullYear()} EnergySave S.L. — Todos los derechos reservados 2026.
    
  </p>
  <p className="flex items-center justify-center gap-3">
    <span className="text-slate-500">Desarrollado por</span>
    <a
      href="https://www.linkedin.com/in/hector-hans-olave-trujillo-5449506a/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors font-medium"
    >
      {/* Icono LinkedIn SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      hanchVeloper 2026
    </a>
  </p>
</div>
    </footer>
  );
}