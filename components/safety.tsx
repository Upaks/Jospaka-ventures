"use client"

import { Card } from "@/components/ui/card"
import { Shield, Award, FileCheck, Users, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Safety() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      status: "Valid until 2026",
      image: "/images/certificates/certificate of registration.png",
    },
    {
      icon: FileCheck,
      title: "DPR Permits",
      description: "Department of Petroleum Resources Licensed",
      status: "Current",
      image: "/images/certificates/certificate of compliance.png",
    },
    {
      icon: Shield,
      title: "CASHES Policy",
      description: "Community Affairs, Safety, Health, Environment & Security",
      status: "Implemented",
      image: "/images/certificates/corporate affairs commission.png",
    },
    {
      icon: Users,
      title: "PENCOM Certified",
      description: "Pension Commission Compliance",
      status: "Current",
      image: "/images/certificates/tax clearance.png",
    },
  ]

  const selectedCert = certifications.find((cert) => cert.image === selectedImage)

  return (
    <section id="safety" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Safety & <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Quality</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to safety, health, and environmental protection is unwavering. We maintain the highest
            standards in all our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div 
                  className="relative w-full h-48 overflow-hidden bg-neutral-50 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                  <p className="text-xs text-orange-600 font-medium">{cert.status}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt={selectedCert?.title || "Certificate"}
                  fill
                  className="object-contain p-8"
                  sizes="100vw"
                  priority
                />
              </div>
              {selectedCert && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
                  {selectedCert.title}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Safety Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-accent">CASHES Policy</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  JVNL recognizes the hazardous nature of its operations and maintains strict protocols to ensure an
                  accident-free environment for all staff and contractors.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Our watchword is: <span className="font-bold text-white">"DO IT SAFE, OTHERWISE DON'T"</span>
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-accent">Quality Objectives</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Provide designs and services in accordance with all specified requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Ensure satisfaction by meeting all project criteria relating to schedule, quality and cost
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Utilize proven technology and highly skilled human resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
