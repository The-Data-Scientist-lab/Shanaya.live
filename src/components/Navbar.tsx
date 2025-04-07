
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-purple-200/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-purple-700">Shanaya<span className="text-gold-500">Live</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors">Home</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1.5 text-purple-700">
            <Shield className="h-4 w-4" />
            <span>Verified</span>
          </Button>
          <Button variant="default" size="sm" className={cn(
            "bg-purple-gradient hidden sm:flex items-center gap-1.5",
            "bg-purple-gradient hover:bg-purple-700 transition-colors"
          )}>
            <Phone className="h-4 w-4" />
            <span>Book Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
