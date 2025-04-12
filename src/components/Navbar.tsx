
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">
          Portfolio<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2" 
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2" 
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2" 
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2" 
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
