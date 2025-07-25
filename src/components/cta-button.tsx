import React from 'react';

interface CTAButtonProps {
  phoneNumber: string;
  message: string;
  label: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ phoneNumber, message, label }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </a>
  );
};

export default CTAButton;
