
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Braces, Code, Terminal } from "lucide-react";

// Matrix-like character animation
const MatrixRain = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-[0.03]">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary font-mono text-lg"
          initial={{ y: -100, x: `${(i / 20) * 100}%` }}
          animate={{ y: "100vh" }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {Array.from({ length: 15 }).map((_, j) => (
            <div key={j} className="my-1">
              {String.fromCharCode(Math.floor(Math.random() * 74) + 48)}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Floating code symbols
const FloatingSymbols = () => {
  const symbols = ['{ }', '( )', '[ ]', '< >', '//', '/*', '*/', '=>', '&&', '||'];
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10 font-mono text-2xl md:text-4xl"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }}
          initial={{ opacity: 0.1, scale: 0.7 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            y: [0, -10, 0],
            rotate: [0, Math.random() * 5, 0]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative overflow-hidden font-mono">
      {/* Matrix-like characters rain */}
      <MatrixRain />
      
      {/* Floating code symbols */}
      <FloatingSymbols />
      
      {/* Futuristic background grid */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-primary/20"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full border-b border-primary/20"></div>
          ))}
        </div>
      </div>
      
      {/* Code editor style header */}
      <div className="fixed top-0 left-0 w-full h-6 bg-secondary/20 flex items-center px-4 z-20 text-xs text-primary/50 font-mono pointer-events-none">
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500/50"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500/50"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500/50"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          ></motion.div>
        </div>
        <div className="ml-auto flex gap-4">
          <span>portfolio.tsx</span>
          <span>│ UTF-8</span>
          <span>│ JavaScript</span>
        </div>
      </div>
      
      {/* Terminal-style line numbers on the side */}
      <div className="fixed top-6 left-0 h-full w-8 bg-secondary/10 flex flex-col items-end pt-20 px-2 text-xs text-primary/30 font-mono z-10 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0] 
        }}
        className="relative z-10 pl-8" // Add left padding to account for line numbers
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
      
      {/* Animated corner code brackets */}
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 pointer-events-none font-mono text-xs text-primary/30 flex items-start justify-start pl-2 pt-1"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"<"}
      </motion.div>
      <motion.div 
        className="fixed bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50 pointer-events-none font-mono text-xs text-primary/30 flex items-end justify-end pr-2 pb-1"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        {"/>"}
      </motion.div>

      {/* Floating code icons */}
      <motion.div
        className="fixed bottom-10 left-10 text-primary/10 pointer-events-none"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Terminal size={60} />
      </motion.div>
      
      <motion.div
        className="fixed top-1/4 right-10 text-primary/10 pointer-events-none"
        animate={{
          y: [5, -5, 5],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Braces size={50} />
      </motion.div>
    </div>
  );
};

export default Index;
