"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Projects() {
  const featuredProjects = [
    {
      title: "Obite Gas Plant Infrastructure",
      client: "TotalEnergies E&P Nigeria Limited",
      location: "Obite, Rivers State",
      year: "2010-2013",
      description:
        "Construction of car park, retaining wall, drainage systems, and toilet facilities at the Obite Gas Plant.",
      services: ["Civil Engineering", "Construction", "Drainage"],
      image: "/images/projects/IPP Photos1.jpg",
    },
    {
      title: "Obite Community Development",
      client: "TotalEnergies E&P Nigeria Limited",
      location: "Obite, Rivers State",
      year: "2008-2013",
      description:
        "Construction of primary school, health center, water treatment plant maintenance, and road infrastructure.",
      services: ["Civil Engineering", "Water Treatment", "Construction"],
      image: "/images/projects/SSL Onicha Ugbo 2.JPG",
    },
    {
      title: "Mammography Centre",
      client: "TotalEnergies",
      location: "Federal Medical Centre, Yenagoa, Bayelsa State",
      year: "2021",
      description: "Complete construction and furnishing of a modern mammography center for healthcare services.",
      services: ["Construction", "Electrical", "Furnishing"],
      image: "/images/projects/Mammo 1.jpeg",
    },
    {
      title: "Science Laboratory",
      client: "TotalEnergies",
      location: "Onicha Ugbo, Delta State",
      year: "2020",
      description: "Construction and complete furnishing of a school science laboratory facility.",
      services: ["Construction", "Electrical", "Furnishing"],
      image: "/images/projects/SSL Onicha Ugbo 1.JPG",
    },
    {
      title: "OML58 Road Repairs",
      client: "TotalEnergies E&P Nigeria Limited",
      location: "OML58 Obite",
      year: "2019",
      description: "Access road repair and maintenance of IPP roads in the OML58 operational area.",
      services: ["Civil Engineering", "Road Construction"],
      image: "/images/projects/IPP Photos.jpg",
    },
    {
      title: "LPG Supply Services",
      client: "TotalEnergies E&P Nigeria Limited",
      location: "Ogbogu Life Camp",
      year: "2010-Present",
      description: "Ongoing supply of LPG content to Ogbogu Life Camp kitchen facilities.",
      services: ["LPG Supply", "Distribution"],
      image: "/images/projects/IPP Photos2.jpg",
    },
  ]

  const projectsWithImages = featuredProjects.filter((project) => project.image !== null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleImageClick = (imagePath: string) => {
    const index = projectsWithImages.findIndex((p) => p.image === imagePath)
    if (index !== -1) {
      setSelectedImageIndex(index)
    }
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex === 0 ? projectsWithImages.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(newIndex)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex === projectsWithImages.length - 1 ? 0 : selectedImageIndex + 1
      setSelectedImageIndex(newIndex)
    }
  }

  const currentProject = selectedImageIndex !== null ? projectsWithImages[selectedImageIndex] : null

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Over 45 successfully completed projects for major oil & gas companies across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              {project.image && (
                <div 
                  className="relative w-full h-48 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(project.image!)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 text-foreground text-balance">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal/Lightbox with Navigation */}
        {selectedImageIndex !== null && currentProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {projectsWithImages.length > 1 && (
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
              {projectsWithImages.length > 1 && (
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
                  src={currentProject.image!}
                  alt={currentProject.title}
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-center">
                <div className="font-semibold text-lg mb-1">{currentProject.title}</div>
                <div className="text-sm text-white/80">{currentProject.client}</div>
                {projectsWithImages.length > 1 && (
                  <div className="text-xs text-white/60 mt-2">
                    {selectedImageIndex + 1} / {projectsWithImages.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            View our complete project portfolio and certifications in our company profile
          </p>
        </div>
      </div>
    </section>
  )
}
