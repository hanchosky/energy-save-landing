import { useState } from "react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <section id="contacto" className="py-20 md:py-28 bg-emerald-50 dark:bg-emerald-950 transition-colors">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-4xl mb-6">
            ✓
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            ¡Solicitud recibida!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Te contactaremos en menos de 24 horas para revisar tu caso.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-emerald-50 dark:bg-emerald-950 transition-colors">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Solicita tu consulta gratuita
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Rellena el formulario y te contactamos en menos de 24h.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 space-y-5 transition-colors"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre completo" name="nombre" required />
            <Field label="Teléfono" name="telefono" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Tipo de cliente
            </label>
            <select
              name="tipo"
              required
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Selecciona una opción</option>
              <option value="hogar">Hogar</option>
              <option value="empresa">Empresa / Pyme</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Mensaje (opcional)
            </label>
            <textarea
              name="mensaje"
              rows={4}
              className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              placeholder="Cuéntanos brevemente tu caso..."
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Al enviar aceptas nuestra política de privacidad. Tus datos están protegidos según el RGPD.
          </p>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition text-white font-bold py-4 rounded-full shadow-lg shadow-emerald-500/20"
          >
            Solicitar consulta gratuita
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}