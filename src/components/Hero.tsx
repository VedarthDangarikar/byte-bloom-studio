
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
          <p className="text-primary font-medium mb-4">Hello, I'm a</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Engineer</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create efficient, scalable solutions with a focus on clean code and user experience. Bringing ideas to life through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
