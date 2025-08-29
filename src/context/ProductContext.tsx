import React, { createContext, useState, useEffect } from 'react';
import { Product } from '../types/Product';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Default demo products
const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Hinges',
    title: 'Heavy-Duty Door Hinges',
    description: 'High-quality door hinges designed for durability and smooth operation. Perfect for residential and commercial applications with various finishes available.',
    features: ['Heavy-Duty Construction', 'Multiple Finishes', 'Easy Installation', 'Long-lasting'],
    price: '',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Hinges.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Industrial Bolts',
    title: 'High-Strength Fastening Solutions',
    description: 'Premium grade bolts and fasteners for industrial applications. Includes various sizes, materials, and thread types for secure connections.',
    features: ['High-Strength Steel', 'Multiple Sizes', 'Corrosion Resistant', 'Industrial Grade'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Bolts.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Fastener Collection',
    title: 'Complete Fastener Solutions',
    description: 'Comprehensive range of fasteners including screws, nuts, washers, and specialty fasteners for all construction and assembly needs.',
    features: ['Wide Selection', 'Quality Materials', 'Easy to Use', 'Reliable Performance'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Fasteners.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Support Brackets',
    title: 'Structural Support Brackets',
    description: 'Heavy-duty brackets and supports for structural applications. Ideal for shelving, furniture assembly, and construction projects.',
    features: ['Structural Grade', 'Multiple Sizes', 'Easy Installation', 'Durable Design'],
    price: '',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Brackets.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Hardware Accessories',
    title: 'Complete Hardware Accessories',
    description: 'Essential hardware accessories including handles, locks, latches, and specialty items for complete project solutions.',
    features: ['Complete Range', 'Quality Materials', 'Professional Finish', 'Easy Installation'],
    price: '',
    image: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Accessories.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('techcorp-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('techcorp-products', JSON.stringify(defaultProducts));
    }
  }, []);

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('techcorp-products', JSON.stringify(products));
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

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};

