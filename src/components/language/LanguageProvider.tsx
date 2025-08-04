import React from 'react';
import { useLanguageDetection } from '../../hooks/useLanguageDetection';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { isLoading } = useLanguageDetection();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return <>{children}</>;
};

export default LanguageProvider;