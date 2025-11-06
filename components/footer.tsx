import { Building2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">JVNL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Multi-disciplinary Engineering & Construction company serving the Nigerian Oil & Gas Industry with
              precision and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#safety" className="text-slate-400 hover:text-white transition-colors">
                  Safety & Quality
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Civil Engineering</li>
              <li className="text-slate-400">Electrical Engineering</li>
              <li className="text-slate-400">Mechanical Engineering</li>
              <li className="text-slate-400">Instrumentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>No. 3 Adventist Close, Oro-Ekpo Road, Port Harcourt</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+234 803 898 4112</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:jospakavnl@gmail.com" className="hover:text-white transition-colors">
                  jospakavnl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Jospaka Ventures Nigeria Limited. All rights reserved.</p>
            <p>ISO 9001:2015 Certified | DPR Licensed</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
