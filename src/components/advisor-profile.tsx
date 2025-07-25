import React from 'react';
import Image from 'next/image';

const AdvisorProfile: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 py-8 md:py-12 px-4 bg-white rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-md">
        {/* Placeholder for advisor image */}
        <Image
          src="/advisor-placeholder.jpg" // Replace with your advisor's image path
          alt="Advisor Name"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          [Advisor Name Placeholder]
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">
          Your Dedicated Financial Partner
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
          Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Financial Philosophy: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. I believe in a holistic approach to financial planning, focusing on long-term growth, risk management, and personalized strategies that align with your unique life goals and values.
        </p>
      </div>
    </section>
  );
};

export default AdvisorProfile;
