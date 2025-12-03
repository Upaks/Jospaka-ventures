"use client"

import { Card } from "@/components/ui/card"
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Certificates() {
  const certificates = [
    {
      title: "Certificate of Compliance",
      image: "/images/certificates/certificate of compliance.png",
      description: "Certificate of Compliance with regulatory standards",
    },
    {
      title: "Certificate of Registration",
      image: "/images/certificates/certificate of registration.png",
      description: "Corporate registration certificate",
    },
    {
      title: "Corporate Affairs Commission",
      image: "/images/certificates/corporate affairs commission.png",
      description: "Registered with Corporate Affairs Commission",
    },
    {
      title: "Tax Clearance Certificate",
      image: "/images/certificates/tax clearance.png",
      description: "Tax compliance and clearance certificate",
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
  }

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex === 0 ? certificates.length - 1 : selectedIndex - 1
      setSelectedIndex(newIndex)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex === certificates.length - 1 ? 0 : selectedIndex + 1
      setSelectedIndex(newIndex)
    }
  }

  const currentCertificate = selectedIndex !== null ? certificates[selectedIndex] : null

  return (
    <section id="certificates" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-orange-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
            Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900">
            Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Recognized certifications and compliance documents demonstrating our commitment to quality and regulatory standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-orange-500/30 cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative w-full h-64 overflow-hidden bg-neutral-100">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-medium">{cert.title}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-charcoal-900">{cert.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedIndex !== null && currentCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {certificates.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {certificates.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                  aria-label="Next certificate"
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
                  src={currentCertificate.image}
                  alt={currentCertificate.title}
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Certificate Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-center">
                <div className="font-semibold text-lg mb-1">{currentCertificate.title}</div>
                {certificates.length > 1 && (
                  <div className="text-xs text-white/60 mt-2">
                    {selectedIndex + 1} / {certificates.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

