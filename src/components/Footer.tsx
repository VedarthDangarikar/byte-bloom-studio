
import { Github, Linkedin, Instagram, Mail, Code, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/Pratik2355"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pratik-patil-37322128a"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/_patil_pratik.23"
    },
    {
      icon: <Code size={20} />,
      label: "CodeChef",
      href: "https://www.codechef.com/users/pratikpatil88"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:pp8017435@gmail.com"
    }
  ];
  
  return (
    <footer className="bg-background py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              &copy; {currentYear} Pratik Patil
              <motion.span
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <Heart size={14} className="text-primary" />
              </motion.span>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
