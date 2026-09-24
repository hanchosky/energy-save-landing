# ⚡ EnergySave | Landing de Asesoramiento Energético

Landing page orientada a conversión para captar clientes interesados en reducir su factura de luz y gas mediante una consulta gratuita.

🔗 **Demo en Vivo:** https://energy-save-landing.vercel.app  
🔗 **Figma (Design System + Wireframes):** https://www.figma.com/design/feo7le1Jjc3tAI625Ez3hH/EnergySave-%E2%80%94-Landing

---

## 🎯 Sobre el Proyecto

Esta landing fue desarrollada como prueba técnica para una empresa de asesoramiento energético. El objetivo principal es **convertir visitas en leads** mediante un formulario de consulta gratuita.

**Características principales:**

- ✅ Diseño responsive (móvil, tablet, escritorio)
- ✅ Modo oscuro con persistencia
- ✅ PWA instalable (funciona offline)
- ✅ Slider automático en el Hero
- ✅ Botón scroll-to-top
- ✅ Formulario validado
- ✅ SEO optimizado
- ✅ Favicon completo multiplataforma

---

## 🛠️ Stack Tecnológico

| Tecnología | Rol |
|-----------|-----|
| **React 19** | Motor de la interfaz con Hooks modernos |
| **TypeScript** | Tipado estático para mayor seguridad |
| **Vite 6** | Build tool ultrarrápido |
| **Tailwind CSS v4** | Estilizado atómico y consistente |
| **vite-plugin-pwa** | Configuración de PWA (Service Worker + Manifest) |
| **Vercel** | Hosting con CI/CD automático |

---

## 📂 Estructura del Proyecto

```text
energy-save-landing/
├── public/                    # Assets estáticos (favicon, iconos PWA)
├── src/
│   ├── assets/                # Imágenes del Hero
│   ├── components/            # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── PWAInstallBanner.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── InstallButton.tsx
│   ├── contexts/              # Context API (PWA install)
│   ├── css/                   # Estilos globales
│   ├── hooks/                 # Hooks personalizados (useDarkMode)
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── DESIGN.md
```

---

## 🚀 Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/hanchosky/energy-save-landing.git
cd energy-save-landing

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build de producción
```

---

## 📱 PWA — Instalación

Esta landing es una **Progressive Web App** instalable:

- **Android/Chrome:** Acepta el banner "Instalar" o busca el icono en la barra de direcciones.
- **iOS/Safari:** Compartir → "Añadir a pantalla de inicio".
- **Desktop:** Icono de instalación en la barra de direcciones.

Una vez instalada:

- ✅ Se abre como app nativa (sin barra del navegador).
- ✅ Funciona parcialmente offline.
- ✅ Aparece en pantalla de inicio con su propio icono.

---

## 🎨 Diseño

- **Figma (Design System + Wireframes):** https://www.figma.com/design/feo7le1Jjc3tAI625Ez3hH/EnergySave-%E2%80%94-Landing?node-id=3-257&t=kRZlBnSD0wrBNHh5-1
- **Decisiones de diseño:** Ver [DESIGN.md](./DESIGN.md)

---

## 🤖 Uso de IA

La IA se utilizó como **acelerador del desarrollo**, no como sustituto del criterio profesional. Se aplicó en:

- Brainstorming de estructura según el modelo AIDA.
- Variantes de copywriting orientadas a conversión.
- Scaffolding de Tailwind CSS con refinamiento manual posterior.
- Validación de best practices en landings de conversión.

Detalles completos en [DESIGN.md](./DESIGN.md).

---

## 📄 Licencia

Proyecto de prueba técnica. Todos los datos legales son ficticios.

---

## 👨‍💻 Autor

**Héctor Hans Olave Trujillo**  
Senior FullStack & Mobile Developer

🔗 GitHub: [github.com/hanchosky](https://github.com/hanchosky)  
🔗 LinkedIn: [linkedin.com/in/hector-hans-olave-trujillo-5449506a](https://www.linkedin.com/in/hector-hans-olave-trujillo-5449506a/)