"use client"

import Link from "next/link"
import { Building2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold">JVNL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Multi-disciplinary Engineering & Construction company serving the Nigerian Oil & Gas Industry with
              precision and excellence.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              ISO 9001:2015 Certified
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#safety" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Safety & Quality
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Key Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Civil Engineering</li>
              <li className="text-slate-400">Electrical Engineering</li>
              <li className="text-slate-400">Mechanical Engineering</li>
              <li className="text-slate-400">Instrumentation</li>
              <li className="text-slate-400">LPG Supply</li>
              <li className="text-slate-400">Bioremediation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <span className="text-slate-400 leading-relaxed">
                  No. 31 Rumuadaolu Market Road<br />
                  Port Harcourt, Rivers State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-orange-500" />
                <a href="tel:+2348038984112" className="text-slate-400 hover:text-orange-400 transition-colors">
                  +234 803 898 4112
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-orange-500" />
                <a href="mailto:jospakavnl@gmail.com" className="text-slate-400 hover:text-orange-400 transition-colors break-all">
                  jospakavnl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Jospaka Ventures Nigeria Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500">
              <span>ISO 9001:2015 Certified</span>
              <span className="hidden sm:inline">•</span>
              <span>DPR Licensed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
