"use client"

import { ReactNode, useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
  delay?: number // Delay in milliseconds
  threshold?: number // How much of element must be visible (0-1)
  rootMargin?: string // Trigger earlier/later (e.g., "-100px")
  triggerOnce?: boolean // Animate only once
}

const animationClasses = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 translate-x-8",
  "slide-right": "opacity-0 -translate-x-8",
  "scale": "opacity-0 scale-95",
}

const visibleClasses = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-in": "opacity-100",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
  "scale": "opacity-100 scale-100",
}

export function ScrollAnimate({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          } else {
            setIsVisible(true)
          }
          
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold, rootMargin, triggerOnce])

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  )
}

