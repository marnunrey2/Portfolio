import { Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Expert",
      description: "React, JavaScript, TypeScript with modern UI frameworks"
    },
    {
      icon: Database,
      title: "Full-Stack Skills",
      description: "Django, Express.js, PostgreSQL, REST APIs"
    },
    {
      icon: Globe,
      title: "GIS & Mapping",
      description: "Web GIS applications and geospatial visualization"
    },
    {
      icon: Zap,
      title: "Data Science",
      description: "Python, ML, data analysis and visualization"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer with expertise spanning frontend development, full-stack solutions, 
            GIS applications, and data science. I create digital experiences that combine 
            technical excellence with user-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="card-glow animate-fade-in border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Currently working at <span className="text-primary font-semibold">Eptisa TI</span>, 
            developing innovative solutions for infrastructure management and geospatial applications.
            My academic background includes projects ranging from AI-powered systems to 
            full-stack web platforms.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;