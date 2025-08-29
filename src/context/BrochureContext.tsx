import React, { createContext, useContext, useState } from 'react';

interface BrochureContextType {
  showForm: boolean;
  selectedProduct: string;
  openBrochureForm: (productName: string) => void;
  closeBrochureForm: () => void;
}

const BrochureContext = createContext<BrochureContextType | undefined>(undefined);

export const BrochureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openBrochureForm = (productName: string) => {
    setSelectedProduct(productName);
    setShowForm(true);
  };

  const closeBrochureForm = () => {
    setShowForm(false);
    setSelectedProduct('');
  };

  return (
    <BrochureContext.Provider value={{
      showForm,
      selectedProduct,
      openBrochureForm,
      closeBrochureForm
    }}>
      {children}
    </BrochureContext.Provider>
  );
};

export const useBrochure = () => {
  const context = useContext(BrochureContext);
  if (!context) {
    throw new Error('useBrochure must be used within a BrochureProvider');
  }
  return context;
};