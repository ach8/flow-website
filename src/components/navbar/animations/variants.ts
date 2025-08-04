import { Variants } from 'framer-motion';

export const navbarVariants: Variants = {
  visible: {
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(31, 41, 55, 0.5)',
  },
  hidden: {
    backgroundColor: 'transparent',
    backdropFilter: 'none',
    borderBottom: 'none',
  }
};

export const linkHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export const underlineVariants: Variants = {
  initial: { width: 0, opacity: 0 },
  animate: { 
    width: '100%', 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};