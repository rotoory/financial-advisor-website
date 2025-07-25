import React from 'react';
import Link from 'next/link';
import TipCard from './ui/tip-card'; // Assuming you have a TipCard component
import { getSortedPostsData } from '@/lib/posts'; // Import the function to get blog posts

export const TipsSection: React.FC = async () => {
  const allPostsData = await getSortedPostsData(); // Get all blog posts
  const topTips = allPostsData.slice(0, 3); // Take the first 3 as top tips

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Insights & Financial Tips
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Stay informed with our latest articles and expert tips to make smarter financial decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {topTips.map(({ slug, title, date, excerpt }) => (
            <TipCard
              key={slug}
              slug={slug}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          ))}
        </div>
        <Link href="/blog" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
          Read More Articles
        </Link>
      </div>
    </section>
  );
};

export default TipsSection;
