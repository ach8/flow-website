import React from 'react';
import { colors } from '../../utils/colors';

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors.neon;
  label?: string;
}

const NeonInput: React.FC<NeonInputProps> = ({
  color = 'blue',
  label,
  ...props
}) => {
  const neonColor = colors.neon[color];

  return (
    <div className="relative">
      {label && (
        <label 
          className="block mb-2 text-sm font-medium"
          style={{ color: neonColor }}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className="
          w-full px-4 py-2 
          bg-gray-900 
          rounded-lg 
          border-2 border-transparent
          transition-all duration-300
          focus:outline-none
        "
        style={{
          '--neon-color': neonColor,
          '&:focus': {
            borderColor: neonColor,
            boxShadow: `0 0 10px ${neonColor}`
          }
        }}
      />
    </div>
  );
};

export default NeonInput;