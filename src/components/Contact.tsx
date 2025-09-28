import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marnunrey2@gmail.com",
      href: "mailto:marnunrey2@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "María Núñez Reyes",
      href: "https://linkedin.com/in/maria-nuñez-reyes-59003423b"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@marnunrey2",
      href: "https://github.com/marnunrey2"
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or simply connecting with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="card-glow border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(item.href, '_blank')}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
