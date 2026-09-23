import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import PWAInstallBanner from "./components/PWAInstallBanner"; // ← Añadir
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import InstallButton from "./context/InstallButton";
import { PWAInstallProvider } from "./context/PWAInstallContext";

export default function App() {
  return (
    <PWAInstallProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <PWAInstallBanner />   {/* ← Añadir aquí, antes de Benefits */}
          <Benefits />
          <HowItWorks />
          <ContactForm />
        </main>
        <Footer />
        <ScrollToTop />
        <InstallButton />
      </div>
    </PWAInstallProvider>
  );
}