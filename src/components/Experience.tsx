import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "CARE College Of Engineering (Trichy)",
      period: "2022 - 2026",
      grade: "CGPA: 7.8",
      status: "Current"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "GOVT.BOYS.HR.SCHOOL (Budalur)",
      period: "2022",
      grade: "Percentage: 66.34%",
      status: "Completed"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "GOVT.BOYS.HR.SCHOOL (Budalur)",
      period: "2020",
      grade: "Percentage: 79.60%",
      status: "Completed"
    }
  ];

  const workExperience = {
    title: "Graphic Designer",
    company: "TEKNO SPOT",
    location: "Trichy",
    period: "June 2025 - September 2025",
    duration: "3 Months (Current)",
    responsibilities: [
      "Created visual content such as logos, social media designs, and promotional materials",
      "Edited videos for marketing and client projects using Adobe Premiere Pro and After Effects",
      "Collaborated with the creative team to ensure brand consistency and timely delivery"
    ]
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">{workExperience.title}</h4>
                  <p className="text-primary font-medium">{workExperience.company}</p>
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30"
                >
                  Current
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {workExperience.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {workExperience.location}
                </div>
              </div>

              <p className="text-sm text-accent mb-4">{workExperience.duration}</p>
              
              <div className="space-y-3">
                {workExperience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{responsibility}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-6 h-6 text-accent">🎓</div>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground leading-tight">{edu.degree}</h4>
                    <Badge 
                      variant={edu.status === "Current" ? "default" : "secondary"}
                      className={edu.status === "Current" ? "bg-primary" : ""}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <p className="text-accent font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="font-medium text-foreground">
                      {edu.grade}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;