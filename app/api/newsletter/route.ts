import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS?.replace(/\s+/g, "");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    const formattedDate = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      dateStyle: "full",
      timeStyle: "short",
    });

    // If SMTP credentials exist, send notification and subscriber confirmation emails
    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        // ── 1. EMAIL TO PRACTICE RECEIVER (Admin Notification) ──
        if (receiverEmail) {
          const adminSubject = `New Taxnet Newsletter Subscriber: ${email}`;

          const adminTextContent = `
NEW TAXNET NEWSLETTER SUBSCRIPTION
==================================
Date / Time: ${formattedDate} (Melbourne Time)
Subscriber Email: ${email}
Source: Taxnet Home Page Newsletter Popup

Delivered via Taxnet Integration.
`.trim();

          const adminHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Newsletter Subscriber</title>
</head>
<body style="margin: 0; padding: 30px; background-color: #F7F8F7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; overflow: hidden; border: 1px solid #E4EAE5; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
    <tr>
      <td style="background: linear-gradient(135deg, #0A0D0B 0%, #171C19 100%); padding: 32px 28px; text-align: center; border-bottom: 2.5px solid #C5A869;">
        <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-weight: normal;">Taxnet Business Consultants</h1>
        <p style="color: #C5A869; font-size: 12px; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 800;">New Newsletter Subscriber</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px 28px;">
        <p style="font-size: 15px; color: #2D3E34; line-height: 1.6; margin-top: 0;">A visitor has subscribed to the Taxnet quarterly intelligence digest:</p>
        <div style="background-color: #FAFCFA; padding: 20px; border-radius: 8px; border: 1px solid #E4EAE5; border-left: 3.5px solid #C5A869; margin: 20px 0;">
          <div style="font-size: 11px; font-weight: 800; color: #A18650; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">Subscriber Email</div>
          <div style="font-size: 18px; font-weight: 700; color: #0A0D0B;">
            <a href="mailto:${email}" style="color: #0A0D0B; text-decoration: none;">${email}</a>
          </div>
          <div style="font-size: 12px; color: #6B7C72; margin-top: 8px;">Received: ${formattedDate} (Melbourne Time)</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #0A0D0B; padding: 20px 28px; text-align: center; font-size: 11px; color: rgba(255, 255, 255, 0.7); line-height: 1.5; border-top: 1px solid rgba(197, 168, 105, 0.2);">
        <div style="color: #FFFFFF; font-weight: 700; margin-bottom: 3px;">Taxnet CPA Accountants &amp; Mortgage Broking</div>
        <div>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109 · (03) 9802 5800</div>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

          await transporter.sendMail({
            from: `"Taxnet System" <${gmailUser}>`,
            to: receiverEmail,
            replyTo: email,
            subject: adminSubject,
            text: adminTextContent,
            html: adminHtmlContent,
            headers: {
              "X-Mailer": "Taxnet Executive Mailer v2.0",
              Importance: "Normal",
            },
          });
        }

        // ── 2. WELCOME CONFIRMATION EMAIL TO THE SUBSCRIBER ──
        const subscriberSubject = `Welcome to Taxnet Insights | Strategic Tax & Wealth Advisory`;

        const subscriberText = `
Welcome to Taxnet Business Consultants Insights
==============================================

Thank you for subscribing to Taxnet's quarterly market and tax intelligence.

As an ambitious Australian business owner or property investor, you will receive:
1. Senior CPA tax structuring and minimization insights.
2. ATO compliance alerts and key lodgement dates.
3. Commercial borrowing benchmarks and lending rate reviews.

Practice Address:
Suite 6, 861 Doncaster Road, Doncaster East VIC 3109
Telephone: (03) 9802 5800
Website: https://taxnet.com.au

If you ever wish to unsubscribe, simply reply to this email with "Unsubscribe".
`.trim();

        const subscriberHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Taxnet Insights</title>
</head>
<body style="margin: 0; padding: 30px; background-color: #F7F8F7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; overflow: hidden; border: 1px solid #E4EAE5; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
    <tr>
      <td style="background: linear-gradient(135deg, #0A0D0B 0%, #171C19 100%); padding: 36px 32px; text-align: center; border-bottom: 2.5px solid #C5A869;">
        <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-weight: normal; letter-spacing: -0.01em;">Taxnet Business Consultants</h1>
        <p style="color: #C5A869; font-size: 12px; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 0.16em; font-weight: 800;">Strategic Tax &amp; Lending Intelligence</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <h2 style="color: #0A0D0B; font-size: 20px; margin-top: 0; font-family: Georgia, 'Times New Roman', serif; font-weight: normal;">Welcome to Taxnet Insights</h2>
        <p style="font-size: 15px; color: #3D4E44; line-height: 1.7; margin-bottom: 20px;">
          Thank you for subscribing. You have joined Australian business owners and property investors who rely on Taxnet for clear, proactive, and commercially astute financial guidance.
        </p>

        <div style="background-color: #FAFCFA; border-left: 3.5px solid #C5A869; padding: 20px 22px; border-radius: 8px; border: 1px solid #E4EAE5; margin: 24px 0;">
          <div style="font-weight: 800; color: #0A0D0B; font-size: 14px; margin-bottom: 10px;">What You Will Receive:</div>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #3A4A41; line-height: 1.75;">
            <li><strong style="color: #0A0D0B;">CPA Tax Minimization:</strong> Legal structuring strategies for small businesses, trusts, and family enterprises.</li>
            <li><strong style="color: #0A0D0B;">ATO Regulatory Alerts:</strong> Timely guidance on lodgement deadlines, STP Phase 2, and legislative changes.</li>
            <li><strong style="color: #0A0D0B;">Mortgage &amp; Refinancing Intel:</strong> Commercial lending capacity benchmarks and interest rate analysis.</li>
          </ul>
        </div>

        <p style="font-size: 14px; color: #5C6E64; line-height: 1.6; margin-bottom: 28px;">
          Need tailored advisory sooner? Our Doncaster East practice partners are always available for a confidential discovery consultation.
        </p>

        <div style="text-align: center; margin: 28px 0;">
          <a href="https://taxnet.com.au/contact" style="background-color: #C5A869; color: #0A0D0B; font-weight: 800; font-size: 14px; padding: 13px 32px; border-radius: 8px; text-decoration: none; display: inline-block; box-shadow: 0 4px 14px rgba(197, 168, 105, 0.35);">
            Book Discovery Consultation &rarr;
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #0A0D0B; padding: 24px 32px; text-align: center; font-size: 12px; color: rgba(255, 255, 255, 0.7); line-height: 1.6; border-top: 1px solid rgba(197, 168, 105, 0.2);">
        <div style="color: #FFFFFF; font-weight: 700; margin-bottom: 4px;">Taxnet Business Consultants</div>
        <div>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109 · (03) 9802 5800</div>
        <div style="margin-top: 8px; font-size: 11px; color: rgba(255, 255, 255, 0.45);">
          To unsubscribe at any time, simply reply to this email with &ldquo;Unsubscribe&rdquo;.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

        await transporter.sendMail({
          from: `"Taxnet Business Consultants" <${gmailUser}>`,
          to: email,
          replyTo: receiverEmail,
          subject: subscriberSubject,
          text: subscriberText,
          html: subscriberHtml,
          headers: {
            "X-Mailer": "Taxnet Executive Mailer v2.0",
            Importance: "Normal",
          },
        });
      } catch (mailErr) {
        console.error("Nodemailer newsletter warning:", mailErr);
      }
    } else {
      console.log(`[Newsletter Subscription] ${email} at ${formattedDate}`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to Taxnet insights.",
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
