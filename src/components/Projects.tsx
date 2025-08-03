import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TechFest24 Event Registration Website",
      description: "Developed a fully functional and user-friendly event registration website for TechFest24, a college-level technical fest. The platform enabled participants to browse event details and register online through validated forms, improving registration efficiency.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "User-friendly event registration system",
        "Responsive design for all devices", 
        "Form validation and real-time processing",
        "Live deployment with hosting platform"
      ],
      liveUrl: "https://www.techfest-2k24-care.shop/",
      category: "Web Development",
      gradient: "from-portfolio-blue to-portfolio-cyan"
    },
    {
      title: "Ocean Realm - 3D Environment",
      description: "Created an immersive 3D environment project titled 'Ocean Realm' using Blender, focusing on the realistic representation of an underwater world. The scene features detailed models of marine life, coral reefs, and dynamic lighting.",
      technologies: ["Blender", "3D Modeling", "Texturing", "Lighting"],
      features: [
        "Realistic underwater environment design",
        "Detailed marine life and coral reef models",
        "Advanced lighting and camera animation",
        "High-quality texturing and materials"
      ],
      category: "3D Design",
      gradient: "from-portfolio-purple to-portfolio-pink"
    },
    {
      title: "NLP Project with OpenAI",
      description: "Presented an open project on Natural Language Processing using Python and OpenAI at VARNAM'24, a national-level technical symposium held at Karpagam Institute of Technology, Coimbatore.",
      technologies: ["Python", "OpenAI API", "NLP", "Machine Learning"],
      features: [
        "Natural language processing implementation",
        "OpenAI API integration",
        "Python-based solution architecture",
        "Presented at national-level symposium"
      ],
      category: "AI/ML",
      gradient: "from-portfolio-cyan to-portfolio-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-to-br from-card to-secondary/30 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="secondary" 
                          className={`bg-gradient-to-r ${project.gradient} text-white border-none`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveUrl && (
                        <Button 
                          variant="default" 
                          className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-200"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      
                      <Button 
                        variant="outline" 
                        className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Section */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">🏆 Achievement</h3>
            <p className="text-lg text-muted-foreground">
              Presented an open project on NLP using Python and OpenAI at <strong className="text-foreground">VARNAM'24</strong>, 
              a national-level technical symposium held at Karpagam Institute of Technology, Coimbatore.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;