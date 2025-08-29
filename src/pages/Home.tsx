import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Wrench, Shield, Truck, Clock } from 'lucide-react';
import BrochureModal from '../components/BrochureModal';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              [Client's Hardware Business Name]
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Trusted supplier of hinges, bolts, and hardware accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About [Client's Hardware Business Name]
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading supplier of high-quality hardware products, specializing in hinges, bolts, 
              fasteners, and accessories. With years of experience in the industry, we provide reliable 
              solutions for contractors, builders, and DIY enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive selection of hardware products for all your construction and DIY needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hinges</h3>
              <p className="text-gray-600">
                Premium quality hinges for doors, cabinets, and furniture applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bolts & Fasteners</h3>
              <p className="text-gray-600">
                High-strength bolts, screws, and fasteners for secure connections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardware Accessories</h3>
              <p className="text-gray-600">
                Complete range of hardware accessories and tools for professional use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored hardware solutions for specific project requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose [Client's Hardware Business Name]?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through quality products and unmatched customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our products meet the highest industry standards for durability and performance.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Professional guidance and technical support from our experienced team.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Consistent delivery and reliable service that you can count on for every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us Today for Your Hardware Needs
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your hardware requirements and receive expert advice.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Prototype Note */}
      <div className="bg-yellow-50 border-t border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-yellow-800 font-medium">
            This is a free prototype created to demonstrate a modern website experience.
          </p>
        </div>
      </div>

      <BrochureModal />
    </>
  );
};

export default Home;