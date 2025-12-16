import { Metadata } from "next"
import { GalleryClient } from "./gallery-client"

export const metadata: Metadata = {
  title: "Gallery | JVNL",
  description: "Explore our project portfolio, team photos, facilities, equipment, and awards showcasing our engineering excellence.",
  openGraph: {
    title: "Gallery | Jospaka Ventures Nigeria Limited",
    description: "Explore our project portfolio, team photos, facilities, equipment, and awards showcasing our engineering excellence.",
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}

