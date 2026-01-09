import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';

interface NeonTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: keyof typeof colors.neon;
  label?: string;
  error?: string;
  characterCount?: boolean;
  maxLength?: number;
}

const NeonTextarea: React.FC<NeonTextareaProps> = ({
  color = 'blue',
  label,
  error = '',
  characterCount = false,
  maxLength,
  value = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const neonColor = error ? '#ef4444' : colors.neon[color];
  const charCount = typeof value === 'string' ? value.length : 0;

  return (
    <div className="relative">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <label 
            className="text-sm font-medium transition-colors duration-300"
            style={{ 
              color: isFocused ? neonColor : '#d1d5db',
            }}
          >
            {label}
          </label>
          {characterCount && maxLength && (
            <span className={`text-xs transition-colors duration-300 ${error ? 'text-red-400' : 'text-gray-400'}`}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      )}
      
      <motion.div
        className="relative"
        animate={{
          boxShadow: isFocused && !error
            ? `0 0 20px ${neonColor}40, inset 0 0 15px ${neonColor}10`
            : error
              ? `0 0 15px #ef444440`
              : '0 0 0px transparent'
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderRadius: '0.5rem'
        }}
      >
        <textarea
          {...props}
          value={value}
          maxLength={maxLength}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full px-4 py-3
            bg-gray-800
            rounded-lg 
            border-2 transition-all duration-300
            focus:outline-none relative z-10
            resize-none
            ${error 
              ? 'border-red-500' 
              : isFocused 
                ? 'border-blue-500' 
                : 'border-gray-700'}
          `}
          style={{
            color: '#fff'
          }}
        />
      </motion.div>

      {/* Error message */}
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default NeonTextarea;
