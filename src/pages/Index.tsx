
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
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
      
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0] 
        }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
      
      {/* Animated corner elements */}
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50 pointer-events-none"
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
      />
    </div>
  );
};

export default Index;
