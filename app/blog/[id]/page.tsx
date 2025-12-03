import { Metadata } from "next"
import { getBlogPost } from "@/lib/blog-data"
import { BlogPostClient } from "./blog-post-client"
import { ArticleSchema } from "./article-schema"

// Ensure route works dynamically
export const dynamicParams = true

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    // Handle both Promise and direct params
    const resolvedParams = params instanceof Promise ? await params : params
    const postId = resolvedParams?.id
    
    if (!postId) {
      return {
        title: "Post Not Found | JVNL Blog",
      }
    }

    const post = getBlogPost(String(postId))

    if (!post) {
      return {
        title: "Post Not Found | JVNL Blog",
      }
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jospaka.com"
    const postUrl = `${siteUrl}/blog/${post.id}`

    return {
      title: `${post.title} | JVNL Blog`,
      description: post.excerpt,
      keywords: post.tags.join(", "),
      authors: [{ name: post.author }],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        url: postUrl,
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        siteName: "Jospaka Ventures Nigeria Limited",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
      alternates: {
        canonical: postUrl,
      },
    }
  } catch (error) {
    return {
      title: "Blog Post | JVNL Blog",
    }
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  // Handle both Promise and direct params for schema
  const resolvedParams = params instanceof Promise ? await params : params
  const postId = resolvedParams?.id || ''
  
  // Use client component to handle params extraction from URL
  // This works around the Next.js 16/Turbopack params issue
  return (
    <>
      {postId && <ArticleSchema postId={String(postId)} />}
      <BlogPostClient />
    </>
  )
}
