import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-20 relative">
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

          <div className="text-center">
            <Card className="card-glow border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're looking for a frontend developer, need help with a full-stack project, 
                  or want to discuss innovative tech solutions, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                    onClick={() => window.open('mailto:marnunrey2@gmail.com', '_blank')}
                  >
                    Send Me an Email
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://linkedin.com/in/maria-nuñez-reyes-59003423b', '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;