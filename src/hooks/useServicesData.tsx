import { MessageSquare, Users, Mail, Database, Mic, Share2 } from 'lucide-react';

export const useServicesData = () => {
  return [
    {
      icon: <MessageSquare />,
      key: 'chatbot'
    },
    {
      icon: <Users />,
      key: 'leads'
    },
    {
      icon: <Mail />,
      key: 'email'
    },
    {
      icon: <Database />,
      key: 'crm'
    },
    {
      icon: <Mic />,
      key: 'voice'
    },
    {
      icon: <Share2 />,
      key: 'social'
    }
  ];
};