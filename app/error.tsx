'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with error tracking services like Sentry here
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 flex items-center justify-center bg-neutral-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900">
            Something went wrong
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            We're sorry, but something unexpected happened. Please try again or contact us if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
            >
              Try again
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <a href="/">Go to homepage</a>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <a href="/#contact">Contact us</a>
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-semibold text-red-900 mb-2">Error details (development only):</p>
              <p className="text-sm text-red-700 font-mono">{error.message}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

