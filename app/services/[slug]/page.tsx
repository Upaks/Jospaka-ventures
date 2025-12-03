import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServices } from "@/lib/services-data"
import { ServiceDetailClient } from "./service-detail-client"

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params
  const service = getServiceBySlug(resolvedParams?.slug || "")

  if (!service) {
    return {
      title: "Service Not Found | JVNL",
    }
  }

  return {
    title: `${service.title} Services | JVNL`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params
  const slug = resolvedParams?.slug || ""
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient slug={slug} />
}

