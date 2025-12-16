"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type GalleryCategory = "All" | "Projects" | "Team" | "Facilities" | "Equipment" | "Awards" | "Events"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  title?: string
  description?: string
}

// Gallery images data - you can expand this with your actual images
const galleryImages: GalleryImage[] = [
  // Projects
  {
    id: "project-1",
    src: "/images/projects/IPP Photos1.jpg",
    alt: "Obite Gas Plant Infrastructure",
    category: "Projects",
    title: "Obite Gas Plant Infrastructure",
    description: "Construction of car park, retaining wall, and drainage systems",
  },
  {
    id: "project-2",
    src: "/images/projects/SSL Onicha Ugbo 2.JPG",
    alt: "Obite Community Development",
    category: "Projects",
    title: "Obite Community Development",
    description: "Primary school and health center construction",
  },
  {
    id: "project-3",
    src: "/images/projects/Mammo 1.jpeg",
    alt: "Mammography Centre",
    category: "Projects",
    title: "Mammography Centre",
    description: "Complete construction and furnishing of modern healthcare facility",
  },
  {
    id: "project-4",
    src: "/images/projects/SSL Onicha Ugbo 1.JPG",
    alt: "Science Laboratory",
    category: "Projects",
    title: "Science Laboratory",
    description: "Construction and complete furnishing of school science laboratory",
  },
  {
    id: "project-5",
    src: "/images/projects/IPP Photos.jpg",
    alt: "OML58 Road Repairs",
    category: "Projects",
    title: "OML58 Road Repairs",
    description: "Access road repair and maintenance",
  },
  {
    id: "project-6",
    src: "/images/projects/IPP Photos2.jpg",
    alt: "LPG Supply Services",
    category: "Projects",
    title: "LPG Supply Services",
    description: "Ongoing LPG supply to Ogbogu Life Camp",
  },
  // Add more images as you have them
  // Team, Facilities, Equipment, Awards, Events categories can be added here
]

const categories: GalleryCategory[] = ["All", "Projects", "Team", "Facilities", "Equipment", "Awards", "Events"]

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryImages
    }
    return galleryImages.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  // Find the index in the full array for lightbox navigation
  const getFullArrayIndex = (filteredIndex: number) => {
    const image = filteredImages[filteredIndex]
    return galleryImages.findIndex((img) => img.id === image.id)
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(getFullArrayIndex(index))
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      const currentImage = galleryImages[selectedImageIndex]
      const currentCategoryImages = galleryImages.filter(
        (img) => selectedCategory === "All" || img.category === selectedCategory
      )
      const currentIndexInCategory = currentCategoryImages.findIndex((img) => img.id === currentImage.id)
      const prevIndexInCategory = currentIndexInCategory === 0 ? currentCategoryImages.length - 1 : currentIndexInCategory - 1
      const prevImage = currentCategoryImages[prevIndexInCategory]
      setSelectedImageIndex(galleryImages.findIndex((img) => img.id === prevImage.id))
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      const currentImage = galleryImages[selectedImageIndex]
      const currentCategoryImages = galleryImages.filter(
        (img) => selectedCategory === "All" || img.category === selectedCategory
      )
      const currentIndexInCategory = currentCategoryImages.findIndex((img) => img.id === currentImage.id)
      const nextIndexInCategory = currentIndexInCategory === currentCategoryImages.length - 1 ? 0 : currentIndexInCategory + 1
      const nextImage = currentCategoryImages[nextIndexInCategory]
      setSelectedImageIndex(galleryImages.findIndex((img) => img.id === nextImage.id))
    }
  }

  const currentImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null
  const currentCategoryImages = galleryImages.filter((img) => selectedCategory === "All" || img.category === selectedCategory)
  const currentIndexInLightbox = currentImage
    ? currentCategoryImages.findIndex((img) => img.id === currentImage.id)
    : -1

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setSelectedImageIndex(null)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20" onKeyDown={handleKeyDown} tabIndex={0} suppressHydrationWarning>
        {/* Hero Section - Matching Blog Style */}
        <section className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
                Visual Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Our <span className="text-gradient bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Gallery</span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Explore our engineering excellence through project photos, team moments, facilities, equipment, and achievements
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter - Matching Blog Style */}
        <section className="py-8 bg-neutral-50 border-b border-neutral-200 sticky top-20 z-40 backdrop-blur-sm bg-white/80">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => {
                const count = category === "All" ? galleryImages.length : galleryImages.filter((img) => img.category === category).length
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {category} {count > 0 && `(${count})`}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Gallery Grid */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {image.title && (
                        <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                      )}
                      {image.description && (
                        <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                      )}
                      <Badge className="mt-2 bg-orange-500/90 text-white border-0">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <ImageIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-600 text-lg">No images found in this category</p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  View All Images
                </Button>
              </div>
            )}

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">{galleryImages.length}</div>
                  <div className="text-sm text-neutral-600">Total Images</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {galleryImages.filter((img) => img.category === "Projects").length}
                  </div>
                  <div className="text-sm text-neutral-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {new Set(galleryImages.map((img) => img.category)).size}
                  </div>
                  <div className="text-sm text-neutral-600">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">20+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && currentImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {currentCategoryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {currentCategoryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image Container */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-white text-center max-w-2xl">
                {currentImage.title && (
                  <div className="font-semibold text-lg mb-1">{currentImage.title}</div>
                )}
                {currentImage.description && (
                  <div className="text-sm text-white/80 mb-2">{currentImage.description}</div>
                )}
                <Badge className="bg-orange-500/90 text-white border-0 mb-2">
                  {currentImage.category}
                </Badge>
                {currentCategoryImages.length > 1 && (
                  <div className="text-xs text-white/60 mt-2">
                    {currentIndexInLightbox + 1} / {currentCategoryImages.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

