import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Passionate about visual storytelling and brand identity"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Enthusiast", 
      description: "Skilled in web development and programming languages"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "3D Modeling",
      description: "Creating immersive 3D environments and animations"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Self-motivated with strong problem-solving abilities"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Summary</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a CSE student passionate about blending technology with creativity. I'm learning 
                graphic design, web design, and 3D modeling through hands-on projects. I stay active 
                with fitness, and draw inspiration from music, movies, gaming, and anime. Always curious, 
                I'm excited to grow in both technical and creative fields.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Personal Strengths</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Quick learner and good team player
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Strong problem-solving ability
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-portfolio-cyan rounded-full"></div>
                  Creative thinking and attention to detail
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-portfolio-pink rounded-full"></div>
                  Self motivated & goal-oriented
                </li>
              </ul>
            </Card>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;