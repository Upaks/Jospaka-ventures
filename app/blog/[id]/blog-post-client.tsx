"use client"

import { useParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { getBlogPost } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import { ShareButton } from "@/components/share-button"
import { blogPosts } from "@/lib/blog-data"

export function BlogPostClient() {
  const params = useParams()
  const pathname = usePathname()
  
  // Extract ID from params or pathname
  const postId = (params?.id as string) || pathname?.split('/').pop() || ''
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (postId) {
      const foundPost = getBlogPost(String(postId))
      if (foundPost) {
        setPost(foundPost)
        setLoading(false)
      } else {
        setNotFound(true)
        setLoading(false)
      }
    } else {
      setNotFound(true)
      setLoading(false)
    }
  }, [postId])

  // Scroll to top when navigating to a new blog post
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [postId])

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (notFound || !post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900">
              Blog Post Not Found
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const postDate = new Date(post.date)
  const formattedDate = postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Article Header */}
        <article className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16">
            {/* Back Button */}
            <Link href="/blog">
              <Button
                variant="ghost"
                className="mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            {/* Post Header */}
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <Badge className="mb-6 bg-orange-100 text-orange-600 border-0">
                {post.category}
              </Badge>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-charcoal-900">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">{post.author}</div>
                    <div className="text-sm text-neutral-600">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-orange-50 text-orange-600 border-orange-200"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Featured Image */}
              {post.image && (
                <div className="relative w-full h-96 md:h-[500px] rounded-2xl mb-12 overflow-hidden bg-neutral-100">
                  {post.image.startsWith('http') ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100">
                      <Tag className="w-48 h-48 text-orange-200/50" />
                    </div>
                  )}
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="text-lg leading-relaxed text-neutral-700 space-y-6">
                  {post.content.split("\n").map((paragraph, index) => {
                    // Handle inline images: ![alt](url)
                    const imageMatch = paragraph.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
                    if (imageMatch) {
                      const [, alt, url] = imageMatch
                      return (
                        <div key={index} className="my-8">
                          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-neutral-100">
                            {url.startsWith('http') ? (
                              <Image
                                src={url}
                                alt={alt || ''}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
                                <Tag className="w-20 h-20 text-neutral-300" />
                              </div>
                            )}
                          </div>
                          {alt && (
                            <p className="text-sm text-neutral-500 italic text-center mt-2">{alt}</p>
                          )}
                        </div>
                      )
                    }
                    if (paragraph.trim().startsWith("#")) {
                      const level = paragraph.match(/^#+/)?.[0].length || 1
                      const text = paragraph.replace(/^#+\s+/, "")
                      const headingLevel = Math.min(level, 6)
                      const headingClassName = `font-heading font-bold text-charcoal-900 mt-8 mb-4 ${
                        headingLevel === 1 ? "text-3xl" : headingLevel === 2 ? "text-2xl" : "text-xl"
                      }`
                      
                      switch (headingLevel) {
                        case 1:
                          return <h1 key={index} className={headingClassName}>{text}</h1>
                        case 2:
                          return <h2 key={index} className={headingClassName}>{text}</h2>
                        case 3:
                          return <h3 key={index} className={headingClassName}>{text}</h3>
                        case 4:
                          return <h4 key={index} className={headingClassName}>{text}</h4>
                        case 5:
                          return <h5 key={index} className={headingClassName}>{text}</h5>
                        default:
                          return <h6 key={index} className={headingClassName}>{text}</h6>
                      }
                    }
                    if (paragraph.trim().startsWith("-") || paragraph.trim().startsWith("*")) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                          {paragraph
                            .split(/[-*]/)
                            .filter((item) => item.trim())
                            .map((item, i) => (
                              <li key={i} className="text-neutral-700">
                                {item.trim()}
                              </li>
                            ))}
                        </ul>
                      )
                    }
                    if (paragraph.trim() === "") {
                      return <br key={index} />
                    }
                    // Handle links in paragraphs: [text](url)
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
                    const parts = []
                    let lastIndex = 0
                    let match
                    let hasLinks = false
                    
                    while ((match = linkRegex.exec(paragraph)) !== null) {
                      hasLinks = true
                      // Add text before link
                      if (match.index > lastIndex) {
                        parts.push(paragraph.substring(lastIndex, match.index))
                      }
                      // Add link
                      const linkText = match[1]
                      const linkUrl = match[2].startsWith('#') ? `/${match[2]}` : match[2]
                      parts.push(
                        <Link
                          key={parts.length}
                          href={linkUrl}
                          className="text-orange-600 hover:text-orange-700 underline font-medium"
                        >
                          {linkText}
                        </Link>
                      )
                      lastIndex = match.index + match[0].length
                    }
                    
                    // Add remaining text
                    if (lastIndex < paragraph.length) {
                      parts.push(paragraph.substring(lastIndex))
                    }
                    
                    return (
                      <p key={index} className="leading-relaxed">
                        {hasLinks ? parts : paragraph.trim()}
                      </p>
                    )
                  })}
                </div>
              </div>

              {/* Consultation CTA */}
              <Card className="p-8 bg-gradient-to-br from-orange-500 to-amber-500 mb-12 text-white border-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
                    <p className="text-orange-50">Get expert engineering consultation from our team</p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-lg"
                  >
                    <Link href="/#contact">Book a Consultation</Link>
                  </Button>
                </div>
              </Card>

              {/* Share Section */}
              <Card className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 mb-12">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Share this article</h3>
                    <p className="text-sm text-neutral-600">Help others discover this content</p>
                  </div>
                  <ShareButton
                    title={post.title}
                    excerpt={post.excerpt}
                    url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.id}`}
                  />
                </div>
              </Card>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 lg:py-24 bg-neutral-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-charcoal-900">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => {
                  const relatedDate = new Date(relatedPost.date)
                  const relatedFormattedDate = relatedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })

                  return (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <div className="p-6">
                          <Badge className="mb-3 bg-orange-100 text-orange-600 border-0">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="text-lg font-bold mb-2 text-charcoal-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <Calendar className="w-3 h-3" />
                            {relatedFormattedDate}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

