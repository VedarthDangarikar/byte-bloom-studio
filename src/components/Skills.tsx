
import { Progress } from "@/components/ui/progress";

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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>
          
          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
