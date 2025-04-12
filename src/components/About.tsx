
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-muted to-muted/20 p-1 rounded-lg">
              <div className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Computer Engineer</h3>
              <p className="text-muted-foreground">
                I'm a passionate Computer Engineer with expertise in building high-performance applications and solving complex problems. My journey in technology started with C programming, and I've since expanded my skills to include Java, JavaScript, React, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground">
                I enjoy taking on challenging projects that push my abilities and allow me to learn new technologies. Whether it's developing efficient algorithms, creating intuitive user interfaces, or optimizing system performance, I approach each task with dedication and attention to detail.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="gap-2">
                  <FileText size={18} />
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
