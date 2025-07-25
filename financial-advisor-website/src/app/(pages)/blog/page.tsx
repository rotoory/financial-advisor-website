import React from 'react';
import { getSortedPostsData } from '@/src/lib/posts';
import BlogPostPreviewCard from '@/src/components/ui/blog-post-preview-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay informed with the latest insights and articles on financial planning, investment strategies, and market trends from your trusted financial advisor.',
};

const BlogPage = async () => {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Insights & Articles</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allPostsData.map(({ slug, title, date, excerpt }) => (
          <BlogPostPreviewCard
            key={slug}
            slug={slug}
            title={title}
            date={date}
            excerpt={excerpt}
          />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
