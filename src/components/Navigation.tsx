import { Button } from "@/components/ui/button";
import { Home, Search, Calendar, User, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  onLogout: () => void;
}

const Navigation = ({ onLogout }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Search, label: "Services", path: "/services" },
    { icon: User, label: "Providers", path: "/providers" },
    { icon: Calendar, label: "Bookings", path: "/bookings" },
  ];

  return (
    <nav className="glass-effect border-b bg-white/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary-foreground to-secondary-foreground bg-clip-text text-transparent">
              HomeServices
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                size="sm"
                onClick={() => navigate(item.path)}
                className="flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          <Button variant="ghost" size="sm" onClick={onLogout} className="flex items-center space-x-2">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center space-y-1 h-auto py-2"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;