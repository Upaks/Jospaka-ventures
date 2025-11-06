import { Card } from "@/components/ui/card"
import { Wrench, Zap, Cog, Gauge, HardHat, Droplets, Flame, Leaf } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: HardHat,
      title: "Civil Engineering",
      description: "Construction of roads, buildings, drainage systems, and infrastructure projects",
      areas: ["Road Construction", "Building Projects", "Drainage Systems", "Retaining Walls"],
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Complete electrical installation, maintenance, and power distribution services",
      areas: ["Power Distribution", "Electrical Installation", "Lighting Systems", "Maintenance"],
    },
    {
      icon: Cog,
      title: "Mechanical Engineering",
      description: "Mechanical systems design, installation, and maintenance for industrial facilities",
      areas: ["Equipment Installation", "System Maintenance", "Mechanical Design", "Repairs"],
    },
    {
      icon: Gauge,
      title: "Instrumentation",
      description: "Precision instrumentation and control systems for oil & gas operations",
      areas: ["Control Systems", "Instrumentation", "Calibration", "Monitoring"],
    },
    {
      icon: Flame,
      title: "LPG Supply",
      description: "Reliable supply of LPG content to industrial facilities and life camps",
      areas: ["LPG Content Supply", "Gas Rental Services", "Refilling Services", "Distribution"],
    },
    {
      icon: Leaf,
      title: "Bioremediation",
      description: "Environmental cleanup and pollution control for soil and water",
      areas: ["Soil Remediation", "Water Treatment", "Pollution Control", "Environmental Cleanup"],
    },
    {
      icon: Wrench,
      title: "Technical Consultancy",
      description: "Expert technical consulting and project management services",
      areas: ["Project Management", "Technical Consulting", "Design Services", "Supervision"],
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Water treatment plant operation, maintenance, and management",
      areas: ["Plant Maintenance", "Water Distribution", "System Operation", "Quality Control"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-orange-50/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900">
            Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Comprehensive engineering and construction services from project definition through commissioning and
            operations support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group p-6 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-orange-500/30 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full -z-10" />
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-charcoal-900">{service.title}</h3>
                <p className="text-sm text-neutral-700 mb-4 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-2">
                  {service.areas.map((area, idx) => (
                    <li key={idx} className="text-xs text-neutral-600 flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex-shrink-0 shadow-sm" />
                      {area}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
