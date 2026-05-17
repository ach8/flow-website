import React, { Suspense, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

const DefaultLoader = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[200px]">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <DefaultLoader />,
  minHeight = '400px',
  rootMargin = '200px', // Load before it comes into view
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin,
    triggerOnce: true, // Only trigger once to load the component
  });

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : minHeight }} className="relative w-full">
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
