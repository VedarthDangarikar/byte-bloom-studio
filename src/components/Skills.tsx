
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code, Terminal, FileCode } from "lucide-react";

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skills: Skill[] = [
  {
    name: "C",
    level: 85,
    color: "bg-tech-c"
  },
  {
    name: "Java",
    level: 80,
    color: "bg-tech-java"
  },
  {
    name: "JavaScript",
    level: 75,
    color: "bg-tech-javascript"
  },
  {
    name: "React",
    level: 70,
    color: "bg-tech-react"
  },
  {
    name: "Tailwind CSS",
    level: 65,
    color: "bg-tech-tailwind"
  }
];

// Simulated code snippets
const codeSnippets = [
  "function optimizeCode() { /* ... */ }",
  "class DataStructure implements IStructure { }",
  "const renderComponent = () => <App />",
  "async function fetchData() { await api.get() }",
  "#include <stdio.h>",
  "public static void main(String[] args) { }"
];

const CodeElement = ({ delay = 0 }) => {
  const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0.3] }}
      transition={{ 
        duration: 4, 
        delay,
        repeat: Infinity, 
        repeatType: "reverse" 
      }}
      className="absolute text-xs md:text-sm font-mono text-primary/40 pointer-events-none select-none"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
      }}
    >
      {randomSnippet}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Code-themed background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-t-2 border-l-2 border-primary rounded-tl-xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-b-2 border-r-2 border-primary rounded-br-xl animate-spin-reverse-slow"></div>
        
        {/* Circuit pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/3 left-5 w-16 h-1 bg-primary/30 animate-pulse"></div>
          <div className="absolute top-1/3 left-20 w-1 h-16 bg-primary/30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-5 w-16 h-1 bg-primary/30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-20 w-1 h-16 bg-primary/30 animate-pulse"></div>
        </div>
        
        {/* Code snippets in background */}
        {Array.from({ length: 8 }).map((_, i) => (
          <CodeElement key={i} delay={i * 0.5} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-10"
          >
            <Code className="mr-2 text-primary" size={28} />
            <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
            <Terminal className="ml-2 text-primary" size={28} />
          </motion.div>
          <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-container relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium font-mono">{`<${skill.name}>`}</span>
                  <span className="font-mono text-primary">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className={cn("h-2", skill.color)}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Animated tech symbols */}
          <motion.div 
            className="absolute -right-8 top-1/4 text-4xl opacity-10 font-mono"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div 
            className="absolute -left-8 bottom-1/4 text-4xl opacity-10 font-mono"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            { }
          </motion.div>
          
          {/* Code file icon */}
          <motion.div
            className="absolute bottom-10 right-10 opacity-20"
            animate={{ 
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <FileCode size={70} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
