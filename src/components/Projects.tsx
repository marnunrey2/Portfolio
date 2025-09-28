import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const academicProjects = [
    {
      title: "SongBird",
      description: "Music recommendation platform aggregating data from multiple streaming services with content-based recommendation engine.",
      technologies: ["React", "Django", "REST APIs", "PostgreSQL", "AWS"],
      github: "https://github.com/marnunrey2/TFG-songbird",
      featured: true
    },
    {
      title: "Gender ID via Handwriting",
      description: "AI model predicting writer gender from handwriting samples. Achieved ~70% accuracy using image processing and ML.",
      technologies: ["Python", "OpenCV", "scikit-learn", "Image Processing", "Artificial Intelligence", "Machine Learning"],
      github: "https://github.com/marnunrey2/PIC-Identificacion-genero"
    },
    {
      title: "NexONG",
      description: "Web platform supporting educational management in underprivileged areas. Built with 20-person team using Scrum methodology.",
      technologies: ["React", "Django", "REST API", "PostgreSQL", "Scrum"],
      github: "https://github.com/ISPP-G5"
    },
    {
      title: "Decide Voting System",
      description: "Online voting system where admins could manage voters, create polls and questions; users could log in and vote.",
      technologies: ["React", "Django", "REST API", "PostgreSQL", "Authentication"],
      github: "https://github.com/marnunrey2/decide-marnunrey2"
    },
    {
      title: "DeliverUS",
      description: "Food ordering platform with product catalog, user orders, profiles, and admin interface. First React project.",
      technologies: ["React", "Express.js", "Node.js", "MariaDB"],
      github: "https://github.com/IISSI2-IS/frontend-deliverables-l-ingles-3"
    },
    {
      title: "Tarot Web App",
      description: "Web application with custom API simulating tarot readings. Features daily draws, spreads, and interactive games.",
      technologies: ["Java", "HTML", "REST API"],
      github: "https://github.com/marnunrey2/Tarot1"
    }
  ];

  const professionalProjects = [
    {
      title: "Expression of Interest Generator",
      description: "Automated tool for creating and managing expressions of interest in internal processes with Gemini AI integration.",
      technologies: ["React", "Python", "REST API", "FastAPI", "Gemini AI", "Process Automation"],
      company: "Eptisa TI"
    },
    {
      title: "Asphalt Management Solution",
      description: "Solution for managing roadworks and asphalt maintenance with data modeling and GIS visualization.",
      technologies: ["React", "Python", "REST API", "FastAPI", "Math Algorithms", "GIS Visualization"],
      company: "Eptisa TI"
    }, 
    {
      title: "Redexis Control Center Viewer",
      description: "Web GIS application for monitoring infrastructure networks. Responsible for frontend development and GIS programming.",
      technologies: ["GIS", "ArcGIS Pro", "ArcGIS Experience Builder", "JavaScript", "WebMaps", "FeatureLayers", "Utility Networks"],
      company: "Eptisa TI"
    }, 
    {
      title: "Correos Search Tool (Mindbreeze)",
      description: "Indexing and search tool for products, using Mindbreeze to improve search relevance.",
      technologies: ["Mindbreeze", "Indexing", "Search Optimization"],
      company: "Eptisa TI"
    }
  ];

  const ProjectCard = ({ project, isAcademic = true }: { project: any, isAcademic?: boolean }) => (
    <Card className="card-glow border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl mb-2 flex items-center gap-2">
            {project.title}
            {project.featured && (
              <Badge className="hero-gradient text-primary-foreground">Featured</Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            {project.github && (
              <Button variant="ghost" size="sm" className="p-2" onClick={() => window.open(project.github, '_blank')}>
                <Github className="w-4 h-4" />
              </Button>
            )}
            {project.demo && (
              <Button variant="ghost" size="sm" className="p-2">
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
        {!isAcademic && project.company && (
          <Badge variant="secondary" className="w-fit">{project.company}</Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of academic and professional work spanning web development, 
            data science, GIS applications, and innovative digital solutions.
          </p>
        </div>

        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="academic">Academic Projects</TabsTrigger>
            <TabsTrigger value="professional">Professional Work</TabsTrigger>
          </TabsList>
          
          <TabsContent value="academic">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicProjects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="professional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} isAcademic={false} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;