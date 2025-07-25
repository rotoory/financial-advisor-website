import React from 'react';
import Link from 'next/link';

export const AboutSummary: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          About Your Trusted Financial Advisor
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          With over 15 years of experience, I am dedicated to helping individuals and families achieve their financial aspirations through personalized, evidence-based strategies.
        </p>
        <Link href="/about" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutSummary;
