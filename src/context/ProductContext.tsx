import React, { createContext, useState, useEffect } from 'react';
import { Product } from '../types/Product';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
  resetToDefaults: () => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Default demo products
const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    title: 'Stainless Steel Hinges',
    description: 'Durable, rust-resistant hinges for doors, cabinets, and enclosures.',
    features: ['Grade 304/316', 'Multiple sizes', 'Rust-proof', 'Smooth operation'],
    price: '',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'StainlessSteelHinges.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Product 2',
    title: 'High-Tensile Bolts & Fasteners',
    description: 'Strong bolts, nuts, and washers built to standards.',
    features: ['Grades 8.8 / 10.9 / 12.9', 'Metric & imperial sizes', 'Multiple finishes', 'Tested durability'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'HighTensileBolts.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Product 3',
    title: 'Door & Cabinet Hardware',
    description: 'Handles, knobs, and latches for home and industry.',
    features: ['Ergonomic designs', 'Multiple finishes', 'Easy install kits', 'Brand compatible'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'DoorCabinetHardware.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Product 4',
    title: 'Industrial Brackets & Supports',
    description: 'Heavy-duty brackets for shelves, frames, and equipment.',
    features: ['High load capacity', 'Pre-drilled holes', 'Powder-coated/galvanized', 'Custom sizes'],
    price: '',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'IndustrialBrackets.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Product 5',
    title: 'Custom Fabrication & OEM Parts',
    description: 'Tailored metal parts for assemblies and production lines.',
    features: ['CAD support', 'Prototype to production', 'SS / MS / Aluminum', 'QA reports'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'CustomFabrication.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('great-hardwares-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('great-hardwares-products', JSON.stringify(defaultProducts));
    }
  }, []);

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('great-hardwares-products', JSON.stringify(products));
    }
  }, [products]);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, ...productData, updatedAt: new Date().toISOString() }
        : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  const resetToDefaults = () => {
    localStorage.removeItem('great-hardwares-products');
    setProducts(defaultProducts);
    localStorage.setItem('great-hardwares-products', JSON.stringify(defaultProducts));
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      resetToDefaults
    }}>
      {children}
    </ProductContext.Provider>
  );
};

