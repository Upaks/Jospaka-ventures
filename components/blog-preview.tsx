"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { getRecentPosts } from "@/lib/blog-data"

export function BlogPreview() {
  const recentPosts = getRecentPosts(3)

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900">
            Blog & <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Stay informed with the latest insights, project updates, and industry news from our engineering experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => {
            const postDate = new Date(post.date)
            const formattedDate = postDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })

            return (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30 cursor-pointer">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
                    {post.image && post.image.startsWith('http') ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
                        <BookOpen className="w-20 h-20 text-orange-300/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/95 backdrop-blur-sm text-orange-600 border-0 shadow-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formattedDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 text-charcoal-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 shadow-lg shadow-orange-500/30"
          >
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

