import { getPostData, getAllPostSlugs } from '@/lib/posts';
import CTAButton from '@/components/cta-button';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-gray-600 mb-6">{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className="text-center mt-12">
        <CTAButton
          phoneNumber="+1234567890" // Placeholder phone number
          message="Hello, I would like to schedule a consultation regarding your financial advisory services." // Pre-filled message
          label="Schedule a Consultation"
        />
      </div>
    </div>
  );
}
