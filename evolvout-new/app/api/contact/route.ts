import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 * 
 * Handles contact form submissions and sends emails
 * In production, configure with your email service (SendGrid, Resend, etc.)
 */

// Email service configuration (update with your service)
// For this example, we'll log to console in development
// and integrate with an email service in production

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Option 1: Using Resend (recommended for Next.js)
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Option 2: Using SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Option 3: Using Gmail (via nodemailer - requires setup)
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({...});
    
    // For now, we'll use a fetch-based approach to EmailJS or similar service
    // Or just log in development
    
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Contact form submission:', data);
      return true;
    }

    // Example using Resend API (free tier available)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'noreply@evolvout.com',
          to: process.env.CONTACT_EMAIL || 'contacto@evolvout.com',
          reply_to: data.email,
          subject: `Nova mensagem de contato: ${data.subject}`,
          html: `
            <h2>Nova mensagem de contato</h2>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Assunto:</strong> ${data.subject}</p>
            <hr />
            <p><strong>Mensagem:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error('Resend API error:', await response.text());
        return false;
      }
      return true;
    }

    console.warn('No email service configured');
    return false;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;

    // Validate input
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email
    const success = await sendEmail(body);

    if (success) {
      return NextResponse.json(
        { 
          success: true,
          message: 'Email sent successfully. We will contact you soon!',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST method to submit contact form.' },
    { status: 200 }
  );
}
