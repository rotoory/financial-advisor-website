import React from 'react';
import AdvisorProfile from '@/components/advisor-profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about your dedicated financial advisor, their philosophy, experience, and commitment to helping you achieve your financial goals.',
};

const AboutPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Me</h1>
      <AdvisorProfile />
    </main>
  );
};

export default AboutPage;
