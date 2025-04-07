
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Star, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 text-purple-700 text-xs font-semibold py-1 px-3 rounded-full">Premium Quality</div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                  <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                  <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                  <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                  <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-shadow">
                Connect with <span className="text-gradient bg-purple-gold-gradient">Shanaya</span> <br />
                Live Video Calls
              </h1>
              
              <p className="text-lg text-gray-600">
                Enjoy premium, high-quality video calls with Shanaya. Choose from flexible time 
                packages starting from just ₹340 for 10 minutes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full gap-2 px-6">
                  <Phone className="h-5 w-5" />
                  Book Now
                </Button>
                <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full gap-2 px-6">
                  View Packages
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-600">1000+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/94b0b7ca-4f6b-4b9b-9a6b-291b4ba7bcf0.png" 
                  alt="Shanaya" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">Shanaya</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                    <span className="text-sm opacity-90">5.0 (352 reviews)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                      <span className="text-sm font-medium">Online Now</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-purple-100">
                <div className="text-center">
                  <span className="block text-sm text-gray-500">Starting from</span>
                  <span className="block text-2xl font-bold text-purple-700">₹340</span>
                  <span className="block text-xs text-gray-500">for 10 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold-300/20 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
