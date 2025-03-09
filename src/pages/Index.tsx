
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThreeJSBackground from '../components/ThreeJSBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import OrderSection from '../components/OrderSection';
import Footer from '../components/Footer';
import { Toaster } from 'sonner';

// Create a client
const queryClient = new QueryClient();

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Toaster position="top-right" richColors closeButton />
        <ThreeJSBackground />
        <Navbar />
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <OrderSection />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Index;
