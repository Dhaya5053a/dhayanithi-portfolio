import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/portfolio-hero.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">DHAYANITHI D</span>
            <span className="block gradient-text text-4xl md:text-5xl mt-2">
              GRAPHICS DESIGNER & DEVELOPER
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Blending creativity with technology to create stunning digital experiences
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              dhayanithi5053@gmail.com
            </div>
            <div className="flex items-center gap-2">
              📍 Thanjavur - 613602
            </div>
            <div className="flex items-center gap-2">
              📱 +91 9751503252
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 animate-pulse-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://dhayanithi-portfolio.my.canva.site/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Portfolio
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/50 hover:border-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/dhayanithi-d77102b362" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;