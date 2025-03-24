
import React, { useEffect, useRef } from 'react';
import { Sparkles, Shield, Users, Heart, Clock, MapPin } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "Connect with the best matches based on breed, temperament & preferences to ensure compatibility.",
      color: "from-blue-500/20 to-blue-300/20"
    },
    {
      icon: Shield,
      title: "Safe & Verified Community",
      description: "Profile verification & user reviews ensure trust & security for all our members.",
      color: "from-green-500/20 to-green-300/20"
    },
    {
      icon: Users,
      title: "Playdates & Mating Options",
      description: "Find the perfect friend or responsible breeding partner for your pup with our specialized matching system.",
      color: "from-purple-500/20 to-purple-300/20"
    },
    {
      icon: Heart,
      title: "Match Based on Compatibility",
      description: "Our algorithm considers temperament, energy levels, and socialization needs for the perfect match.",
      color: "from-pink-500/20 to-pink-300/20"
    },
    {
      icon: Clock,
      title: "Schedule Playdates Easily",
      description: "Coordinate meetups with an integrated calendar and reminder system for busy pet parents.",
      color: "from-yellow-500/20 to-yellow-300/20"
    },
    {
      icon: MapPin,
      title: "Discover Local Dog Parks",
      description: "Find the best nearby locations for your dogs to play together safely and comfortably.",
      color: "from-teal-500/20 to-teal-300/20"
    }
  ];

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-softGray/30 to-white -z-10"></div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -left-20 w-80 h-80 bg-warmOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-warmOrange/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-warmOrange/10 text-warmOrange py-1 px-4 rounded-full text-sm font-medium inline-flex items-center mb-4">
            <Sparkles size={16} className="mr-2" />
            Premium Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why Choose Us?</h2>
          <p className="text-lg text-charcoal/70 max-w-xl mx-auto text-balance">
            Features designed with you and your dog in mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featuresRef}>
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-500 animate-on-scroll group cursor-pointer"
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} className="text-warmOrange" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-warmOrange transition-colors">{feature.title}</h3>
              <p className="text-charcoal/70 text-balance group-hover:text-charcoal/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
