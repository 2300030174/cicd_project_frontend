import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const services = [
    {
      id: 1,
      title: "Emergency Plumbing Repair",
      category: "Plumbing",
      description: "24/7 emergency plumbing services for leaks, clogs, and pipe repairs",
      price: "$80-150",
      duration: "1-3 hours",
      rating: 4.8,
      reviews: 127,
      provider: "Mike's Plumbing",
      location: "Downtown Area",
      image: "🔧",
    },
    {
      id: 2,
      title: "House Deep Cleaning",
      category: "Cleaning",
      description: "Complete deep cleaning service for homes and apartments",
      price: "$120-200",
      duration: "3-5 hours",
      rating: 4.9,
      reviews: 89,
      provider: "CleanPro Services",
      location: "City Wide",
      image: "✨",
    },
    {
      id: 3,
      title: "Electrical Installation",
      category: "Electrical",
      description: "Safe electrical installations and wiring for homes and offices",
      price: "$100-300",
      duration: "2-4 hours",
      rating: 4.7,
      reviews: 156,
      provider: "PowerUp Electric",
      location: "Metro Area",
      image: "⚡",
    },
    {
      id: 4,
      title: "Interior Painting",
      category: "Painting",
      description: "Professional interior painting with premium materials",
      price: "$200-500",
      duration: "1-2 days",
      rating: 4.6,
      reviews: 203,
      provider: "ColorCraft Painters",
      location: "Suburbs",
      image: "🎨",
    },
    {
      id: 5,
      title: "AC Repair & Maintenance",
      category: "HVAC",
      description: "Air conditioning repair, maintenance, and installation services",
      price: "$90-250",
      duration: "1-3 hours",
      rating: 4.8,
      reviews: 98,
      provider: "CoolAir Solutions",
      location: "City Wide",
      image: "❄️",
    },
    {
      id: 6,
      title: "Home Security Setup",
      category: "Security",
      description: "Complete home security system installation and monitoring",
      price: "$300-800",
      duration: "4-6 hours",
      rating: 4.9,
      reviews: 76,
      provider: "SecureHome Pro",
      location: "Metro Area",
      image: "🛡️",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookService = (service: any) => {
    toast({
      title: "Service Booked!",
      description: `${service.title} has been added to your bookings.`,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Services
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Find and book professional home services in your area
          </p>
          <SearchBar
            placeholder="Search services, categories, or descriptions..."
            onSearch={setSearchQuery}
            className="max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={service.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{service.image}</div>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.rating}</span>
                  <span>({service.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{service.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium">By {service.provider}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <span className="text-2xl">{service.image}</span>
                          <span>{service.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">{service.category}</Badge>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium">Price Range</p>
                            <p className="text-muted-foreground">{service.price}</p>
                          </div>
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-muted-foreground">{service.duration}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium">Provider</p>
                          <p className="text-muted-foreground">{service.provider}</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Service Area</p>
                          <p className="text-muted-foreground">{service.location}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}/5</span>
                          <span className="text-muted-foreground">({service.reviews} reviews)</span>
                        </div>
                        
                        <Button 
                          variant="hero" 
                          className="w-full"
                          onClick={() => handleBookService(service)}
                        >
                          Book This Service
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No services found matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;