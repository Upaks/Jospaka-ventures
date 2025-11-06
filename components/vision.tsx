import { Card } from "@/components/ui/card"
import { Target, Compass, TrendingUp } from "lucide-react"

export function Vision() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
            Our Foundation
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-charcoal-900">
            Vision, Mission & <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Goals</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The principles that guide our engineering excellence and drive our commitment to delivering world-class solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Vision Card */}
          <Card className="group relative p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-tr-full -z-10" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-charcoal-900">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed text-base">
              To be the preferred indigenous technology and knowledge-driven Engineering and Construction company
              operating at the highest standards of excellence.
            </p>
            
            {/* Decorative accent */}
            <div className="mt-6 pt-6 border-t border-orange-100">
              <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Excellence Driven
              </div>
            </div>
          </Card>

          {/* Mission Card */}
          <Card className="group relative p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-tr-full -z-10" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
              <Compass className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-charcoal-900">Our Mission</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To operate worldwide, thanks to our logistic means</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To offer fully engineering and technical assistance for complex industrial projects</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To be a leading indigenous engineering company with highest professional standards</span>
              </li>
            </ul>
            
            {/* Decorative accent */}
            <div className="mt-6 pt-6 border-t border-amber-100">
              <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Global Reach
              </div>
            </div>
          </Card>

          {/* Goals Card */}
          <Card className="group relative p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-tr-full -z-10" />
            
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-600/30">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-charcoal-900">Our Goals</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To be the reference contractor in our areas of competence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To participate in technical and human challenges related to client projects</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm shadow-orange-500/30" />
                <span className="leading-relaxed">To offer the best possible working conditions to our employees</span>
              </li>
            </ul>
            
            {/* Decorative accent */}
            <div className="mt-6 pt-6 border-t border-orange-100">
              <div className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Growth Focused
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full animate-pulse" />
            <span className="text-sm text-neutral-600 font-medium">Built on integrity, driven by excellence</span>
          </div>
        </div>
      </div>
    </section>
  )
}
