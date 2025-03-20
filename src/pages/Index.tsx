
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gradient">Your Brand</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-cloudflare-dark" />
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center pt-24 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary animate-bounce-subtle">
                  New Release Available
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Build beautiful sites in minutes with 
                  <span className="text-gradient"> Cloudflare Pages</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
                  A lightning-fast way to create professional websites with minimal effort. Deploy globally in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="rounded-full bg-cloudflare-orange hover:bg-cloudflare-orange/90 text-white">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full border-cloudflare-dark/20 hover:bg-cloudflare-dark/5">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md w-full">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-cloudflare-orange/20 to-cloudflare-blue/20 rounded-3xl animate-blur-in"></div>
                <div className="absolute inset-4 glass-effect rounded-2xl shadow-lg overflow-hidden animate-scale-in">
                  <div className="h-full bg-gradient-to-br from-cloudflare-orange/10 to-cloudflare-blue/10 p-6 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cloudflare-orange to-cloudflare-blue"></div>
                    </div>
                    <div className="w-full h-4 bg-white/50 rounded-full mb-4"></div>
                    <div className="w-3/4 h-4 bg-white/50 rounded-full mb-8"></div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="h-20 bg-white/50 rounded-xl"></div>
                      <div className="h-20 bg-white/50 rounded-xl"></div>
                      <div className="h-20 bg-white/50 rounded-xl"></div>
                      <div className="h-20 bg-white/50 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="section-padding reveal-section"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect balance of simplicity, performance, and design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                description: "Deploy your site to our global network for incredible speed and reliability.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cloudflare-orange/20 to-cloudflare-blue/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cloudflare-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Easy to Use",
                description: "Simple drag-and-drop interface makes building your site intuitive and fast.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cloudflare-orange/20 to-cloudflare-blue/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cloudflare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Highly Secure",
                description: "Built-in security features protect your site and visitors at all times.",
                icon: (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cloudflare-orange/20 to-cloudflare-blue/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cloudflare-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="section-padding bg-gradient-to-r from-gray-50 to-gray-100 reveal-section"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers who've already transformed their online presence.
            </p>
            <Button size="lg" className="rounded-full bg-cloudflare-orange hover:bg-cloudflare-orange/90 text-white">
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Your Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
