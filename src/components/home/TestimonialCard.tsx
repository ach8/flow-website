import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { colors } from '../../utils/colors';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company
}) => {
  return (
    <motion.div
      className="p-6 rounded-lg border border-gray-800 bg-gray-900/50"
      whileHover={{ scale: 1.02, borderColor: colors.neon.blue }}
    >
      <Quote className="text-blue-400 mb-4 w-8 h-8" />
      <p className="text-lg mb-4 text-gray-300">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{role} at {company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;