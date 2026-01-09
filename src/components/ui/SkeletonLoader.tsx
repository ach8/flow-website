import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'testimonial' | 'card' | 'text';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type = 'testimonial', count = 1 }) => {
  const shimmerAnimation = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' as const }
  };

  if (type === 'testimonial') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
          {/* Rating Stars Skeleton */}
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-5 h-5 rounded-full bg-gray-800"
                {...shimmerAnimation}
              />
            ))}
          </div>

          {/* Quote Skeleton */}
          <div className="space-y-3 mb-8">
            <motion.div
              className="h-6 bg-gray-800 rounded w-full"
              {...shimmerAnimation}
            />
            <motion.div
              className="h-6 bg-gray-800 rounded w-5/6 mx-auto"
              {...shimmerAnimation}
            />
            <motion.div
              className="h-6 bg-gray-800 rounded w-4/5 mx-auto"
              {...shimmerAnimation}
            />
          </div>

          {/* Author Info Skeleton */}
          <div className="text-center space-y-2">
            <motion.div
              className="h-5 bg-gray-800 rounded w-40 mx-auto"
              {...shimmerAnimation}
            />
            <motion.div
              className="h-4 bg-gray-800 rounded w-56 mx-auto"
              {...shimmerAnimation}
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className="space-y-4">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="h-32 bg-gray-800 rounded-lg"
            {...shimmerAnimation}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-800 rounded"
          style={{ width: i === count - 1 ? '80%' : '100%' }}
          {...shimmerAnimation}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;
