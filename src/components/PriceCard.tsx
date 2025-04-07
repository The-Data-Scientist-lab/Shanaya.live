import React from 'react';
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  minutes: number;
  price: number;
  popular?: boolean;
  description: string;
  bgClass?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ 
  minutes, 
  price, 
  popular = false,
  description,
  bgClass = "bg-white"
}) => {
  return (
    <div className={cn(
      "relative",
      popular ? "z-10" : ""
    )}>
      <div className={cn(
        "rounded-xl border shadow-md overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1",
        popular ? "border-gold-500 shadow-gold-100/50" : "border-purple-200",
        bgClass
      )}>
        {popular && (
          <div className="absolute -top-3 left-0 right-0 mx-auto w-32 bg-gold-500 text-white text-center py-1 rounded-full text-xs font-semibold shadow-md">
            MOST POPULAR
          </div>
        )}
        
        <div className="p-5 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="mb-1">
              <span className={cn(
                "text-xl font-semibold",
                popular ? "text-gold-600" : "text-purple-700"
              )}>
                {minutes} Minutes
              </span>
            </div>
            
            <div className="flex items-center justify-center mb-2">
              <span className="text-gray-400 text-lg mr-1">₹</span>
              <span className={cn(
                "text-3xl font-bold",
                popular ? "text-gold-600" : "text-purple-700"
              )}>
                {price}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div className="text-center mb-4 flex-grow">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          
          {/* Button */}
          <Button 
            className={cn(
              "w-full rounded-full font-medium shadow-sm transition-all hover:shadow-md",
              popular 
                ? "bg-gold-500 hover:bg-gold-600 text-white" 
                : "bg-purple-600 hover:bg-purple-700 text-white"
            )}
          >
            <Video className="h-4 w-4 mr-2" />
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
