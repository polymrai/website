
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About polymr.ai</h3>
            <p className="text-purple-100 leading-relaxed">
              polymr.ai leverages intelligent AI agents to automate Material Requirements Planning (MRP) 
              for small- and mid-sized manufacturers—no consultants required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-purple-100">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/product" className="hover:text-white transition-colors">Product</Link>
              <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link to="/demo" className="hover:text-white transition-colors">Demo</Link>
              <Link to="/clients" className="hover:text-white transition-colors">Clients</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/login" className="hover:text-white transition-colors">Login</Link>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3 text-purple-100">
              <div>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:polymrai.business@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  polymrai.business@gmail.com
                </a>
              </div>
              <div>
                <strong>LinkedIn:</strong>
                <div className="mt-2 space-y-1">
                  <div>
                    <a 
                      href="https://www.linkedin.com/in/naman-mukerji-329539223/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Naman Mukerji
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://www.linkedin.com/in/tanmay-neema-099659346/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Tanmay Neema
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500 mt-8 pt-8 text-center text-purple-100">
          <p>&copy; 2025 polymr.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
