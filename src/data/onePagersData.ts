export interface OnePager {
  id: number;
  title: string;
  description: string;
  industry: string;
  pdfUrl: string;
  image: string;
}

export const onePagersData: OnePager[] = [
  {
    id: 1,
    title: 'AI-Powered Hospital Surveillance',
    description: 'Improve patient safety, monitor critical zones, and enable faster response with real-time AI alerts.',
    industry: 'Healthcare',
    pdfUrl: '/onepagers/Hospital_Camex_Flyer.pdf',
    image: './one_pagers/hospital.png',
  },
  {
    id: 2,
    title: 'Smart Pharmacy Store Analytics',
    description: 'Gain insights into customer movement, queue behavior, and controlled substance security.',
    industry: 'Pharmacy',
    pdfUrl: '/onepagers/Pharmacy_Store _analytic_camex (1).pdf',
    image: './one_pagers/pharmacy_store.png',
  },
  {
    id: 3,
    title: 'Retail Loss Prevention & Insights',
    description: 'Detect suspicious activity, analyze footfall, and optimize store operations using AI.',
    industry: 'Retail',
    pdfUrl: '/onepagers/Retail Camex_Flyer.pdf',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Warehouse Operations Intelligence',
    description: 'Monitor safety compliance, movement patterns, and operational efficiency at scale.',
    industry: 'Logistics',
    pdfUrl: '/onepagers/Warehouse One pager (1).pdf',
    image: './one_pagers/warehouse.png',
  },
  {
    id: 5,
    title: 'Advanced Warehouse AI Monitoring',
    description: 'AI-driven zone monitoring and anomaly detection for high-volume warehouse environments.',
    industry: 'Enterprise',
    pdfUrl: '/onepagers/Warehouse_Camex_Flyer.pdf',
    image: './one_pagers/warehouse1.png',
  },
];

