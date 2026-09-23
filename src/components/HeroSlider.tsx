import { useEffect, useState } from "react";
import hero1 from "../assets/family.jpg";
import hero2 from "../assets/panels.jpg";
import hero3 from "../assets/city.jpg";

const images = [
  { src: hero1, alt: "Familia ahorrando en su factura" },
  { src: hero2, alt: "Energía solar y ahorro" },
  { src: hero3, alt: "Energía limpia para tu hogar" },
];

const INTERVAL = 4000; // Cambia cada 4 segundos

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}