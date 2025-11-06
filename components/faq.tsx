import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "What services does JVNL offer?",
      answer: "JVNL provides comprehensive multi-disciplinary engineering and construction services including Civil Engineering (roads, buildings, drainage systems), Electrical Engineering (power distribution, installations), Mechanical Engineering (equipment installation, maintenance), Instrumentation (control systems, calibration), LPG Supply, Bioremediation, Water Treatment, and Technical Consultancy services."
    },
    {
      question: "What is your experience in the Oil & Gas industry?",
      answer: "JVNL has over 20 years of proven expertise serving Nigeria's Oil & Gas industry. We have successfully completed 45+ major projects for leading companies including TotalEnergies E&P Nigeria Limited. Our experience spans civil, electrical, and mechanical works across various operational facilities."
    },
    {
      question: "Are you certified and licensed?",
      answer: "Yes, JVNL is ISO 9001:2015 certified and holds Department of Petroleum Resources (DPR) permits. We are fully licensed and compliant with all local and international standards for design, construction, and operation. Our team includes COREN registered engineers."
    },
    {
      question: "What locations do you serve?",
      answer: "JVNL provides engineering and construction services across Nigeria, with significant experience in Rivers State, Bayelsa State, and Delta State. We have completed projects in locations including Port Harcourt, Obite, Yenagoa, and Onicha Ugbo."
    },
    {
      question: "How do I request a consultation or quote?",
      answer: "You can request a consultation by filling out our contact form on this website, calling us at +234 803 898 4112, +234 810 268 1515, or +234 905 074 0015, or emailing us at jospakavnl@gmail.com. Our team will respond promptly to discuss your project requirements."
    },
    {
      question: "What is your safety record?",
      answer: "Safety is our top priority. JVNL maintains a 100% safety record and implements strict CASHES (Community Affairs, Safety, Health, Environment & Security) policies. Our watchword is 'DO IT SAFE, OTHERWISE DON'T'. We ensure all operations comply with local and international safety standards."
    },
    {
      question: "Do you handle projects of all sizes?",
      answer: "Yes, JVNL handles projects of all scales from small maintenance tasks to large infrastructure developments. Our multi-disciplinary teams have extensive experience with projects ranging from facility upgrades to complete construction projects for industrial facilities."
    },
    {
      question: "What makes JVNL different from other engineering companies?",
      answer: "JVNL stands out through our 20+ years of specialized experience in Nigeria's Oil & Gas sector, ISO 9001:2015 certified quality management, proven track record with major clients, comprehensive multi-disciplinary capabilities, and commitment to local content development as an indigenous engineering company."
    },
  ]

  // FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section id="faq" className="py-24 bg-gradient-to-br from-white via-neutral-50 to-orange-50/20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold mb-6 border border-orange-200/50">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900">
            Frequently Asked <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Find answers to common questions about our services, expertise, and how we can help with your project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-neutral-200 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-charcoal-900 hover:no-underline py-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 leading-relaxed pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            Contact us for more information
          </a>
        </div>
      </div>
      </section>
    </>
  )
}

