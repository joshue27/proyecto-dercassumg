import { motion } from "framer-motion";
import { Lightbulb, Target, Layers } from "lucide-react";

const cards = [
  {
    Icon: Lightbulb,
    title: "Comprender el sistema",
    desc: "Ayuda a los analistas a comprender profundamente un sistema, proceso o requerimiento empresarial antes de construir soluciones precipitadas.",
  },
  {
    Icon: Target,
    title: "Identificar problemas",
    desc: "Permite aislar e identificar de manera clara los problemas y deficiencias dentro de los flujos de trabajo actuales de una organización.",
  },
  {
    Icon: Layers,
    title: "Analizar interacciones",
    desc: "Estructura la información para analizar cómo interactúan exactamente los componentes técnicos y humanos de un ecosistema.",
  },
];

const importanceItems = [
  "Permite entender claramente un problema antes de programar.",
  "Facilita la comunicación entre analistas, clientes y desarrolladores.",
  "Ayuda a identificar requisitos del sistema con precisión.",
  "Permite documentar procesos de forma altamente estructurada.",
  "Mejora radicalmente la planificación del desarrollo de software.",
];

const useCases = [
  {
    title: "Sistemas de Facturación",
    desc: "Identificar qué datos necesita la factura (E), qué formato final tendrá (R), quiénes la emiten y reciben (A), cómo se validan los montos (C) y en qué base de datos se guarda (S).",
  },
  {
    title: "Control de Inventario",
    desc: "Analizar el flujo desde que los proveedores entregan mercancía (E), cómo se registra en los estantes (S), quién aprueba las bajas (A) y los umbrales de re-orden (C).",
  },
  {
    title: "Recursos Humanos",
    desc: "Documentar el ingreso de nuevos empleados desde la recepción del CV (E), los perfiles del sistema generados (R), quién tiene acceso confidencial (C) y el portal del empleado (S).",
  },
];

const WhatIsDercas = () => {
  return (
    <section id="que-es" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            Expediente abierto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            ¿Qué es <span className="text-gradient">DERCAS</span>?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            El DERCAS es una técnica de análisis utilizada en ingeniería de sistemas
            y análisis de sistemas de información que permite describir una
            situación o problema mediante seis elementos fundamentales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {cards.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="p-6 rounded-xl bg-card glow-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Importancia de DERCAS */}
        <motion.div
          className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/5 border border-primary/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Importancia del Análisis</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En proyectos de desarrollo de software, aplicar DERCAS puede evitar errores comunes como desarrollar sistemas que no resuelven realmente el problema del usuario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {importanceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-sm border border-border/50 transition-all cursor-default"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground/90 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Casos de Uso Comunes */}
        <div className="mt-24 max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Casos de Uso en la Industria</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto border-b border-border/50 pb-8">
              La metodología DERCAS es increíblemente versátil y puede aplicarse a prácticamente cualquier sistema de información empresarial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative group p-[1px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-full bg-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center">
                  <h4 className="text-xl font-bold text-gradient mb-4 mt-2">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDercas;
