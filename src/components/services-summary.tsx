import React from 'react';
import Link from 'next/link';

export const ServicesSummary: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Comprehensive Financial Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          From retirement planning to investment strategies, our services are designed to address your unique financial needs and goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-800">Retirement Planning</h3>
            <p className="text-gray-600">Secure your golden years with expert guidance on pensions, 401(k)s, and IRAs.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-800">Investment Management</h3>
            <p className="text-gray-600">Build a robust portfolio tailored to your risk tolerance and growth objectives.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-800">Wealth Preservation</h3>
            <p className="text-gray-600">Protect and grow your assets with strategic tax planning and estate solutions.</p>
          </div>
        </div>
        <Link href="/services" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSummary;
