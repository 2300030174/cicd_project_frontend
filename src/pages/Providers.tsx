import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MapPin, Phone, Mail, Calendar, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Providers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const providers = [
    {
      id: 1,
      name: "Mike's Plumbing",
      specialties: ["Plumbing", "Emergency Repairs"],
      description: "Licensed plumber with 15+ years experience in residential and commercial plumbing",
      rating: 4.8,
      reviews: 127,
      location: "Downtown Area",
      phone: "+1 (555) 123-4567",
      email: "mike@mikesplumbing.com",
      experience: "15 years",
      certifications: ["Licensed Plumber", "Emergency Services"],
      avatar: "👨‍🔧",
      priceRange: "$80-150/hour",
      availability: "24/7",
    },
    {
      id: 2,
      name: "CleanPro Services",
      specialties: ["Deep Cleaning", "Office Cleaning"],
      description: "Professional cleaning company providing eco-friendly cleaning solutions",
      rating: 4.9,
      reviews: 89,
      location: "City Wide",
      phone: "+1 (555) 234-5678",
      email: "info@cleanpro.com",
      experience: "8 years",
      certifications: ["Eco-Certified", "Insured & Bonded"],
      avatar: "🧽",
      priceRange: "$25-40/hour",
      availability: "Mon-Sat 8AM-6PM",
    },
    {
      id: 3,
      name: "PowerUp Electric",
      specialties: ["Electrical", "Smart Home"],
      description: "Certified electricians specializing in modern electrical solutions and smart home installations",
      rating: 4.7,
      reviews: 156,
      location: "Metro Area",
      phone: "+1 (555) 345-6789",
      email: "service@powerupelectric.com",
      experience: "12 years",
      certifications: ["Master Electrician", "Smart Home Certified"],
      avatar: "⚡",
      priceRange: "$75-120/hour",
      availability: "Mon-Fri 7AM-7PM",
    },
    {
      id: 4,
      name: "ColorCraft Painters",
      specialties: ["Interior Painting", "Exterior Painting"],
      description: "Premium painting services with attention to detail and quality materials",
      rating: 4.6,
      reviews: 203,
      location: "Suburbs",
      phone: "+1 (555) 456-7890",
      email: "hello@colorcraft.com",
      experience: "20 years",
      certifications: ["Licensed Contractor", "Lead-Safe Certified"],
      avatar: "🎨",
      priceRange: "$35-55/hour",
      availability: "Mon-Sat 6AM-8PM",
    },
    {
      id: 5,
      name: "CoolAir Solutions",
      specialties: ["HVAC", "AC Repair"],
      description: "HVAC specialists providing installation, repair, and maintenance services",
      rating: 4.8,
      reviews: 98,
      location: "City Wide",
      phone: "+1 (555) 567-8901",
      email: "support@coolair.com",
      experience: "10 years",
      certifications: ["EPA Certified", "NATE Certified"],
      avatar: "❄️",
      priceRange: "$90-140/hour",
      availability: "Mon-Sun 6AM-10PM",
    },
    {
      id: 6,
      name: "SecureHome Pro",
      specialties: ["Security Systems", "Home Automation"],
      description: "Advanced security and home automation solutions for modern homes",
      rating: 4.9,
      reviews: 76,
      location: "Metro Area",
      phone: "+1 (555) 678-9012",
      email: "contact@securehome.com",
      experience: "7 years",
      certifications: ["Security Licensed", "Home Automation Certified"],
      avatar: "🛡️",
      priceRange: "$85-130/hour",
      availability: "24/7",
    },
  ];

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactProvider = (provider: any) => {
    toast({
      title: "Contact Information",
      description: `You can reach ${provider.name} at ${provider.phone} or ${provider.email}`,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Providers
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with verified professionals in your area
          </p>
          <SearchBar
            placeholder="Search providers by name, specialty, or service..."
            onSearch={setSearchQuery}
            className="max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider, index) => (
            <Card key={provider.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{provider.avatar}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{provider.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {provider.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{provider.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4 text-secondary" />
                    <span>{provider.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{provider.availability}</span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-primary">{provider.priceRange}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full">
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <span className="text-2xl">{provider.avatar}</span>
                          <span>{provider.name}</span>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {provider.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-muted-foreground">{provider.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium">Experience</p>
                            <p className="text-muted-foreground">{provider.experience}</p>
                          </div>
                          <div>
                            <p className="font-medium">Rate</p>
                            <p className="text-muted-foreground">{provider.priceRange}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium">Certifications</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {provider.certifications.map((cert) => (
                              <Badge key={cert} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-muted-foreground">{provider.availability}</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Service Area</p>
                          <p className="text-muted-foreground">{provider.location}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}/5</span>
                          <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                        </div>
                        
                        <div className="space-y-2">
                          <Button 
                            variant="hero" 
                            className="w-full"
                            onClick={() => handleContactProvider(provider)}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Provider
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleContactProvider(provider)}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No providers found matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Providers;