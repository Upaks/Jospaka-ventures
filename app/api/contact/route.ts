import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const apiKey = process.env.RESEND_API_KEY

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    // For testing: Use your verified email or verify a domain for production
    const recipientEmail = process.env.RESEND_TO_EMAIL || 'upaksabraham24@gmail.com'
    
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: [recipientEmail],
      replyTo: email,
      subject: `Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

