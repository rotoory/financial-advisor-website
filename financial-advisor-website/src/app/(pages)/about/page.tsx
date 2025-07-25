import React from 'react';
import AdvisorProfile from '@/components/advisor-profile';

const AboutPage: React.FC = () => {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <AdvisorProfile />
    </main>
  );
};

export default AboutPage;
