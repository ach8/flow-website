import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  format?: (val: number) => string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, format = (val) => val.toLocaleString('fr-FR') }) => {
  const spring = useSpring(value, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const display = useTransform(spring, (current) => format(Math.round(current)));

  return <motion.span>{display}</motion.span>;
};

export default AnimatedCounter;
