import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:dhayanithi5053@gmail.com",
      gradient: "from-portfolio-blue to-portfolio-cyan"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhayanithi-d77102b362",
      gradient: "from-portfolio-purple to-portfolio-pink"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Portfolio",
      href: "https://dhayanithi-portfolio.my.canva.site/",
      gradient: "from-portfolio-cyan to-portfolio-blue"
    }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">DHAYANITHI D</span>
            </h3>
            <p className="text-muted-foreground">
              Graphics Designer & Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                asChild
              >
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </div>
                </a>
              </Button>
            ))}
          </div>

          {/* Right - Quick Contact */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              Ready to collaborate?
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              asChild
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Dhayanithi D. All rights reserved.
            </p>
            
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;