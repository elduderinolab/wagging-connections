
import React from 'react';
import { Sparkles, Shield, Users } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-softGray/30 to-white -z-10"></div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -left-20 w-80 h-80 bg-warmOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-warmOrange/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why Choose Us?</h2>
          <p className="text-lg text-charcoal/70 max-w-xl mx-auto text-balance">
            Features designed with you and your dog in mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 animate-on-scroll">
            <div className="w-14 h-14 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles size={24} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">AI-Powered Matching</h3>
            <p className="text-charcoal/70 text-balance">
              Connect with the best matches based on breed, temperament & preferences to ensure compatibility.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="w-14 h-14 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <Shield size={24} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Safe & Verified Community</h3>
            <p className="text-charcoal/70 text-balance">
              Profile verification & user reviews ensure trust & security for all our members.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 animate-on-scroll" style={{transitionDelay: '0.4s'}}>
            <div className="w-14 h-14 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <Users size={24} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Playdates & Mating Options</h3>
            <p className="text-charcoal/70 text-balance">
              Find the perfect friend or responsible breeding partner for your pup with our specialized matching system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
