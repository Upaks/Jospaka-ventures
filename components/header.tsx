"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { getAllServices } from "@/lib/services-data"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section for navigation highlighting (only on homepage)
      if (window.location.pathname === "/") {
        const sections = ["about", "services", "projects", "safety", "faq", "contact"]
        const scrollPosition = window.scrollY + 150

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      } else if (window.location.pathname.startsWith("/blog")) {
        setActiveSection("blog")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Safety", href: "#safety" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-charcoal-900 text-white px-3 py-2 rounded-lg font-heading font-bold text-xl">
                JVNL
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-charcoal-900 text-sm leading-tight">Jospaka Ventures</div>
              <div className="text-xs text-neutral-600">Engineering Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              // Special handling for Services dropdown
              if (item.label === "Services") {
                const services = getAllServices()
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current)
                      }
                      setIsServicesHovered(true)
                    }}
                    onMouseLeave={() => {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsServicesHovered(false)
                      }, 150)
                    }}
                  >
                    <div
                      className={`text-sm font-medium transition-colors relative cursor-pointer ${
                        activeSection === "services"
                          ? "text-orange-500"
                          : "text-neutral-700 hover:text-orange-500"
                      }`}
                    >
                      Services
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                          activeSection === "services" ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>

                    {/* Professional Dropdown */}
                    {isServicesHovered && (
                      <div 
                        className="absolute top-full left-0 w-[420px] z-50 pt-2"
                        onMouseEnter={() => {
                          if (hoverTimeoutRef.current) {
                            clearTimeout(hoverTimeoutRef.current)
                          }
                        }}
                        onMouseLeave={() => {
                          hoverTimeoutRef.current = setTimeout(() => {
                            setIsServicesHovered(false)
                          }, 150)
                        }}
                      >
                        <div className="bg-white border border-neutral-200/80 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm">
                          {/* Two Column Layout */}
                          <div className="grid grid-cols-2 divide-x divide-neutral-100">
                            {/* Left Column */}
                            <div className="py-3">
                              <div className="space-y-0.5">
                                {services.slice(0, Math.ceil(services.length / 2)).map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 font-medium"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Right Column */}
                            <div className="py-3">
                              <div className="space-y-0.5">
                                {services.slice(Math.ceil(services.length / 2)).map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-150 font-medium"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Footer Link */}
                          <div className="border-t border-neutral-100 bg-neutral-50/50">
                            <Link 
                              href="/#services" 
                              className="block px-4 py-3 text-xs font-semibold text-orange-600 hover:bg-orange-50 transition-colors text-center"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              
              const sectionId = item.href.replace("#", "").replace("/", "")
              const isActive = activeSection === sectionId
              const isAnchor = item.href.startsWith("#")
              
              // For anchor links, always navigate to homepage + hash
              const anchorHref = isAnchor ? `/${item.href}` : item.href
              
              return (
                <Link
                key={item.href}
                  href={anchorHref}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive
                      ? "text-orange-500"
                      : "text-neutral-700 hover:text-orange-500"
                  }`}
              >
                {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium px-6 shadow-lg shadow-orange-500/30"
            >
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal-900 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-neutral-200 animate-in slide-in-from-top-4 duration-300 bg-white">
            {navItems.map((item) => {
              // Special handling for Services in mobile menu
              if (item.label === "Services") {
                const services = getAllServices()
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                      className={`w-full flex items-center justify-between py-3 px-4 text-base font-medium transition-all rounded-lg ${
                        activeSection === "services"
                          ? "text-orange-500 bg-orange-50"
                          : "text-neutral-700 hover:text-orange-500 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isServicesExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isServicesExpanded && (
                      <div className="pl-4 pb-2 space-y-1 bg-neutral-50">
                        <Link
                          href="/#services"
                          className="block py-2 px-4 text-sm text-neutral-600 hover:text-orange-600 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                        {services.map((service) => {
                          const Icon = service.icon
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 py-2 px-4 text-sm text-neutral-700 hover:text-orange-600 hover:bg-white rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon className="w-4 h-4 text-orange-500" />
                              <span>{service.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }
              
              const sectionId = item.href.replace("#", "").replace("/", "")
              const isActive = activeSection === sectionId
              const isAnchor = item.href.startsWith("#")
              
              // For anchor links, always navigate to homepage + hash
              const anchorHref = isAnchor ? `/${item.href}` : item.href
              
              return (
                <Link
                key={item.href}
                  href={anchorHref}
                  className={`block py-3 px-4 text-base font-medium transition-all rounded-lg ${
                    isActive
                      ? "text-orange-500 bg-orange-50"
                      : "text-neutral-700 hover:text-orange-500 hover:bg-neutral-50"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                </Link>
              )
            })}
            <Button
              asChild
              className="w-full mt-4 mx-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            >
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
