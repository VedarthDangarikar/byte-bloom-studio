
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Technology = 'all' | 'c' | 'java' | 'javascript' | 'react' | 'tailwind';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Data Structure Visualizer",
    description: "An interactive application that visualizes common data structures such as linked lists, trees, and graphs using C.",
    technologies: ['c'],
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A Java-based desktop application for tracking inventory items, managing stock, and generating reports.",
    technologies: ['java'],
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Personal Task Manager",
    description: "A JavaScript web application that helps users organize tasks, set priorities, and track progress.",
    technologies: ['javascript'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A React application that displays current and forecasted weather data fetched from a public API.",
    technologies: ['javascript', 'react'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "E-commerce UI",
    description: "A responsive e-commerce user interface built with React and styled with Tailwind CSS.",
    technologies: ['javascript', 'react', 'tailwind'],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "This portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    technologies: ['javascript', 'react', 'tailwind'],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<Technology>('all');
  
  const filteredProjects = selectedTech === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedTech));
    
  const getTechColor = (tech: Technology) => {
    switch(tech) {
      case 'c': return 'bg-tech-c text-black';
      case 'java': return 'bg-tech-java text-white';
      case 'javascript': return 'bg-tech-javascript text-black';
      case 'react': return 'bg-tech-react text-black';
      case 'tailwind': return 'bg-tech-tailwind text-white';
      default: return 'bg-secondary';
    }
  };
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            variant={selectedTech === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('all')}
            className="transition-all duration-300"
          >
            All
          </Button>
          <Button 
            variant={selectedTech === 'c' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('c')}
            className="transition-all duration-300"
          >
            C
          </Button>
          <Button 
            variant={selectedTech === 'java' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('java')}
            className="transition-all duration-300"
          >
            Java
          </Button>
          <Button 
            variant={selectedTech === 'javascript' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('javascript')}
            className="transition-all duration-300"
          >
            JavaScript
          </Button>
          <Button 
            variant={selectedTech === 'react' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('react')}
            className="transition-all duration-300"
          >
            React
          </Button>
          <Button 
            variant={selectedTech === 'tailwind' ? 'default' : 'outline'}
            onClick={() => setSelectedTech('tailwind')}
            className="transition-all duration-300"
          >
            Tailwind
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={item}>
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className={`${getTechColor(tech)}`}>
                        {tech.charAt(0).toUpperCase() + tech.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild className="group">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github size={16} className="group-hover:rotate-12 transition-transform" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild className="group">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
