import { motion } from "framer-motion";
import { GraduationCap, Rocket } from "lucide-react";

const Conclusion = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center p-10 rounded-2xl bg-card glow-box glow-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="text-primary" size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conclusión
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            El modelo DERCAS es una herramienta útil dentro del análisis de sistemas porque
            permite organizar la información de manera estructurada y comprender todos los
            elementos que intervienen en un sistema o proceso.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Al aplicar esta metodología, los analistas pueden identificar con mayor claridad
            los problemas existentes, definir los requerimientos del sistema y diseñar soluciones
            tecnológicas más efectivas.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Además, <strong className="text-foreground">DERCAS facilita la comunicación</strong> entre los
            diferentes participantes del proyecto, lo cual es fundamental para garantizar el éxito en el
            desarrollo de sistemas de información.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105"
          >
            <Rocket size={18} />
            Volver al inicio
          </button>
        </motion.div>

        <p className="text-center text-muted-foreground/50 text-sm mt-12 font-mono">
          Diseñado por Con ayuda de Herramientas, como Lovable, Gemini, idea original: Josué Pedroza
        </p>
      </div>
    </section>
  );
};

export default Conclusion;
