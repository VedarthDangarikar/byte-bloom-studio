
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="bg-gradient-to-br from-muted to-muted/20 p-1 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">Computer Engineer</h3>
              <p className="text-muted-foreground">
                I'm a passionate Computer Engineer with expertise in building high-performance applications and solving complex problems. My journey in technology started with C programming, and I've since expanded my skills to include Java, JavaScript, React, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground">
                I enjoy taking on challenging projects that push my abilities and allow me to learn new technologies. Whether it's developing efficient algorithms, creating intuitive user interfaces, or optimizing system performance, I approach each task with dedication and attention to detail.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="gap-2 group">
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h4 className="text-2xl font-bold text-primary">3+</h4>
              <p className="text-muted-foreground mt-2">Years of Experience</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h4 className="text-2xl font-bold text-primary">15+</h4>
              <p className="text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h4 className="text-2xl font-bold text-primary">5+</h4>
              <p className="text-muted-foreground mt-2">Technologies Mastered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
