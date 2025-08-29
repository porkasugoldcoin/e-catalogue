import React from 'react';
import { Download, Star, ArrowRight } from 'lucide-react';
import { useBrochure } from '../context/BrochureContext';
import { useProducts } from '../context/ProductContext';
import BrochureModal from '../components/BrochureModal';

const Products = () => {
  const { openBrochureForm } = useBrochure();
  const { products } = useProducts();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive suite of business solutions designed to drive growth, 
            efficiency, and innovation across your organization.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-48 w-full md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {product.name}
                      </span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <ArrowRight className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <button
                        onClick={() => openBrochureForm(product.name)}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions that perfectly match your unique business requirements.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <BrochureModal />
    </>
  );
};

export default Products;