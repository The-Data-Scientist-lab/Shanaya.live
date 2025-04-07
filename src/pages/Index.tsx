
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import PricingSection from '@/components/PricingSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PricingSection />
      <TrustBanner />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
