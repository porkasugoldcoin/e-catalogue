import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types/Product';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Default demo products
const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    title: 'Advanced Analytics Platform',
    description: 'Transform your data into actionable insights with our comprehensive analytics solution. Features real-time dashboards, predictive modeling, and automated reporting.',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', '24/7 Support'],
    price: 'Starting at $299/month',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Product1.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Product 2',
    title: 'Cloud Infrastructure Suite',
    description: 'Scalable cloud infrastructure designed for modern businesses. Includes auto-scaling, load balancing, and enterprise-grade security features.',
    features: ['Auto-scaling', 'Load Balancing', 'Enterprise Security', 'Global CDN'],
    price: 'Starting at $199/month',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Product2.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Product 3',
    title: 'AI-Powered CRM System',
    description: 'Intelligent customer relationship management with AI-driven insights, automated workflows, and seamless integrations with your existing tools.',
    features: ['AI Insights', 'Automated Workflows', 'Integration Ready', 'Mobile App'],
    price: 'Starting at $149/month',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Product3.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Product 4',
    title: 'Security Operations Center',
    description: 'Comprehensive cybersecurity solution with 24/7 monitoring, threat detection, and incident response capabilities to protect your business.',
    features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Compliance Reports'],
    price: 'Starting at $499/month',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Product4.pdf',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Product 5',
    title: 'Digital Transformation Hub',
    description: 'Complete digital transformation platform with process automation, digital workflows, and change management tools for organizational growth.',
    features: ['Process Automation', 'Digital Workflows', 'Change Management', 'Training Modules'],
    price: 'Starting at $399/month',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    brochureFile: 'Product5.pdf',
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

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};