
import React from 'react';
import { ShieldCheck, Users, Clock, Star, CheckCircle } from "lucide-react";

const TrustBanner: React.FC = () => {
  return (
    <div className="bg-white border-y border-purple-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted by 1000+ Clients</h2>
          <p className="text-gray-600 mt-2">Join our growing community of satisfied customers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Verified Service</h3>
            <p className="text-sm text-gray-500 text-center">100% secure & trusted</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-gold-600" />
            </div>
            <h3 className="text-lg font-semibold">1000+ Clients</h3>
            <p className="text-sm text-gray-500 text-center">Satisfied customers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Flexible Time</h3>
            <p className="text-sm text-gray-500 text-center">Choose your duration</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">5-Star Rated</h3>
            <p className="text-sm text-gray-500 text-center">Premium quality</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">HD Quality</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Instant Connect</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
