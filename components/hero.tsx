"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal-900 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />

      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-8 ${mounted ? "animate-in fade-in slide-in-from-left-8 duration-1000" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              ISO 9001:2015 Certified
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-balance">
              We Engineer and{" "}
              <span className="text-gradient bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Construct
              </span>{" "}
              with Precision
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
              Multi-disciplinary engineering and construction excellence for Nigeria's Oil & Gas industry.
              <span className="text-white font-medium"> 20+ years of proven expertise.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-2xl shadow-orange-500/40 group"
              >
                <a href="#services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white hover:text-charcoal-900 bg-transparent backdrop-blur-sm font-semibold"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              <div className="text-sm text-neutral-400">Trusted by:</div>
              <div className="font-semibold text-white">TotalEnergies E&P Nigeria</div>
              <div className="w-1 h-1 bg-orange-500 rounded-full" />
              <div className="text-sm text-neutral-400">45+ Major Projects</div>
            </div>
          </div>

          <div
            className={`relative ${mounted ? "animate-in fade-in slide-in-from-right-8 duration-1000 delay-300" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-gradient bg-gradient-to-br from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-neutral-300 font-medium">Years of Excellence</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 mt-8">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-gradient bg-gradient-to-br from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  45+
                </div>
                <div className="text-neutral-300 font-medium">Projects Delivered</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-gradient bg-gradient-to-br from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-neutral-300 font-medium">Safety Record</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 mt-8">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-gradient bg-gradient-to-br from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  ISO
                </div>
                <div className="text-neutral-300 font-medium">Certified Quality</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-orange-500/30 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-amber-500/30 rounded-full -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
