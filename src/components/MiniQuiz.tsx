import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Brain, RotateCcw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: '¿Qué significa la letra "A" en DERCAS?',
    options: ["Aplicación", "Actores", "Algoritmo"],
    correct: 1,
  },
  {
    question: "¿Qué elemento describe los datos que ingresan al sistema?",
    options: ["Resultados", "Controles", "Entradas"],
    correct: 2,
  },
  {
    question: "¿Para qué se utiliza DERCAS en el análisis de sistemas?",
    options: [
      "Para programar aplicaciones directamente",
      "Para comprender un problema antes de desarrollar una solución",
      "Para diseñar bases de datos relacionales",
    ],
    correct: 1,
  },
  {
    question: "En un sistema de inventario, ¿qué representaría la 'E' (Entradas)?",
    options: [
      "El reporte de ventas mensual",
      "El código y la base de datos del sistema",
      "La recepción de mercancía de los proveedores",
    ],
    correct: 2,
  },
  {
    question: "¿Qué beneficios aporta el uso de DERCAS a un proyecto de software?",
    options: [
      "Evita errores comunes como desarrollar sistemas que no resuelven el problema",
      "Genera código automáticamente sin necesidad de programadores",
      "Aumenta la velocidad de los servidores de internet",
    ],
    correct: 0,
  },
];

const MiniQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentQ].correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const q = questions[currentQ];

  return (
    <section className="py-24 relative">
      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            Pon a prueba tu conocimiento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Mini <span className="text-gradient">Quiz</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-xl bg-card glow-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-muted-foreground">
                    Pregunta {currentQ + 1} de {questions.length}
                  </span>
                  <Brain className="text-primary" size={20} />
                </div>

                <h3 className="text-xl font-semibold mb-6">{q.question}</h3>

                <div className="space-y-3">
                  {q.options.map((opt, idx) => {
                    let optionStyle = "bg-muted/50 border-border hover:border-primary/50";
                    if (selected !== null) {
                      if (idx === q.correct) {
                        optionStyle = "bg-emerald-500/10 border-emerald-500/50";
                      } else if (idx === selected && idx !== q.correct) {
                        optionStyle = "bg-red-500/10 border-red-500/50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center gap-3 ${optionStyle}`}
                        disabled={selected !== null}
                      >
                        <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-mono shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {selected !== null && idx === q.correct && (
                          <CheckCircle2
                            size={20}
                            className="text-emerald-500"
                          />
                        )}
                        {selected === idx && idx !== q.correct && (
                          <XCircle size={20} className="text-red-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <p
                      className={`text-sm mb-4 ${
                        selected === q.correct
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {selected === q.correct
                        ? "¡Correcto! 🎉"
                        : `Incorrecto. La respuesta correcta es: ${q.options[q.correct]}`}
                    </p>
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105"
                    >
                      {currentQ < questions.length - 1
                        ? "Siguiente pregunta"
                        : "Ver resultados"}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-card glow-border text-center"
              >
                <div className="text-6xl font-bold text-gradient mb-4">
                  {score}/{questions.length}
                </div>
                <p className="text-xl font-semibold mb-2">
                  {score === questions.length
                    ? "¡Perfecto! Eres un verdadero analista 🕵️"
                    : score >= 2
                    ? "¡Muy bien! Casi dominas DERCAS 👏"
                    : "¡Sigue aprendiendo! Repasa el contenido 📚"}
                </p>
                <p className="text-muted-foreground mb-6">
                  Respondiste correctamente {score} de {questions.length}{" "}
                  preguntas.
                </p>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105"
                >
                  <RotateCcw size={16} />
                  Intentar de nuevo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MiniQuiz;
