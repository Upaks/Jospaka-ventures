"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Handle hash scrolling on page load/navigation
    const scrollToHash = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Wait for page to fully load
          setTimeout(() => {
            const headerHeight = 100 // Height of fixed header
            const targetPosition = targetElement.offsetTop - headerHeight

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    // Handle anchor clicks on the same page
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement

      // Only handle if on the same page (not a Next.js Link navigation)
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault()
        const targetId = anchor.hash.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          const headerHeight = 100 // Height of fixed header
          const targetPosition = targetElement.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Scroll to hash on mount
    scrollToHash()

    // Listen for hash changes (when navigating with Next.js Link)
    window.addEventListener("hashchange", scrollToHash)

    // Handle anchor clicks
    document.addEventListener("click", handleAnchorClick)
    
    return () => {
      window.removeEventListener("hashchange", scrollToHash)
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}

