"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { blogPosts } from "@/lib/blog-data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCollectionSchema } from "./blog-schema"

const categories = ["All", "Industry Insights", "Projects", "Quality & Standards", "Sustainability", "Safety"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const filteredPosts =
    selectedCategory === "All"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = sortedPosts[0]
  const regularPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id)

  const featuredDate = featuredPost
    ? new Date(featuredPost.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  return (
    <>
      <BlogCollectionSchema />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
                Insights & Updates
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Blog & <span className="text-gradient bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">News</span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Stay informed with the latest insights, project updates, and industry news from our engineering experts
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 lg:py-16 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Featured Article</span>
                </div>

                <Link href={`/blog/${featuredPost.id}`}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-neutral-200 hover:border-orange-500/30 cursor-pointer">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Featured Image */}
                      <div className="relative h-64 lg:h-96 overflow-hidden bg-neutral-100">
                        {featuredPost.image && featuredPost.image.startsWith('http') ? (
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100">
                            <BookOpen className="w-32 h-32 text-orange-200/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-white/95 backdrop-blur-sm text-orange-600 border-0 shadow-lg">
                            {featuredPost.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Featured Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {featuredDate}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime} min read
                          </div>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-charcoal-900 group-hover:text-orange-600 transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>

                        <p className="text-lg text-neutral-600 mb-6 leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                          Read Full Article
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-neutral-50 border-b border-neutral-200 sticky top-20 z-40 backdrop-blur-sm bg-white/80">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => {
                  const postDate = new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })

                  return (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200 hover:border-orange-500/30 cursor-pointer bg-white">
                        {/* Image */}
                        <div className="relative w-full h-56 overflow-hidden bg-neutral-100">
                          {post.image && post.image.startsWith('http') ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-50">
                              <BookOpen className="w-20 h-20 text-neutral-300/50" />
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
                          <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {postDate}
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime} min
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 text-charcoal-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 bg-orange-50 text-orange-600 rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all pt-2 border-t border-neutral-100">
                            Read Article
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-neutral-600">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
