import React, { useState } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { useBrochure } from '../hooks/useBrochure';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  productName: string;
}

const BrochureModal = () => {
  const { showForm, selectedProduct, closeBrochureForm } = useBrochure();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    productName: selectedProduct
  });
  const [showSuccess, setShowSuccess] = useState(false);


  React.useEffect(() => {
    setFormData(prev => ({ ...prev, productName: selectedProduct }));
  }, [selectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate PDF generation and download
    setShowSuccess(true);
  };

  const handleDownload = () => {
    // In a real application, this would trigger the actual PDF download
    // For demo purposes, we'll simulate the download
    const fileName = selectedProduct.replace(/\s+/g, '') + '.pdf';
    const link = document.createElement('a');
    link.href = '#'; // In production, this would be the actual PDF URL
    link.download = fileName;
    link.click();
    
    // Show success message
    alert(`${selectedProduct} brochure (${fileName}) download started! In production, this would download the actual PDF file.`);
  };

  const resetAndClose = () => {
    setFormData({ name: '', email: '', mobile: '', productName: '' });
    setShowSuccess(false);
    closeBrochureForm();
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {showSuccess ? 'Download Ready' : 'Download Brochure'}
          </h2>
          <button
            onClick={resetAndClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                  Product
                </label>
                <input
                  type="text"
                  id="product"
                  value={formData.productName}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Request Brochure
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900">
                Thank you, {formData.name}!
              </h3>
              <p className="text-gray-600">
                Your brochure request has been processed successfully.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Download className="h-5 w-5 mr-2" />
                Download {selectedProduct} Brochure
              </button>
              <p className="text-xs text-gray-500 mt-2">
                The brochure will be downloaded to your device
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;