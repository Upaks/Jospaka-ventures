"use client"

import { Card } from "@/components/ui/card"
import { Shield, Award, FileCheck, Users } from "lucide-react"

export function Safety() {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
    },
    {
      icon: FileCheck,
      title: "DPR Permits",
      description: "Department of Petroleum Resources Licensed",
    },
    {
      icon: Shield,
      title: "CASHES Policy",
      description: "Community Affairs, Safety, Health, Environment & Security",
    },
    {
      icon: Users,
      title: "PENCOM Certified",
      description: "Pension Commission Compliance",
    },
  ]

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
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
              </Card>
            )
          })}
        </div>

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
