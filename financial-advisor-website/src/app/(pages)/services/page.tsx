import React from 'react';
import ServiceDetailCard from '@/components/ui/service-detail-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the comprehensive financial advisory services offered, including retirement planning, investment strategies, wealth preservation, and financial education.',
};

const servicesData = [
  {
    title: 'Retirement Planning',
    description: 'Comprehensive strategies to help you achieve a secure and comfortable retirement, including 401(k) rollovers, IRA planning, and pension maximization.'
  },
  {
    title: 'Investment Strategy',
    description: 'Customized investment portfolios designed to meet your financial goals and risk tolerance, with a focus on diversification and long-term growth.'
  },
  {
    title: 'Wealth Preservation',
    description: 'Strategies to protect and grow your assets, including estate planning, tax-efficient investing, and risk management.'
  },
  {
    title: 'Financial Education',
    description: 'Empowering you with the knowledge and tools to make informed financial decisions, covering topics from budgeting to advanced investment concepts.'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceDetailCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;