"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "2348038984112" // Primary contact number without + and spaces
  const defaultMessage = "Hello, I would like to inquire about your engineering and construction services"

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/70 animate-bounce hover:animate-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  )
}

