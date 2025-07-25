import React from 'react';

interface ServiceDetailCardProps {
  title: string;
  description: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-800">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{description}</p>
    </div>
  );
};

export default ServiceDetailCard;
