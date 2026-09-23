import { usePWAInstall } from "../context/PWAInstallContext";

export default function PWAInstallBanner() {
  const { canInstall, isInstalled, promptInstall } = usePWAInstall();

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 md:p-12 shadow-2xl shadow-emerald-500/20">
          {/* Decoración de fondo */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shrink-0">
                📲
              </div>
              <div>
                <h3 className="text-white font-extrabold text-xl md:text-2xl">
                  Instala EnergySave en tu dispositivo
                </h3>
                <p className="text-emerald-50 text-sm md:text-base mt-2 max-w-xl">
                  Accede más rápido desde tu pantalla de inicio, sin abrir el navegador.
                  Funciona incluso sin conexión.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              {isInstalled ? (
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-6 py-3 rounded-full">
                  ✅ Ya instalada
                </span>
              ) : canInstall ? (
                <button
                  onClick={promptInstall}
                  className="bg-white hover:bg-emerald-50 active:scale-95 transition text-emerald-700 text-sm font-bold px-8 py-3.5 rounded-full shadow-lg whitespace-nowrap"
                >
                  Instalar ahora
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-emerald-50 text-xs font-medium px-5 py-3 rounded-full whitespace-nowrap max-w-55 text-center leading-tight">
                  Busca el icono de instalación en la barra del navegador
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}