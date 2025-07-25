import React from 'react';
import { getSortedPostsData } from '@/src/lib/posts';
import BlogPostPreviewCard from '@/src/components/ui/blog-post-preview-card';

const BlogPage = async () => {
  const allPostsData = await getSortedPostsData();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Insights & Articles</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
