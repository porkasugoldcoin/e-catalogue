import React from 'react';
import { Phone, MessageCircle, Star, Zap, Palette, Truck, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">For website creation contact us:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span>📞 7010584543</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <a 
                  href="https://wa.me/7010584543" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  💬 WhatsApp: https://wa.me/7010584543
                </a>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div>
            <h3 className="text-xl font-bold mb-4">Looking for a website?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4 text-blue-400" />
                <span>Stunning & more modern design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Free prototype</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-400" />
                <span>Fast delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-purple-400" />
                <span>Fully customizable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4 text-pink-400" />
                <span>Mobile-friendly & fast</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Great Hardwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
