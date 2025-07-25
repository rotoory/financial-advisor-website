import React from 'react';
import Link from 'next/link';

interface TipCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const TipCard: React.FC<TipCardProps> = ({ slug, title, date, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link href={`/blog/${slug}`} className="block p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-800 leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-4 flex-grow text-base md:text-lg">
          {excerpt}
        </p>
        <span className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 mt-auto">Read Tip &rarr;</span>
      </Link>
    </div>
  );
};

export default TipCard;
