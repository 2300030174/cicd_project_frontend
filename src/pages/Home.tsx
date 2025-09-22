import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Sparkles, Paintbrush, Droplets, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Expert plumbing repairs and installations",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Safe and reliable electrical services",
      color: "from-secondary to-secondary-glow",
    },
    {
      icon: Sparkles,
      title: "Cleaning",
      description: "Professional home and office cleaning",
      color: "from-accent to-accent/80",
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Interior and exterior painting services",
      color: "from-primary to-secondary",
    },
    {
      icon: Droplets,
      title: "HVAC",
      description: "Heating, ventilation, and air conditioning",
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Home security system installation",
      color: "from-accent to-primary",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Professional Home Services
            <span className="block text-secondary-foreground mt-2">At Your Doorstep</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with trusted professionals for all your home service needs. 
            Quality work, transparent pricing, and satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/services")}
              className="animate-slide-up"
            >
              Book a Service
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/providers")}
              className="animate-slide-up bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30"
            >
              Find Providers
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive home services by verified professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover-lift cursor-pointer group"
                onClick={() => navigate("/services")}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust us with their home services
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate("/services")}
          >
            Book Your First Service
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;