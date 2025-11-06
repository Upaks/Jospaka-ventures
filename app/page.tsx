import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Vision } from "@/components/vision"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Safety } from "@/components/safety"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Vision />
      <Projects />
      <Testimonials />
      <Safety />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
