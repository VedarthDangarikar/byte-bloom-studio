
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/40 rounded-full blur-3xl"></div>
      </div>
      
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
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Computer Engineer
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
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#contact">Contact Me</a>
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
