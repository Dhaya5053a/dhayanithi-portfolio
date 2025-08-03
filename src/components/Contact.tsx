import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dhayanithi5053@gmail.com",
      link: "mailto:dhayanithi5053@gmail.com",
      gradient: "from-portfolio-blue to-portfolio-cyan"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9751503252",
      link: "tel:+919751503252",
      gradient: "from-portfolio-purple to-portfolio-pink"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Thanjavur - 613602",
      gradient: "from-portfolio-cyan to-portfolio-blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/dhayanithi-d77102b362",
      gradient: "from-portfolio-pink to-portfolio-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate and create something amazing together. I'm always open to discussing new opportunities and creative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${contact.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {contact.icon}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2 text-foreground">{contact.title}</h4>
                  
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{contact.value}</p>
                  )}
                </Card>
              ))}
            </div>

            {/* Additional Links */}
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-semibold mb-4 text-foreground">Portfolio Links</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  asChild
                >
                  <a href="https://dhayanithi-portfolio.my.canva.site/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-3" />
                    View My Canva Portfolio
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-200"
                  asChild
                >
                  <a href="https://www.techfest-2k24-care.shop/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-3" />
                    TechFest24 Project
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border/50">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Input 
                    placeholder="Project Collaboration" 
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..." 
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;