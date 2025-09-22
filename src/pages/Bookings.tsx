import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Bookings = () => {
  const { toast } = useToast();

  const currentBookings = [
    {
      id: 1,
      serviceName: "Emergency Plumbing Repair",
      provider: "Mike's Plumbing",
      date: "2024-01-20",
      time: "2:00 PM",
      status: "Confirmed",
      location: "123 Main St, Downtown",
      price: "$120",
      image: "🔧",
      providerPhone: "+1 (555) 123-4567",
      estimatedDuration: "2-3 hours",
    },
    {
      id: 2,
      serviceName: "House Deep Cleaning",
      provider: "CleanPro Services",
      date: "2024-01-22",
      time: "10:00 AM",
      status: "In Progress",
      location: "456 Oak Ave, Suburbs",
      price: "$180",
      image: "✨",
      providerPhone: "+1 (555) 234-5678",
      estimatedDuration: "4-5 hours",
    },
  ];

  const pastBookings = [
    {
      id: 3,
      serviceName: "Electrical Installation",
      provider: "PowerUp Electric",
      date: "2024-01-15",
      time: "1:00 PM",
      status: "Completed",
      location: "789 Pine St, Metro Area",
      price: "$250",
      image: "⚡",
      rating: 5,
      review: "Excellent service! Professional and efficient work.",
    },
    {
      id: 4,
      serviceName: "Interior Painting",
      provider: "ColorCraft Painters",
      date: "2024-01-10",
      time: "9:00 AM",
      status: "Completed",
      location: "321 Elm St, Suburbs",
      price: "$400",
      image: "🎨",
      rating: 4,
      review: "Great job on the painting. Very satisfied with the results.",
    },
    {
      id: 5,
      serviceName: "AC Repair & Maintenance",
      provider: "CoolAir Solutions",
      date: "2024-01-05",
      time: "11:00 AM",
      status: "Completed",
      location: "654 Maple Dr, City Wide",
      price: "$180",
      image: "❄️",
      rating: 5,
      review: "Fixed the AC quickly and explained everything clearly.",
    },
  ];

  const handleContactProvider = (provider: string, phone: string) => {
    toast({
      title: "Contact Provider",
      description: `Calling ${provider} at ${phone}`,
    });
  };

  const handleCancelBooking = (bookingId: number) => {
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been cancelled successfully.",
      variant: "destructive",
    });
  };

  const handleReschedule = (bookingId: number) => {
    toast({
      title: "Reschedule Request",
      description: "We'll contact you shortly to reschedule your appointment.",
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Bookings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your current and past service bookings
          </p>
        </div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="current">Current Bookings</TabsTrigger>
            <TabsTrigger value="past">Past Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {currentBookings.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    No current bookings
                  </p>
                  <Button variant="hero">Book a Service</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentBookings.map((booking, index) => (
                  <Card key={booking.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{booking.image}</div>
                          <div>
                            <CardTitle className="text-lg">{booking.serviceName}</CardTitle>
                            <p className="text-sm text-muted-foreground">by {booking.provider}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={booking.status === "Confirmed" ? "default" : "secondary"}
                          className={booking.status === "In Progress" ? "bg-accent text-accent-foreground" : ""}
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{booking.date} at {booking.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span>{booking.estimatedDuration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{booking.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-lg font-semibold text-primary">{booking.price}</span>
                      </div>
                      
                      <div className="flex flex-col space-y-2 pt-2">
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => handleContactProvider(booking.provider, booking.providerPhone)}
                          className="flex items-center space-x-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Contact Provider</span>
                        </Button>
                        
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleReschedule(booking.id)}
                            className="flex-1"
                          >
                            Reschedule
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleCancelBooking(booking.id)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {pastBookings.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    No past bookings to display
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pastBookings.map((booking, index) => (
                  <Card key={booking.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{booking.image}</div>
                          <div>
                            <CardTitle className="text-lg">{booking.serviceName}</CardTitle>
                            <p className="text-sm text-muted-foreground">by {booking.provider}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {booking.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{booking.date} at {booking.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{booking.location}</span>
                        </div>
                      </div>
                      
                      {booking.rating && (
                        <div className="space-y-2 pt-2 border-t">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">Your Rating:</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < booking.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          {booking.review && (
                            <p className="text-sm text-muted-foreground italic">
                              "{booking.review}"
                            </p>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-lg font-semibold text-primary">{booking.price}</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Book Again
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Bookings;