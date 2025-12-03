import { HardHat, Zap, Cog, Gauge, Flame, Leaf, Wrench, Droplets, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  slug: string
  title: string
  icon: LucideIcon
  shortDescription: string
  fullDescription: string
  areas: string[]
  areaDescriptions?: Record<string, string>
  accomplishments: string[]
  keyFeatures: string[]
  useCases: string[]
  clients?: string[]
  certifications?: string[]
  statistics?: {
    label: string
    value: string
  }[]
}

export const services: Service[] = [
  {
    id: "civil-engineering",
    slug: "civil-engineering",
    title: "Civil Engineering",
    icon: HardHat,
    shortDescription: "Construction of roads, buildings, drainage systems, and infrastructure projects",
    fullDescription: "JVNL provides comprehensive civil engineering services for industrial and commercial infrastructure projects. With over 20 years of experience, we specialize in designing and constructing robust, sustainable infrastructure that meets the highest quality standards. Our expertise spans road construction, building projects, drainage systems, and complex infrastructure developments for the oil & gas industry. We combine traditional engineering excellence with modern construction techniques to deliver projects that stand the test of time. Our team of COREN-registered engineers ensures every project adheres to international standards while meeting local regulatory requirements. From initial site assessment through final commissioning, we manage every aspect of civil engineering projects with meticulous attention to detail, safety, and quality.",
    areas: [
      "Road Construction & Maintenance",
      "Building Projects & Facilities",
      "Drainage Systems & Stormwater Management",
      "Retaining Walls & Earthworks",
      "Site Preparation & Grading",
      "Concrete Structures",
      "Foundation Engineering",
    ],
    areaDescriptions: {
      "Road Construction & Maintenance": "We design and construct durable road networks for industrial facilities, including access roads, internal roadways, and heavy-duty pavements capable of supporting industrial traffic. Our maintenance services ensure roads remain in optimal condition through regular inspections, repairs, and resurfacing programs.",
      "Building Projects & Facilities": "From administrative buildings to industrial facilities, we handle complete building construction projects. Our services include structural design, construction management, and facility completion, ensuring buildings meet functional requirements and safety standards.",
      "Drainage Systems & Stormwater Management": "We design and install comprehensive drainage systems to manage stormwater runoff and prevent flooding. Our solutions include culverts, channels, retention ponds, and integrated stormwater management systems that protect facilities and surrounding areas.",
      "Retaining Walls & Earthworks": "Our earthworks services include excavation, filling, compaction, and the construction of retaining walls to stabilize slopes and create level platforms for construction. We use geotechnical engineering principles to ensure stability and longevity.",
      "Site Preparation & Grading": "Proper site preparation is crucial for project success. We provide comprehensive site clearing, excavation, grading, and compaction services to prepare sites for construction, ensuring proper drainage and stable foundations.",
      "Concrete Structures": "We design and construct reinforced concrete structures including foundations, columns, beams, slabs, and specialized concrete elements. Our expertise ensures structures meet strength, durability, and design specifications.",
      "Foundation Engineering": "Foundation design and construction is critical for structural integrity. We provide deep foundations, shallow foundations, and specialized foundation solutions tailored to soil conditions and structural requirements.",
    },
    accomplishments: [
      "Successfully completed road construction projects for TotalEnergies facilities",
      "Designed and built multiple industrial facilities with 100% safety record",
      "Managed complex drainage systems for major gas plant operations",
      "Delivered infrastructure projects on-time and within budget",
    ],
    keyFeatures: [
      "ISO 9001:2015 certified quality management",
      "COREN registered civil engineers",
      "Modern construction equipment and techniques",
      "Comprehensive project management",
      "Strict adherence to safety standards",
    ],
    useCases: [
      "Industrial facility construction and expansion",
      "Road networks for operational sites",
      "Drainage and stormwater systems",
      "Building construction and renovation",
      "Site infrastructure development",
    ],
    clients: ["TotalEnergies E&P Nigeria Limited", "Various Oil & Gas Operators"],
    certifications: ["ISO 9001:2015", "DPR Permits", "COREN Registration"],
    statistics: [
      { label: "Projects Completed", value: "45+" },
      { label: "Safety Record", value: "100%" },
      { label: "Years Experience", value: "20+" },
    ],
  },
  {
    id: "electrical-engineering",
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    icon: Zap,
    shortDescription: "Complete electrical installation, maintenance, and power distribution services",
    fullDescription: "Our electrical engineering services cover everything from design and installation to maintenance and troubleshooting. We ensure reliable, safe, and efficient electrical systems for industrial facilities, with expertise in power distribution, lighting systems, control panels, and specialized electrical installations for oil & gas operations. Our certified electricians work with both high-voltage and low-voltage systems, ensuring compliance with international electrical codes and safety standards. We provide 24/7 maintenance support to minimize downtime and ensure continuous operations. Our energy efficiency optimization services help reduce operational costs while maintaining system reliability.",
    areas: [
      "Power Distribution Systems",
      "Electrical Installation & Wiring",
      "Lighting Systems Design & Installation",
      "Control Panel Fabrication",
      "Electrical Maintenance & Repairs",
      "Motor Control Systems",
      "Emergency Power Systems",
    ],
    areaDescriptions: {
      "Power Distribution Systems": "We design, install, and maintain comprehensive power distribution networks including transformers, switchgear, distribution panels, and protection systems. Our systems ensure reliable power supply to all facility equipment with proper load balancing and protection mechanisms.",
      "Electrical Installation & Wiring": "Our certified electricians handle complete electrical installations including conduit systems, cable routing, termination, and connection of all electrical equipment. We ensure proper sizing, protection, and compliance with electrical codes.",
      "Lighting Systems Design & Installation": "We design and install efficient lighting systems for industrial facilities, including general area lighting, task lighting, emergency lighting, and specialized lighting for hazardous areas. Our solutions optimize visibility while minimizing energy consumption.",
      "Control Panel Fabrication": "We fabricate custom control panels for process control, motor control, and automation systems. Our panels are built to specifications with proper component selection, wiring, and testing to ensure reliable operation.",
      "Electrical Maintenance & Repairs": "Our preventive and corrective maintenance programs keep electrical systems operating reliably. We perform regular inspections, testing, repairs, and upgrades to prevent failures and extend equipment life.",
      "Motor Control Systems": "We install and maintain motor control systems including starters, variable frequency drives, protection relays, and control circuits. Our systems ensure safe and efficient motor operation with proper protection and control.",
      "Emergency Power Systems": "We design and install emergency power systems including backup generators, UPS systems, and automatic transfer switches. These systems ensure critical operations continue during power outages.",
    },
    accomplishments: [
      "Installed comprehensive electrical systems for gas plant operations",
      "Maintained 24/7 power distribution for critical facilities",
      "Upgraded electrical infrastructure for improved efficiency",
      "Achieved zero electrical incidents across all projects",
    ],
    keyFeatures: [
      "High-voltage and low-voltage expertise",
      "Industrial-grade equipment and components",
      "24/7 maintenance support",
      "Energy efficiency optimization",
      "Compliance with international electrical codes",
    ],
    useCases: [
      "New facility electrical installation",
      "Power distribution system upgrades",
      "Lighting system modernization",
      "Control system installation",
      "Emergency power backup systems",
    ],
    statistics: [
      { label: "Systems Installed", value: "50+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    icon: Cog,
    shortDescription: "Mechanical systems design, installation, and maintenance for industrial facilities",
    fullDescription: "JVNL's mechanical engineering division provides comprehensive solutions for industrial mechanical systems. From HVAC installation to equipment maintenance, we ensure optimal performance and reliability of all mechanical components in your facility. Our team of experienced mechanical engineers and technicians brings expertise in equipment installation, preventive maintenance, and system optimization. We work with various mechanical systems including pumps, compressors, turbines, and specialized industrial equipment. Our computerized maintenance management systems help track equipment performance and schedule maintenance activities, reducing downtime and extending equipment life.",
    areas: [
      "Equipment Installation & Commissioning",
      "System Maintenance & Servicing",
      "Mechanical Design & Engineering",
      "Repairs & Troubleshooting",
      "HVAC Systems",
      "Piping & Plumbing",
      "Mechanical Equipment Fabrication",
    ],
    areaDescriptions: {
      "Equipment Installation & Commissioning": "We handle complete installation and commissioning of mechanical equipment including pumps, compressors, turbines, and specialized machinery. Our commissioning process ensures equipment operates according to specifications and integrates properly with existing systems.",
      "System Maintenance & Servicing": "Our preventive and predictive maintenance programs keep mechanical systems operating efficiently. We perform regular inspections, lubrication, alignment, and component replacement to prevent failures and optimize performance.",
      "Mechanical Design & Engineering": "Our mechanical engineers provide design services for new systems and modifications to existing systems. We ensure designs meet functional requirements, safety standards, and operational efficiency goals.",
      "Repairs & Troubleshooting": "Our rapid response team provides emergency repairs and troubleshooting services. We diagnose problems quickly and implement effective solutions to minimize downtime and restore operations.",
      "HVAC Systems": "We design, install, and maintain heating, ventilation, and air conditioning systems for industrial facilities. Our systems ensure proper temperature control, air quality, and comfort for personnel while optimizing energy efficiency.",
      "Piping & Plumbing": "We install and maintain piping systems for process fluids, utilities, and plumbing. Our services include pipe fabrication, installation, pressure testing, and repairs for various pipe materials and applications.",
      "Mechanical Equipment Fabrication": "We fabricate custom mechanical components and equipment according to specifications. Our fabrication capabilities include welding, machining, and assembly of mechanical systems and components.",
    },
    accomplishments: [
      "Installed and maintained critical mechanical systems for gas operations",
      "Extended equipment lifespan through preventive maintenance programs",
      "Reduced downtime through rapid response maintenance services",
      "Improved system efficiency through optimization projects",
    ],
    keyFeatures: [
      "Preventive and predictive maintenance",
      "24/7 emergency response",
      "Original equipment manufacturer (OEM) certified technicians",
      "Computerized maintenance management systems",
      "Performance optimization services",
    ],
    useCases: [
      "Industrial equipment installation",
      "Facility mechanical system maintenance",
      "HVAC system design and installation",
      "Piping system installation and repairs",
      "Equipment optimization and upgrades",
    ],
    statistics: [
      { label: "Equipment Maintained", value: "200+" },
      { label: "Response Time", value: "<2 hours" },
    ],
  },
  {
    id: "instrumentation",
    slug: "instrumentation",
    title: "Instrumentation",
    icon: Gauge,
    shortDescription: "Precision instrumentation and control systems for oil & gas operations",
    fullDescription: "Our instrumentation services ensure precise measurement and control of critical process variables in oil & gas operations. We provide installation, calibration, maintenance, and troubleshooting of instrumentation systems, ensuring accuracy and reliability for safe operations. Our certified calibration laboratory maintains traceability to international standards, ensuring measurement accuracy. We work with various instrumentation technologies including pressure transmitters, temperature sensors, flow meters, level indicators, and analytical instruments. Our expertise in control systems and SCADA integration enables comprehensive process monitoring and automation. Safety instrumented systems are a critical component of our services, protecting personnel and equipment through automated safety responses.",
    areas: [
      "Control Systems Design & Installation",
      "Instrumentation Calibration",
      "Process Monitoring Systems",
      "SCADA Systems",
      "Pressure & Temperature Measurement",
      "Flow Metering Systems",
      "Safety Instrumented Systems (SIS)",
    ],
    areaDescriptions: {
      "Control Systems Design & Installation": "We design and install process control systems including DCS, PLC, and distributed control architectures. Our systems enable automated process control, monitoring, and optimization for efficient and safe operations.",
      "Instrumentation Calibration": "Our certified calibration laboratory provides accurate calibration services for all types of instruments. We maintain traceability to international standards and provide calibration certificates for regulatory compliance.",
      "Process Monitoring Systems": "We install and maintain process monitoring systems that provide real-time data on process variables. These systems enable operators to monitor performance, detect anomalies, and optimize operations.",
      "SCADA Systems": "We design, install, and maintain Supervisory Control and Data Acquisition (SCADA) systems for remote monitoring and control. Our SCADA systems provide comprehensive visibility and control across distributed facilities.",
      "Pressure & Temperature Measurement": "We install and maintain pressure and temperature measurement instruments including transmitters, sensors, and gauges. Accurate measurement is critical for process control and safety in oil & gas operations.",
      "Flow Metering Systems": "We install and maintain flow metering systems for accurate measurement of fluid flow rates. Our systems include various meter types selected for specific applications and accuracy requirements.",
      "Safety Instrumented Systems (SIS)": "We design and maintain Safety Instrumented Systems that automatically respond to hazardous conditions. These systems protect personnel and equipment by initiating safety shutdowns when process limits are exceeded.",
    },
    accomplishments: [
      "Calibrated and maintained instrumentation for major gas plants",
      "Installed advanced control systems improving operational efficiency",
      "Maintained 100% accuracy in critical measurements",
      "Implemented safety instrumented systems meeting international standards",
    ],
    keyFeatures: [
      "Certified calibration laboratory",
      "Advanced diagnostic equipment",
      "Compliance with international standards",
      "Training and technical support",
      "Remote monitoring capabilities",
    ],
    useCases: [
      "New facility instrumentation installation",
      "Instrument calibration and certification",
      "Control system upgrades",
      "Process monitoring and data acquisition",
      "Safety system implementation",
    ],
    certifications: ["ISO/IEC 17025 Calibration Standards"],
    statistics: [
      { label: "Instruments Maintained", value: "500+" },
      { label: "Calibration Accuracy", value: "±0.1%" },
    ],
  },
  {
    id: "lpg-supply",
    slug: "lpg-supply",
    title: "LPG Supply",
    icon: Flame,
    shortDescription: "Reliable supply of LPG content to industrial facilities and life camps",
    fullDescription: "JVNL provides reliable LPG supply services to industrial facilities and life camps across Nigeria. With a focus on safety and reliability, we ensure continuous supply of high-quality LPG for cooking, heating, and industrial applications. Our distribution network spans multiple operational sites, ensuring timely delivery when needed. We maintain strict quality control standards and proper handling procedures to ensure safety throughout the supply chain. Our 24/7 availability and emergency response capability ensure uninterrupted supply even during critical situations. We work with various cylinder sizes and bulk supply options to meet diverse customer needs.",
    areas: [
      "LPG Content Supply",
      "Gas Rental Services",
      "Refilling Services",
      "Distribution & Logistics",
      "Bulk LPG Supply",
      "Cylinder Management",
      "Emergency Supply Services",
    ],
    areaDescriptions: {
      "LPG Content Supply": "We supply high-quality LPG content in various cylinder sizes to meet customer needs. Our supply chain ensures consistent quality and reliable availability for cooking, heating, and industrial applications.",
      "Gas Rental Services": "We provide LPG cylinder rental services, allowing customers to use cylinders without purchasing them. This service includes cylinder delivery, collection, and management, providing flexibility and convenience.",
      "Refilling Services": "Our refilling services ensure customers always have access to LPG. We provide scheduled refilling and on-demand refilling services, maintaining proper safety procedures throughout the refilling process.",
      "Distribution & Logistics": "Our distribution network and logistics capabilities ensure timely delivery of LPG to remote locations and life camps. We coordinate transportation, scheduling, and delivery to meet customer requirements.",
      "Bulk LPG Supply": "For large-scale operations, we provide bulk LPG supply services including bulk storage solutions and delivery systems. This service is ideal for facilities with high consumption rates.",
      "Cylinder Management": "We manage LPG cylinders throughout their lifecycle including tracking, inspection, maintenance, and replacement. Our management system ensures cylinders are safe, properly maintained, and available when needed.",
      "Emergency Supply Services": "Our emergency supply services ensure critical operations continue even during supply disruptions. We maintain emergency stock and rapid response capabilities to address urgent supply needs.",
    },
    accomplishments: [
      "Maintained continuous LPG supply for major life camps",
      "Zero supply interruptions over 5+ years",
      "Expanded distribution network across operational sites",
      "Achieved 100% customer satisfaction in supply reliability",
    ],
    keyFeatures: [
      "24/7 supply availability",
      "Safe handling and transportation",
      "Quality assured LPG content",
      "Flexible delivery schedules",
      "Emergency response capability",
    ],
    useCases: [
      "Life camp cooking gas supply",
      "Industrial heating applications",
      "Backup power fuel supply",
      "Emergency fuel provision",
    ],
    statistics: [
      { label: "Cylinders Supplied", value: "1000+" },
      { label: "Supply Reliability", value: "99.9%" },
    ],
  },
  {
    id: "bioremediation",
    slug: "bioremediation",
    title: "Bioremediation",
    icon: Leaf,
    shortDescription: "Environmental cleanup and pollution control for soil and water",
    fullDescription: "Our bioremediation services provide environmentally-friendly solutions for soil and water contamination. Using natural biological processes, we restore contaminated sites to safe, usable conditions while minimizing environmental impact. Our approach uses microorganisms to break down contaminants into harmless byproducts, making it a sustainable and cost-effective remediation method. We work closely with regulatory authorities to ensure compliance with environmental standards and obtain necessary approvals. Our comprehensive monitoring programs track remediation progress and verify successful cleanup. We have successfully remediated various types of contamination including petroleum hydrocarbons, providing a natural solution that restores land to productive use.",
    areas: [
      "Soil Remediation",
      "Water Treatment & Cleanup",
      "Pollution Control",
      "Environmental Cleanup",
      "Contaminated Site Restoration",
      "Bioaugmentation Services",
      "Environmental Monitoring",
    ],
    areaDescriptions: {
      "Soil Remediation": "We remediate contaminated soil using biological processes that break down pollutants naturally. Our methods include land farming, biopiles, and in-situ bioremediation, restoring soil to safe conditions for use.",
      "Water Treatment & Cleanup": "Our water treatment services address contamination in groundwater and surface water. We use biological treatment methods to remove pollutants and restore water quality to acceptable standards.",
      "Pollution Control": "We implement pollution control measures to prevent contamination and manage existing pollution sources. Our services include containment, treatment, and monitoring to protect the environment.",
      "Environmental Cleanup": "We provide comprehensive environmental cleanup services for contaminated sites. Our cleanup activities restore sites to regulatory standards, enabling safe reuse and development.",
      "Contaminated Site Restoration": "We restore contaminated sites to productive use through systematic remediation programs. Our restoration process includes assessment, remediation, verification, and site closure documentation.",
      "Bioaugmentation Services": "We enhance natural bioremediation processes by introducing specialized microorganisms that accelerate contaminant breakdown. This service is particularly effective for recalcitrant contaminants.",
      "Environmental Monitoring": "We provide comprehensive environmental monitoring services including soil sampling, water quality testing, and air quality monitoring. Our monitoring programs track remediation progress and verify compliance.",
    },
    accomplishments: [
      "Successfully remediated contaminated sites to regulatory standards",
      "Restored multiple hectares of affected land",
      "Achieved zero environmental violations",
      "Received recognition for environmental stewardship",
    ],
    keyFeatures: [
      "Environmentally sustainable methods",
      "Regulatory compliance assurance",
      "Comprehensive monitoring and reporting",
      "Fast and effective remediation",
      "Cost-effective solutions",
    ],
    useCases: [
      "Oil spill cleanup and remediation",
      "Contaminated soil treatment",
      "Groundwater remediation",
      "Waste management solutions",
    ],
    certifications: ["Environmental Impact Assessment", "DPR Environmental Compliance"],
    statistics: [
      { label: "Sites Remediated", value: "30+" },
      { label: "Success Rate", value: "100%" },
    ],
  },
  {
    id: "technical-consultancy",
    slug: "technical-consultancy",
    title: "Technical Consultancy",
    icon: Wrench,
    shortDescription: "Expert technical consulting and project management services",
    fullDescription: "JVNL offers comprehensive technical consultancy services, providing expert advice and project management for engineering and construction projects. Our experienced team helps clients navigate complex technical challenges and achieve project success. Our multi-disciplinary expertise spans civil, mechanical, electrical, and instrumentation engineering, enabling us to provide holistic solutions. We use proven project management methodologies to ensure projects are delivered on time, within budget, and to quality standards. Our consulting services help clients make informed decisions, optimize designs, and mitigate risks. We provide independent oversight and quality assurance, ensuring projects meet specifications and regulatory requirements.",
    areas: [
      "Project Management",
      "Technical Consulting",
      "Design Services",
      "Supervision & Inspection",
      "Feasibility Studies",
      "Quality Assurance & Control",
      "Contract Management",
    ],
    areaDescriptions: {
      "Project Management": "We provide comprehensive project management services including planning, scheduling, resource allocation, risk management, and stakeholder coordination. Our project managers ensure projects are delivered successfully from conception to completion.",
      "Technical Consulting": "Our technical consultants provide expert advice on engineering challenges, design optimization, and technical solutions. We help clients make informed decisions and solve complex technical problems.",
      "Design Services": "We provide engineering design services including conceptual design, detailed design, and design review. Our designs meet functional requirements, safety standards, and regulatory compliance while optimizing cost and performance.",
      "Supervision & Inspection": "We provide construction supervision and inspection services to ensure work is performed according to specifications and quality standards. Our inspectors verify compliance and identify issues before they become problems.",
      "Feasibility Studies": "We conduct feasibility studies to evaluate project viability, technical requirements, and economic considerations. Our studies help clients make informed go/no-go decisions and optimize project approaches.",
      "Quality Assurance & Control": "We implement quality assurance and control programs to ensure projects meet specifications and standards. Our QA/QC services include inspection, testing, documentation, and quality management systems.",
      "Contract Management": "We provide contract management services including contract preparation, negotiation, administration, and dispute resolution. Our services ensure contracts are properly executed and risks are managed effectively.",
    },
    accomplishments: [
      "Successfully managed multiple multi-million dollar projects",
      "Provided consulting services for major facility expansions",
      "Delivered projects on-time and within budget",
      "Achieved client satisfaction ratings above 95%",
    ],
    keyFeatures: [
      "Multi-disciplinary expertise",
      "Proven project management methodologies",
      "Risk assessment and mitigation",
      "Stakeholder coordination",
      "Comprehensive reporting",
    ],
    useCases: [
      "Project feasibility and planning",
      "Engineering design review",
      "Construction supervision",
      "Quality assurance programs",
      "Project rescue and recovery",
    ],
    statistics: [
      { label: "Projects Managed", value: "60+" },
      { label: "On-Time Delivery", value: "98%" },
    ],
  },
  {
    id: "water-treatment",
    slug: "water-treatment",
    title: "Water Treatment",
    icon: Droplets,
    shortDescription: "Water treatment plant operation, maintenance, and management",
    fullDescription: "Our water treatment services ensure access to clean, safe water for industrial and residential use. We operate, maintain, and manage water treatment facilities, ensuring consistent water quality and reliable supply. Our 24/7 plant operation ensures continuous water supply while maintaining quality standards. We use automated treatment systems and continuous monitoring to ensure water quality meets NAFDAC and WHO standards. Our maintenance programs keep treatment equipment operating efficiently, preventing failures and ensuring reliable operation. We provide comprehensive water quality testing and reporting, giving clients confidence in water safety and compliance.",
    areas: [
      "Plant Operation & Management",
      "Water Distribution Systems",
      "System Maintenance",
      "Quality Control & Testing",
      "Water Purification",
      "Wastewater Treatment",
      "System Upgrades & Optimization",
    ],
    areaDescriptions: {
      "Plant Operation & Management": "We operate and manage water treatment plants on a 24/7 basis, ensuring continuous water production and supply. Our operators monitor processes, adjust treatment parameters, and maintain optimal plant performance.",
      "Water Distribution Systems": "We maintain water distribution systems including pipelines, storage tanks, and distribution networks. Our services ensure water reaches end users reliably and maintains quality throughout the distribution system.",
      "System Maintenance": "Our preventive and corrective maintenance programs keep water treatment systems operating efficiently. We perform regular inspections, cleaning, repairs, and component replacement to prevent failures.",
      "Quality Control & Testing": "We conduct comprehensive water quality testing including chemical, biological, and physical parameter analysis. Our testing ensures water meets quality standards and regulatory requirements.",
      "Water Purification": "We operate water purification processes including filtration, disinfection, and treatment to remove contaminants and ensure safe water. Our purification systems are designed to meet specific water quality requirements.",
      "Wastewater Treatment": "We provide wastewater treatment services to treat and dispose of wastewater safely. Our treatment processes remove contaminants and ensure effluent meets discharge standards.",
      "System Upgrades & Optimization": "We upgrade and optimize water treatment systems to improve efficiency, capacity, and performance. Our upgrades enhance system reliability and reduce operational costs.",
    },
    accomplishments: [
      "Operated water treatment plants serving thousands of users",
      "Maintained 100% water quality compliance",
      "Improved system efficiency through optimization projects",
      "Extended equipment lifespan through preventive maintenance",
    ],
    keyFeatures: [
      "24/7 plant operation",
      "Continuous quality monitoring",
      "Automated treatment systems",
      "Compliance with NAFDAC and WHO standards",
      "Emergency response capability",
    ],
    useCases: [
      "Industrial water treatment",
      "Potable water supply",
      "Wastewater treatment",
      "Water system maintenance",
    ],
    certifications: ["NAFDAC Compliance", "WHO Water Quality Standards"],
    statistics: [
      { label: "Plants Operated", value: "15+" },
      { label: "Water Quality Compliance", value: "100%" },
    ],
  },
  {
    id: "manpower",
    slug: "manpower",
    title: "Manpower",
    icon: Users,
    shortDescription: "Skilled workforce supply and personnel management for engineering and construction projects",
    fullDescription: "JVNL provides skilled workforce solutions for engineering and construction projects. We supply qualified professionals including engineers, technicians, supervisors, and skilled workers, ensuring your projects have the right talent at the right time. Our comprehensive screening process ensures all personnel are qualified, certified, and experienced. We provide ongoing training and development to keep skills current and enhance performance. Our flexible staffing solutions accommodate project needs from short-term assignments to long-term placements. We manage personnel throughout their assignment, providing support and ensuring performance standards are met. Our services support local content development by providing opportunities for local professionals and skilled workers.",
    areas: [
      "Skilled Labor Supply",
      "Personnel Management",
      "Project Staffing",
      "Workforce Solutions",
      "Engineer Placement",
      "Technician Services",
      "Supervision Services",
    ],
    areaDescriptions: {
      "Skilled Labor Supply": "We supply skilled workers including welders, electricians, mechanics, and other tradespeople. All personnel are qualified, certified, and experienced in their respective fields, ensuring quality workmanship.",
      "Personnel Management": "We provide comprehensive personnel management services including recruitment, onboarding, performance management, and offboarding. Our management ensures personnel are productive and meet project requirements.",
      "Project Staffing": "We provide complete project staffing solutions, matching personnel to project needs. Our staffing services include engineers, technicians, supervisors, and skilled workers for various project phases.",
      "Workforce Solutions": "We provide flexible workforce solutions including temporary, contract, and permanent placements. Our solutions accommodate varying project needs and timelines, ensuring you have the right people when needed.",
      "Engineer Placement": "We place qualified engineers including civil, mechanical, electrical, and instrumentation engineers. Our engineers are registered with professional bodies and have relevant experience in their fields.",
      "Technician Services": "We provide qualified technicians for various disciplines including electrical, mechanical, instrumentation, and maintenance. Our technicians are certified and experienced in industrial applications.",
      "Supervision Services": "We provide supervision services including project supervisors, site supervisors, and quality supervisors. Our supervisors ensure work is performed according to specifications, schedules, and quality standards.",
    },
    accomplishments: [
      "Supplied qualified personnel for 45+ major projects",
      "Maintained high retention rates through quality placements",
      "Trained and certified hundreds of skilled workers",
      "Supported local content development initiatives",
    ],
    keyFeatures: [
      "Qualified and certified professionals",
      "Comprehensive background screening",
      "Ongoing training and development",
      "Flexible staffing solutions",
      "Performance management",
    ],
    useCases: [
      "Project staffing and labor supply",
      "Technical expert placement",
      "Temporary workforce solutions",
      "Specialized skill requirements",
    ],
    statistics: [
      { label: "Personnel Supplied", value: "500+" },
      { label: "Client Satisfaction", value: "95%+" },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}

