
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Futuristic background elements */}
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
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
          </motion.div>
          
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2" 
                  // Fixed: Use proper className instead of classNames object
                  className={cn("h-2", {
                    [skill.color]: true
                  })}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Animated tech symbols */}
          <motion.div 
            className="absolute -right-8 top-1/4 text-4xl opacity-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div 
            className="absolute -left-8 bottom-1/4 text-4xl opacity-10"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            { }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
