import React from 'react';
import CTAButton from './cta-button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 lg:py-40 flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-down">
          Secure Your Financial Future with Expert Guidance
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-0 animate-fade-in-up animation-delay-500">
          Personalized financial strategies for wealth growth and peace of mind.
        </p>
        <div className="opacity-0 animate-fade-in-up animation-delay-1000">
          <CTAButton
            phoneNumber="+1234567890"
            message="Hello, I would like to learn more about your financial advisory services."
            label="Get a Free Consultation"
            className="bg-white text-blue-800 hover:bg-gray-100 md:text-lg lg:text-xl px-8 py-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
