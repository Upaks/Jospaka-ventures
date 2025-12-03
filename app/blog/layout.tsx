import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & News | JVNL - Engineering Insights & Industry Updates",
  description:
    "Stay informed with the latest insights, project updates, and industry news from Jospaka Ventures Nigeria Limited. Expert articles on engineering, construction, oil & gas, and technical services.",
  keywords: [
    "engineering blog Nigeria",
    "construction news",
    "oil and gas insights",
    "engineering articles",
    "construction industry updates",
    "technical services blog",
  ],
  openGraph: {
    title: "Blog & News | JVNL - Engineering Insights & Industry Updates",
    description:
      "Stay informed with the latest insights, project updates, and industry news from Jospaka Ventures Nigeria Limited.",
    type: "website",
    url: "/blog",
    siteName: "Jospaka Ventures Nigeria Limited",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JVNL Blog - Engineering Insights & Industry Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & News | JVNL - Engineering Insights & Industry Updates",
    description:
      "Stay informed with the latest insights, project updates, and industry news from Jospaka Ventures Nigeria Limited.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

