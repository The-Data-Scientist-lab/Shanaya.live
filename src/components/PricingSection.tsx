
import React from 'react';
import PriceCard from './PriceCard';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock } from "lucide-react";

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      minutes: 10,
      price: 340,
      description: "Nude video call for 10 minutes.",
      bgClass: "bg-white"
    },
    {
      minutes: 15,
      price: 490,
      description: "Black Dress nude video call for 15 minutes.",
      bgClass: "bg-purple-50"
    },
    {
      minutes: 20,
      price: 540,
      popular: true,
      description: "Red Saree Nude video Call for 20 minutes.",
      bgClass: "bg-gradient-to-br from-white to-purple-50"
    },
    {
      minutes: 30,
      price: 630,
      description: "Black Saree nude video call with full makeup.",
      bgClass: "bg-white"
    },
    {
      minutes: 45,
      price: 740,
      description: "Red Saree Nude video call with full makeup.",
      bgClass: "bg-purple-50"
    },
    {
      minutes: 60,
      price: 790,
      description: "60 minutes recorded nude video .",
      bgClass: "bg-white"
    },
    {
      minutes: 90,
      price: 850,
      description: "Your choice dress recorded video call 90 minutes.",
      bgClass: "bg-purple-50"
    },
    {
      minutes: 120,
      price: 2200,
      description: "1 week daily 20 minutes video call.",
      bgClass: "bg-gradient-to-br from-white to-purple-50"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-purple-gold-gradient inline-block">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-gray-600">
              Select from our flexible time packages to connect with Shanaya through high-quality video calls.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Clock className="h-3 w-3 mr-1" /> Flexible Timing
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                <Shield className="h-3 w-3 mr-1" /> Secure Calls
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-xl">
            <Avatar className="h-12 w-12 border-2 border-purple-200">
              <AvatarImage src="/lovable-uploads/94b0b7ca-4f6b-4b9b-9a6b-291b4ba7bcf0.png" alt="Shanaya" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <span className="font-semibold text-purple-700 mr-2">Shanaya</span>
                <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">Online</span>
              </div>
              <div className="flex items-center mt-1">
                <Star className="h-3 w-3 text-gold-500 fill-gold-500" />
                <span className="text-xs text-gray-500 ml-1">5.0 (1000+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {pricingPlans.map((plan, index) => (
            <PriceCard
              key={index}
              minutes={plan.minutes}
              price={plan.price}
              popular={plan.popular}
              description={plan.description}
              bgClass={plan.bgClass}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-purple-50 rounded-xl p-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-green-700">Currently Available</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">1000+ Satisfied Clients</h3>
          <p className="text-gray-600 max-w-lg mx-auto">
            Join our growing community of happy customers who enjoy high-quality video calls.
            Secure payment, instant access.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-16 w-64 h-64 bg-gold-300/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default PricingSection;
