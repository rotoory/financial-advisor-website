import React from 'react';

interface CTAButtonProps {
  phoneNumber: string;
  message: string;
  label: string;
  className?: string; // Add className prop for custom styling
}

const CTAButton: React.FC<CTAButtonProps> = ({ phoneNumber, message, label, className }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ${className || ''}`}
    >
      {label}
    </a>
  );
};

export default CTAButton;
