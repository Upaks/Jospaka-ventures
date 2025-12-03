import { getBlogPost } from "@/lib/blog-data"

interface ArticleSchemaProps {
  postId: string
}

export function ArticleSchema({ postId }: ArticleSchemaProps) {
  const post = getBlogPost(postId)
  
  if (!post) {
    return null
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jospaka.com"
  const postUrl = `${siteUrl}/blog/${post.id}`
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Jospaka Ventures Nigeria Limited",
      alternateName: "JVNL",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logos/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}

