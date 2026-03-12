import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileQuestion,
  ArrowDownToLine,
  BarChart3,
  ShieldCheck,
  Users,
  Wrench,
  ChevronDown,
} from "lucide-react";

const items = [
  {
    letter: "D",
    title: "Definición del problema",
    Icon: FileQuestion,
    color: "190 95% 50%",
    desc: "Describe cuál es la situación o problema que se desea analizar o resolver.",
    example: "Ej. El sistema web de ventas actuales toma 5 minutos en procesar un pago.",
  },
  {
    letter: "E",
    title: "Entradas",
    Icon: ArrowDownToLine,
    color: "220 80% 60%",
    desc: "Información, recursos o datos que ingresan al sistema para que funcione.",
    example: "Ej. JSON con la información del carrito, token de tarjeta, ID de usuario.",
  },
  {
    letter: "R",
    title: "Resultados",
    Icon: BarChart3,
    color: "260 60% 55%",
    desc: "Salidas o productos que genera el sistema después del procesamiento.",
    example: "Ej. Factura electrónica en PDF enviada por correo electrónico.",
  },
  {
    letter: "C",
    title: "Controles",
    Icon: ShieldCheck,
    color: "170 70% 45%",
    desc: "Normas, reglas o restricciones que regulan el funcionamiento del sistema.",
    example: "Ej. Bloqueo de compras si el inventario está en 0 (validación de backend).",
  },
  {
    letter: "A",
    title: "Actores",
    Icon: Users,
    color: "340 65% 55%",
    desc: "Personas o entidades que interactúan con el sistema.",
    example: "Ej. Cliente final (comprador), Administrador (Backoffice) y Pasarela (Stripe).",
  },
  {
    letter: "S",
    title: "Soporte",
    Icon: Wrench,
    color: "30 80% 55%",
    desc: "Recursos tecnológicos, físicos o humanos necesarios para que el sistema opere.",
    example: "Ej. Clúster de Kubernetes, Base de datos PostgreSQL, Frontend en React.",
  },
];

const DercasCards = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            Pistas encontradas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            ¿Qué significa <span className="text-gradient">DERCAS</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Haz clic en cada tarjeta para descubrir el significado de cada
            elemento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map(({ letter, title, Icon, color, desc, example }, i) => {
            return (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col p-6 lg:p-8 rounded-2xl glow-border bg-card/80 backdrop-blur-sm transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: `hsl(${color})` }}
                />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 font-bold text-3xl shadow-lg transition-transform group-hover:scale-110 duration-300"
                    style={{
                      backgroundColor: `hsl(${color} / 0.15)`,
                      color: `hsl(${color})`,
                    }}
                  >
                    {letter}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon
                        size={16}
                        style={{ color: `hsl(${color})` }}
                      />
                      <span className="text-xs font-mono tracking-wider opacity-70 uppercase" style={{ color: `hsl(${color})` }}>
                        Fase {i + 1}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-medium text-foreground/80 italic">
                      <span className="text-primary not-italic font-bold mr-1">💡</span> 
                      {example}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DercasCards;
