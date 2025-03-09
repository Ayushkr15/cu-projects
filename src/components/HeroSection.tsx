
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <div className="inline-block mb-3 animate-fade-in">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            Chandigarh University
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Custom Project Reports
          <span className="text-primary"> Tailored</span> to University Guidelines
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Professional BBA/MBA final-year project reports designed specifically for Chandigarh University students. Delivered on time, every time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={scrollToOrder}
            className="btn-premium px-6 py-3 font-medium"
          >
            Order Your Report
          </button>
          <button 
            onClick={() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 font-medium border border-gray-300 rounded-md hover:bg-secondary transition-colors duration-300"
          >
            View Our Work
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass p-6 rounded-lg text-center">
            <span className="block text-primary text-4xl font-bold mb-2">01</span>
            <h3 className="font-medium mb-2">Submit Requirements</h3>
            <p className="text-sm text-muted-foreground">Share your project topic and university guidelines.</p>
          </div>
          
          <div className="glass p-6 rounded-lg text-center">
            <span className="block text-primary text-4xl font-bold mb-2">02</span>
            <h3 className="font-medium mb-2">Pay Deposit</h3>
            <p className="text-sm text-muted-foreground">Secure your order with a ₹1,000 deposit payment.</p>
          </div>
          
          <div className="glass p-6 rounded-lg text-center">
            <span className="block text-primary text-4xl font-bold mb-2">03</span>
            <h3 className="font-medium mb-2">Receive Your Report</h3>
            <p className="text-sm text-muted-foreground">Get your completed report delivered to your email.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-pulse">
        <button 
          onClick={() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
