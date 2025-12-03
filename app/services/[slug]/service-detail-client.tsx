"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { getServiceBySlug } from "@/lib/services-data"

interface ServiceDetailClientProps {
  slug: string
}

export function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-lg text-neutral-600 mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/#services">Back to Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }
  
  const Icon = service.icon

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Link href="/#services">
              <Button variant="ghost" className="mb-8 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Full Description */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-charcoal-900">
                Overview
              </h2>
              <div className="space-y-4">
                {service.fullDescription.split(/(?<=\.)\s+(?=[A-Z])/).map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-lg text-neutral-700 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-charcoal-900 text-center">
                Our Service Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.areas.map((area, index) => (
                  <Card key={index} className="p-5 bg-white border border-neutral-200 hover:border-orange-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-neutral-900 font-semibold mb-2">{area}</h3>
                        {service.areaDescriptions && service.areaDescriptions[area] && (
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {service.areaDescriptions[area]}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-orange-50 mb-8">
                Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-neutral-100 font-semibold px-8 shadow-lg"
              >
                <Link href="/#contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

