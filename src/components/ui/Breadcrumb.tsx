import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { colors } from '../../utils/colors';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center text-sm text-gray-400 space-x-1">
        {/* Home Link */}
        <li>
          <Link 
            to="/" 
            className="hover:text-gray-300 transition-colors"
          >
            {t('nav.home')}
          </Link>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-gray-600">
              <ChevronRight className="w-4 h-4 inline" />
            </li>
            <li>
              {index === items.length - 1 ? (
                // Current page (not a link)
                <span
                  style={{
                    color: colors.neon.blue
                  }}
                  className="font-medium"
                >
                  {item.label}
                </span>
              ) : (
                // Link to parent page
                <Link 
                  to={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
