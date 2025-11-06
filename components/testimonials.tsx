import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "JVNL has been an exceptional partner for our engineering and construction needs at Obite Gas Plant. Their commitment to quality, safety standards, and timely delivery has consistently exceeded our expectations. Their multi-disciplinary expertise makes them a valuable contractor.",
      author: "Project Manager",
      company: "TotalEnergies E&P Nigeria Limited",
      role: "Major Client",
      rating: 5,
      project: "Obite Gas Plant Infrastructure",
    },
    {
      quote: "The professionalism and technical excellence demonstrated by JVNL throughout our projects have been outstanding. Their team's attention to detail and adherence to ISO 9001:2015 standards provides us with confidence in their delivery capabilities.",
      author: "Engineering Lead",
      company: "TotalEnergies E&P Nigeria Limited",
      role: "Major Client",
      rating: 5,
      project: "Community Development Projects",
    },
    {
      quote: "Working with JVNL has been seamless. Their expertise in civil, electrical, and mechanical engineering, combined with their understanding of local content requirements, makes them a preferred indigenous contractor for our operations in Nigeria.",
      author: "Operations Manager",
      company: "TotalEnergies E&P Nigeria Limited",
      role: "Major Client",
      rating: 5,
      project: "OML58 Operations",
    },
  ]

  // Testimonials structured data for SEO
  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jospaka Ventures Nigeria Limited",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
    },
    "review": testimonials.map((testimonial) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author,
      },
      "reviewBody": testimonial.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsStructuredData) }}
      />
      <section id="testimonials" className="py-24 bg-gradient-to-br from-white via-neutral-50 to-orange-50/10 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
              Client Feedback
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900">
              What Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Trusted by leading companies in Nigeria's Oil & Gas industry for over 20 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30 bg-white relative overflow-hidden"
              >
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full -z-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-tr-full -z-10" />

                {/* Quote icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Quote className="w-7 h-7 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 leading-relaxed mb-6 text-base font-medium italic">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-orange-100 pt-6">
                  <div className="font-semibold text-charcoal-900 mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-orange-600 font-medium mb-1">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {testimonial.project}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full border border-orange-200/50 shadow-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <div className="h-6 w-px bg-neutral-200" />
              <span className="text-sm font-semibold text-charcoal-900">
                20+ Years of Excellence
              </span>
              <div className="h-6 w-px bg-neutral-200" />
              <span className="text-sm font-semibold text-neutral-600">
                45+ Successful Projects
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

