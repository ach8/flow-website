import { Clock, Puzzle, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const useBenefitsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      icon: <Clock className="w-12 h-12" />,
      title: t('valueProposition.efficient.title'),
      description: t('valueProposition.efficient.description')
    },
    {
      icon: <Puzzle className="w-12 h-12" />,
      title: t('valueProposition.custom.title'),
      description: t('valueProposition.custom.description')
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t('valueProposition.expert.title'),
      description: t('valueProposition.expert.description')
    }
  ];
};