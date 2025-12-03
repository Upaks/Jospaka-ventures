"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Building, Loader2, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured. Please add your EmailJS credentials.')
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company: data.company || 'Not provided',
          message: data.message,
          to_email: 'jospakavnl@gmail.com',
        },
        publicKey
      )

      // Success
      toast({
        title: "Request Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      })
      
      setIsDialogOpen(false)
      reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      toast({
        title: "Failed to Send Request",
        description: error instanceof Error ? error.message : "Please try again or contact us directly at jospakavnl@gmail.com. You can also call us directly.",
        variant: "destructive",
      })
    }
  }

  const offices = [
    {
      type: "Head Office",
      address: "No. 31 Rumuadaolu Market Road",
      city: "Port Harcourt, Rivers State",
      country: "Nigeria",
    },
    {
      type: "Branch Office",
      address: "No. 3 Adventist Close, Oro-Ekpo Road",
      city: "Rumuepirikom, Mile 4, Port Harcourt",
      country: "Rivers State, Nigeria",
    },
    {
      type: "Branch Office",
      address: "Ukpaka's Compound",
      city: "Obite Town, Onelga",
      country: "Rivers State, Nigeria",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your next project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Phone</h4>
                  <a href="tel:+2348038984112" className="block text-muted-foreground hover:text-orange-500 transition-colors mb-1">
                    +234 803 898 4112
                  </a>
                  <a href="tel:+2348102681515" className="block text-muted-foreground hover:text-orange-500 transition-colors mb-1">
                    +234 810 268 1515
                  </a>
                  <a href="tel:+2349050740015" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                    +234 905 074 0015
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Email</h4>
                  <a href="mailto:jospakavnl@gmail.com" className="text-muted-foreground hover:underline">
                    jospakavnl@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/2348038984112?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20engineering%20and%20construction%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-green-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Offices</h3>

            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">{office.type}</h4>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <p className="text-sm text-muted-foreground">{office.city}</p>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-slate-900 text-white border-0">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Partner with JVNL for your next engineering and construction project. We bring precision, expertise, and
              commitment to every job.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg px-8 shadow-lg shadow-orange-500/30"
              onClick={() => setIsDialogOpen(true)}
            >
              Request a Consultation
            </Button>
          </div>
        </Card>

        {/* Consultation Request Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[calc(100vw-1rem)] sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-charcoal-900">Request a Consultation</DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                Fill out the form below and we'll get back to you as soon as possible to discuss your project needs.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="w-full"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+234 800 000 0000"
                    className="w-full"
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Project Details / Message *
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us about your project requirements..."
                  className="w-full min-h-[120px]"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="w-full sm:flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
