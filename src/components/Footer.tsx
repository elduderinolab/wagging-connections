
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-softGray/30 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <span className="text-warmOrange font-bold text-2xl">MatchMyPup</span>
            </a>
            <p className="text-charcoal/70 mb-6 text-balance">
              Connecting dogs and their owners for playdates, socialization, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-charcoal hover:text-warmOrange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-charcoal hover:text-warmOrange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-charcoal hover:text-warmOrange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-charcoal mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-charcoal/70 hover:text-warmOrange transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-charcoal/70 hover:text-warmOrange transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-charcoal/70 hover:text-warmOrange transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-charcoal/70 hover:text-warmOrange transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-bold text-charcoal mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-charcoal/70 hover:text-warmOrange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-warmOrange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-warmOrange transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-charcoal mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-warmOrange" />
                <a href="mailto:matchmypup.info@gmail.com" className="text-charcoal/70 hover:text-warmOrange transition-colors">matchmypup.info@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-warmOrange" />
                <a href="tel:+1-800-123-4567" className="text-charcoal/70 hover:text-warmOrange transition-colors">+1-800-123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-softGray pt-8 text-center text-charcoal/60">
          <p>© {currentYear} Match My Pup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
