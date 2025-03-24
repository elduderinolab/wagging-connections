
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 text-center">
          About Match My Pup
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-charcoal/80 mb-6">
            Match My Pup was created by dog lovers for dog lovers. Our mission is to create a safe, 
            fun, and effective way for dogs and their owners to connect with each other.
          </p>
          
          <p className="text-lg text-charcoal/80 mb-6">
            Whether you're looking for a breeding partner for your purebred, a playdate for your 
            energetic puppy, or simply want to expand your dog's social circle, Match My Pup 
            makes it easy and enjoyable.
          </p>
          
          <p className="text-lg text-charcoal/80 mb-8">
            Our platform uses advanced matching algorithms to suggest compatible dogs based on 
            breed, temperament, age, location, and owner preferences. We prioritize the safety 
            and well-being of all dogs in our community through verification processes and 
            responsible owner guidelines.
          </p>
          
          <div className="bg-softGray/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2 text-charcoal/80">
              <li>Responsible pet ownership and ethical breeding practices</li>
              <li>Creating meaningful connections between dogs and their owners</li>
              <li>Building a supportive community of dog enthusiasts</li>
              <li>Prioritizing the health and happiness of all dogs</li>
              <li>Making dog socialization accessible and enjoyable</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Navbar />
      <Footer />
    </div>
  );
};

export default About;
