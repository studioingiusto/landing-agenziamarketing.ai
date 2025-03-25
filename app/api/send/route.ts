import { Resend } from 'resend';
import { NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = '3bd3376b-39e3-4923-9fa2-8b39e31d1299';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add contact to audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // Send welcome email to the user
    const welcomeEmail = await resend.emails.send({
      from: 'Agenzia Marketing AI <info@agenziamarketing.ai>',
      to: email,
      subject: 'Aiutaci a costruire agenziamarketing.ai su misura per te',
      html: `
        <!DOCTYPE html>
        <html lang="it">
          <body style="font-family: sans-serif; color: #111; background-color: #ffffff;">
            <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color:#000000;">🎤 Aiutaci a costruire agenziamarketing.ai su misura per te</h2>
              <p>Ciao,</p>
              <p>
                Grazie per esserti iscritto alla waiting list di <strong>agenziamarketing.ai</strong> 🚀
              </p>
              <p>
                Stiamo costruendo una piattaforma che automatizza l'analisi SEO, la ricerca keyword e la creazione di contenuti grazie all'intelligenza artificiale.
              </p>
              <p><strong>Ma vogliamo farlo insieme a te.</strong></p>
              <p>
                Rispondi a queste poche domande e aiutaci a creare qualcosa di davvero utile per te e il tuo business.
              </p>
              <ul>
                <li>✅ Accesso anticipato alla beta</li>
                <li>✅ Bonus esclusivo al lancio</li>
                <li>✅ Prodotto costruito sulle tue esigenze reali</li>
              </ul>
              <p style="margin-top:24px;">
                👉 <a href="https://form.typeform.com/to/vmKUYmqr" target="_blank" style="background:#9c55ff; color:#ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px;">COMPILA IL FORM</a>
              </p>
              <p>Grazie ancora 🙌<br>Il team di agenziamarketing.ai</p>
            </div>
          </body>
        </html>
      `,
    });

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'Agenzia Marketing AI <info@agenziamarketing.ai>',
      to: 'info@agenziamarketing.ai', // Replace with your email
      subject: 'Nuovo iscritto alla waitlist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #9c55ff; font-size: 24px; margin-bottom: 20px;">
            Nuovo iscritto alla waitlist
          </h1>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Un nuovo utente si è iscritto alla waitlist di agenziamarketing.ai
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Email: ${email}
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Data: ${new Date().toLocaleString('it-IT')}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ welcomeEmail, adminEmail });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email or add to contacts' },
      { status: 500 }
    );
  }
} 