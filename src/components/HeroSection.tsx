import { motion } from "framer-motion";
import { Search, Shield, Database, Cpu, Network, ArrowDown } from "lucide-react";

const floatingIcons = [
  { Icon: Shield, x: "10%", y: "20%", delay: 0 },
  { Icon: Database, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Cpu, x: "75%", y: "70%", delay: 1 },
  { Icon: Network, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Database, x: "25%", y: "40%", delay: 2 },
  { Icon: Shield, x: "65%", y: "30%", delay: 2.5 },
];

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("que-es")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border mb-8 bg-muted/50">
              <Search size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground font-mono">
                Caso #001 — Análisis de Sistemas
              </span>
            </div>
          </motion.div>

          {/* Simple fade effect for Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <span className="text-gradient">D.E.R.C.A.S</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/90 font-medium mb-4 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            El método para entender los sistemas
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            En el análisis y diseño de sistemas, comprender correctamente un problema
            antes de desarrollar una solución es fundamental. Descubre cómo aplicar esta
            técnica para estructurar la información con claridad.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={scrollToContent}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_hsl(190_95%_50%/0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Search size={20} />
          Comenzar la investigación
        </motion.button>

        <motion.div
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="mx-auto text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
