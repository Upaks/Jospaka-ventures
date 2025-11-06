import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jospaka.com'),
  title: {
    default: "JVNL - Engineering Excellence | Construction & Technical Services",
    template: "%s | Jospaka Ventures Nigeria Limited",
  },
  description:
    "Jospaka Ventures Nigeria Limited - Premier multi-disciplinary engineering, construction, and technical services company. 20+ years of precision engineering for Oil & Gas industry. ISO 9001:2015 certified.",
  keywords: [
    "engineering Nigeria",
    "construction services",
    "oil and gas engineering",
    "civil engineering Nigeria",
    "electrical engineering",
    "mechanical engineering",
    "LPG supply",
    "bioremediation",
    "water treatment",
    "construction company",
    "technical consultancy",
    "instrumentation",
    "TotalEnergies contractor",
  ],
  authors: [{ name: "Jospaka Ventures Nigeria Limited" }],
  creator: "Jospaka Ventures Nigeria Limited",
  publisher: "Jospaka Ventures Nigeria Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Jospaka Ventures Nigeria Limited",
    title: "JVNL - Engineering Excellence | Construction & Technical Services",
    description:
      "Premier multi-disciplinary engineering, construction, and technical services company. 20+ years of precision engineering for Oil & Gas industry.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jospaka Ventures Nigeria Limited - Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JVNL - Engineering Excellence | Construction & Technical Services",
    description:
      "Premier multi-disciplinary engineering, construction, and technical services company. 20+ years of precision engineering for Oil & Gas industry.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Engineering & Construction",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jospaka Ventures Nigeria Limited",
    alternateName: "JVNL",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jospaka.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://jospaka.com"}/images/logos/logo.png`,
    description:
      "Premier multi-disciplinary engineering, construction, and technical services company. 20+ years of precision engineering for Oil & Gas industry.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    sameAs: [
      // Add your social media links here when available
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    knowsAbout: [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Construction",
      "Oil & Gas",
      "LPG Supply",
      "Bioremediation",
      "Water Treatment",
      "Instrumentation",
    ],
    foundingDate: "2000",
    certifications: "ISO 9001:2015",
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
