"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ShareButtonProps {
  title: string
  excerpt: string
  url: string
}

export function ShareButton({ title, excerpt, url }: ShareButtonProps) {
  const { toast } = useToast()

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: excerpt,
      url: url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Article link has been copied to your clipboard.",
        })
      }
    } catch (error) {
      // User cancelled share or error occurred
      if ((error as Error).name !== "AbortError") {
        // Try clipboard fallback
        try {
          await navigator.clipboard.writeText(url)
          toast({
            title: "Link copied!",
            description: "Article link has been copied to your clipboard.",
          })
        } catch (clipboardError) {
          toast({
            title: "Failed to share",
            description: "Please try again or copy the link manually.",
            variant: "destructive",
          })
        }
      }
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  )
}

