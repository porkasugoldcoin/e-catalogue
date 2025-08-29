import { useContext } from 'react';
import { BrochureContext } from '../context/BrochureContext';

export const useBrochure = () => {
  const context = useContext(BrochureContext);
  if (!context) {
    throw new Error('useBrochure must be used within a BrochureProvider');
  }
  return context;
};
