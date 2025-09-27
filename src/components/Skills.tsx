import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "UI/UX"]
    },
    {
      title: "Backend Development", 
      skills: ["Django", "Flask", "Express.js", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Authentication"]
    },
    {
      title: "Data Science & AI",
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "OpenCV", "Jupyter", "Data Visualization", "Machine Learning"]
    },
    {
      title: "GIS & Mapping",
      skills: ["Web GIS", "Geospatial Data", "Map Layers", "Interactive Maps", "GeoPandas", "Folium", "Infrastructure Mapping"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Scrum", "AWS", "Stripe API", "External APIs", "Project Management", "Team Collaboration"]
    },
    {
      title: "Specialized Skills",
      skills: ["Image Processing", "Content-based Algorithms", "Payment Integration", "User Management", "Process Automation"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 section-gradient opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through academic projects and professional experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-glow border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Always learning and adapting to new technologies. Currently exploring modern frontend frameworks, 
            cloud technologies, and advanced data visualization techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;