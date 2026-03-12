import { motion } from "framer-motion";
import {
  FileQuestion,
  ArrowDownToLine,
  BarChart3,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const sections = [
  {
    letter: "D",
    title: "Definición del problema",
    Icon: FileQuestion,
    color: "190 95% 50%",
    content:
      "El taller mecánico actualmente registra las órdenes de trabajo en papel, lo que provoca pérdida de información, errores en los servicios realizados y dificultad para controlar el historial de vehículos.",
  },
  {
    letter: "E",
    title: "Entradas",
    Icon: ArrowDownToLine,
    color: "220 80% 60%",
    items: [
      "Datos del cliente",
      "Datos del vehículo",
      "Tipo de servicio solicitado",
      "Repuestos utilizados",
      "Fecha de ingreso del vehículo",
    ],
  },
  {
    letter: "R",
    title: "Resultados",
    Icon: BarChart3,
    color: "260 60% 55%",
    items: [
      "Orden de trabajo registrada",
      "Historial del vehículo actualizado",
      "Factura del servicio realizado",
      "Reportes de servicios realizados",
    ],
  },
  {
    letter: "C",
    title: "Controles",
    Icon: ShieldCheck,
    color: "170 70% 45%",
    items: [
      "Validación de datos del vehículo",
      "Control de inventario de repuestos",
      "Registro de usuarios autorizados",
      "Control de estados de la orden de trabajo",
    ],
  },
  {
    letter: "A",
    title: "Actores",
    Icon: Users,
    color: "340 65% 55%",
    items: ["Recepcionista del taller", "Mecánico", "Administrador", "Cliente"],
  },
  {
    letter: "S",
    title: "Soporte",
    Icon: Wrench,
    color: "30 80% 55%",
    items: [
      "Sistema web o software de gestión",
      "Base de datos",
      "Computadoras del taller",
      "Conexión a internet",
    ],
  },
];

const PracticalExample = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            Caso de estudio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Aplicando DERCAS{" "}
            <span className="text-gradient">en la vida real</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Analicemos un sistema para un <strong>taller mecánico</strong> usando
            el método DERCAS.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
          {/* Vertical Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent -translate-x-1/2 z-0" />
          
          {/* Vertical Timeline Line for Mobile */}
          <div className="block md:hidden absolute left-[31px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent z-0" />

          {sections.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={s.letter}
                className={`relative z-10 flex flex-col md:flex-row items-start md:items-center w-full mb-12 lg:mb-16 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline Node Content Block */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"} ml-14 md:ml-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-card border shadow-lg relative overflow-hidden group"
                    style={{ borderColor: `hsl(${s.color} / 0.3)` }}
                  >
                    {/* Inner subtle glow based on node color */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: `hsl(${s.color})` }}
                    />

                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md" style={{ backgroundColor: `hsl(${s.color} / 0.1)` }}>
                        <s.Icon size={16} style={{ color: `hsl(${s.color})` }} />
                        <h3 className="font-semibold text-foreground/90">{s.title}</h3>
                      </div>
                    </div>

                    {s.content && (
                      <p className="text-muted-foreground text-[15px] leading-relaxed relative z-10">
                        {s.content}
                      </p>
                    )}

                    {s.items && (
                      <ul className="space-y-3 relative z-10">
                        {s.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start md:items-center gap-3 text-[15px] text-muted-foreground/90 group/item"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 md:mt-0 transition-transform group-hover/item:scale-150"
                              style={{ backgroundColor: `hsl(${s.color})`, boxShadow: `0 0 10px hsl(${s.color})` }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                {/* Timeline Center Node Badge */}
                <div className="absolute left-0 md:left-1/2 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl border-2 z-20 md:-translate-x-1/2 transition-transform hover:scale-110 hover:rotate-3"
                  style={{
                    backgroundColor: `hsl(${s.color} / 0.15)`,
                    color: `hsl(${s.color})`,
                    borderColor: `hsl(${s.color} / 0.3)`,
                    backdropFilter: "blur(8px)"
                  }}
                >
                  {s.letter}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticalExample;
