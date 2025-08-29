import React, { createContext, useState } from 'react';

interface BrochureContextType {
  showForm: boolean;
  selectedProduct: string;
  openBrochureForm: (productName: string) => void;
  closeBrochureForm: () => void;
}

export const BrochureContext = createContext<BrochureContextType | undefined>(undefined);

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

