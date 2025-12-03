"use client"

import { blogPosts } from "@/lib/blog-data"

export function BlogCollectionSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jospaka.com"
  
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "JVNL Blog - Engineering Insights & Industry Updates",
    description: "Stay informed with the latest insights, project updates, and industry news from Jospaka Ventures Nigeria Limited.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Jospaka Ventures Nigeria Limited",
      alternateName: "JVNL",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logos/logo.png`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
        jobTitle: post.authorRole,
      },
      url: `${siteUrl}/blog/${post.id}`,
      articleSection: post.category,
      keywords: post.tags.join(", "),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
    />
  )
}

