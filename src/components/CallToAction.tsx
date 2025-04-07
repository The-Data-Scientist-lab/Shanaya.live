
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-purple-gradient rounded-3xl overflow-hidden shadow-xl relative">
        <div className="absolute inset-0 bg-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Join over 1000 satisfied clients and experience premium video calls. Book your session now and enjoy a special first-time discount.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-xl gap-2">
              <Phone className="h-5 w-5" />
              Book Video Call
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-purple-700/50 rounded-xl gap-2">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* 3D Effect Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  );
};

export default CallToAction;
