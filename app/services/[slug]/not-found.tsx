import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServiceNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900">
            Service Not Found
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/#services">Back to Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

