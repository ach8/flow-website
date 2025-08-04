import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label }) => (
  <Link 
    to={to} 
    className="text-gray-300 hover:text-white transition-colors"
  >
    {label}
  </Link>
);