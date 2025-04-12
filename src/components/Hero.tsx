
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Binary data stream animation component
const BinaryStream = () => {
  const [binaryText, setBinaryText] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate random binary strings
    const generateBinary = () => {
      const result: string[] = [];
      for (let i = 0; i < 20; i++) {
        let line = '';
        for (let j = 0; j < 8; j++) {
          line += Math.round(Math.random()) ? '1' : '0';
        }
        result.push(line);
      }
      setBinaryText(result);
    };
    
    generateBinary();
    const interval = setInterval(generateBinary, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute top-0 right-0 bottom-0 w-36 overflow-hidden opacity-10 pointer-events-none select-none">
      {binaryText.map((line, idx) => (
        <motion.div 
          key={idx}
          className="font-mono text-xs text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 1, 0], y: [0, 200] }}
          transition={{ 
            duration: 10, 
            ease: "linear", 
            delay: idx * 0.5,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/40 rounded-full blur-3xl"></div>
      </div>
      
      {/* Scanning line animation */}
      <motion.div
        className="absolute left-0 h-0.5 w-full bg-primary/30 z-10 overflow-hidden"
        animate={{ 
          top: ["0%", "100%", "0%"],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      {/* Circuit board elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute left-10 top-1/3 w-16 h-16">
          <motion.div 
            className="absolute inset-0 border border-primary/20 rounded"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-2 border border-primary/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute right-10 bottom-1/3 w-24 h-24">
          <motion.div 
            className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      
      {/* Binary streams */}
      <BinaryStream />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-medium mb-4">Hello, I'm a</p>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="relative z-10">Computer Engineer</span>
            <motion.span 
              className="absolute -inset-1 bg-primary/10 rounded-md -z-10"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            ></motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I create efficient, scalable solutions with a focus on clean code and user experience. Bringing ideas to life through technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <a href="#projects">
                <span className="relative z-10">View My Work</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="group relative overflow-hidden">
              <a href="#contact">
                <span className="relative z-10">Contact Me</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/10 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
