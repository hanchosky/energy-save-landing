import { usePWAInstall } from "../context/PWAInstallContext";

export default function InstallButton() {
  const { canInstall, promptInstall } = usePWAInstall();

  if (!canInstall) return null;

  return (
    <button
      onClick={promptInstall}
      aria-label="Instalar aplicación"
      className="fixed bottom-24 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-semibold px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2"
    >
      <span className="text-lg">📲</span>
      <span className="hidden sm:inline">Instalar App</span>
    </button>
  );
}