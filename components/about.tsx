"use client"

import { Card } from "@/components/ui/card"
import { Building2, Users, Award, Globe, Target, Lightbulb } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Building2,
      title: "Established Excellence",
      description: "Multi-disciplinary engineering serving Nigeria since 1999",
      stat: "20+ Years",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified professionals with extensive experience",
      stat: "50+ Experts",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "ISO 9001:2015 certified with international compliance",
      stat: "ISO Certified",
    },
    {
      icon: Globe,
      title: "Major Clients",
      description: "Trusted partner of TotalEnergies and leading firms",
      stat: "Top Tier",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-lines opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
            About Us
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-charcoal-900">
            Engineering Excellence,{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
            Jospaka Ventures Nigeria Limited (JVNL) is a premier multi-disciplinary engineering, construction, and
            technical services company delivering world-class solutions to Nigeria's Oil & Gas industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/20 bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -z-10" />
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-orange-500 mb-2">{item.stat}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-charcoal-900">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-charcoal-900">Our Expertise</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  JVNL personnel have extensive experience handling projects of all scales across diverse industrial
                  sectors. Our multi-disciplinary teams bring years of professional experience from leading
                  organizations within and outside Nigeria.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We've delivered major projects including civil, electrical, and mechanical works, plus LPG supply for
                  TotalEnergies E&P Nigeria Limited at Obite Gas Plant and Ogbogu Life Camp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-charcoal-900">Local Content Leadership</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Following Nigeria's Local Content policy implementation, JVNL is positioned as a leading indigenous
                  contractor driving local capacity in engineering delivery.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We actively seek Joint Venture Development (JVD) partners to strengthen our capabilities in
                  engineering and construction management services for the Nigerian Oil & Gas industry.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="text-sm font-semibold text-orange-400 mb-2">ESTABLISHED</div>
                  <div className="text-5xl font-heading font-bold mb-2">1999</div>
                  <div className="text-neutral-300">Over two decades of engineering excellence</div>
                </div>
                <div className="border-t border-white/10 pt-8">
                  <div className="text-sm font-semibold text-orange-400 mb-2">CERTIFICATIONS</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>ISO 9001:2015 Quality Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>DPR Permits & Certifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>COREN Registered Engineers</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-8">
                  <div className="text-sm font-semibold text-orange-400 mb-2">COMPLIANCE</div>
                  <div className="text-neutral-300">
                    All work conforms to local and international standards for design, construction, and operation.
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-orange-500/30 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
