import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code, 
  Monitor, 
  Camera, 
  Video, 
  Brush,
  Boxes,
  FileCode
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Creative",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Graphic Design", "Logo Design", "Photo Editing", "Video Editing"],
      gradient: "from-portfolio-pink to-portfolio-purple"
    },
    {
      title: "Web Development", 
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML & CSS", "JavaScript", "Web Design", "Responsive Design"],
      gradient: "from-portfolio-blue to-portfolio-cyan"
    },
    {
      title: "Programming",
      icon: <FileCode className="w-6 h-6" />,
      skills: ["Python", "Java", "Problem Solving", "Algorithm Design"],
      gradient: "from-portfolio-purple to-portfolio-blue"
    },
    {
      title: "3D & Animation",
      icon: <Boxes className="w-6 h-6" />,
      skills: ["Blender", "3D Design", "3D Animation", "Environmental Design"],
      gradient: "from-portfolio-cyan to-portfolio-pink"
    }
  ];

  const allSkills = [
    { name: "Graphic Design", level: 90 },
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "Java", level: 65 },
    { name: "Blender", level: 80 },
    { name: "3D Design", level: 75 },
    { name: "Video Editing", level: 85 },
    { name: "Photo Editing", level: 88 },
    { name: "Logo Design", level: 92 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse skill set spanning creative design, web development, and emerging technologies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-secondary/30 border-border/50 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="font-semibold mb-4 text-foreground">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="mr-2 mb-2 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50">
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {allSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1.5s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

    </section>
  );
};

export default Skills;