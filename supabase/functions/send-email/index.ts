import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, message } = await req.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      throw new Error('Missing required fields')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format')
    }

    const client = new SmtpClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: Deno.env.get('SMTP_USERNAME') || '',
          password: Deno.env.get('SMTP_PASSWORD') || '',
        },
      },
    });

    // Send email to admin
    await client.send({
      from: Deno.env.get('SMTP_USERNAME') || '',
      to: "achraf.farhat@aiflow-agency.com",
      subject: "New Contact Form Submission",
      content: `
        New contact form submission:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    });

    // Send confirmation email to user
    await client.send({
      from: Deno.env.get('SMTP_USERNAME') || '',
      to: email,
      subject: "Thank you for contacting Flow AI",
      content: `
        Dear ${firstName},

        Thank you for contacting Flow AI. We have received your message and will get back to you shortly.

        Best regards,
        Flow AI Team
      `,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Email sending failed:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to send email',
        details: error.toString()
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})