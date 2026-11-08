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
          const adminSubject = `New TaxNet Newsletter Subscriber: ${email}`;

          const adminTextContent = `
NEW TAXNET NEWSLETTER SUBSCRIPTION
==================================
Date / Time: ${formattedDate} (Melbourne Time)
Subscriber Email: ${email}
Source: TaxNet Home Page Newsletter Popup

Delivered via TaxNet Integration.
`.trim();

          const adminHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Newsletter Subscriber</title>
</head>
<body style="margin: 0; padding: 30px; background-color: #F4F6F4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #E1E8E2;">
    <tr>
      <td style="background-color: #0D3E26; padding: 28px; text-align: center;">
        <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-family: Georgia, serif; font-weight: normal;">TaxNet Business Consultants</h1>
        <p style="color: #C5A869; font-size: 13px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 0.12em;">New Newsletter Subscriber</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px 28px;">
        <p style="font-size: 15px; color: #2D3E34; line-height: 1.6; margin-top: 0;">A visitor has subscribed to the TaxNet quarterly newsletter:</p>
        <div style="background-color: #F8FAF8; padding: 18px; border-radius: 8px; border: 1px solid #E2EAE3; margin: 20px 0;">
          <div style="font-size: 12px; font-weight: bold; color: #0D3E26; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Subscriber Email</div>
          <div style="font-size: 18px; font-weight: bold; color: #0D3E26;">
            <a href="mailto:${email}" style="color: #0D3E26; text-decoration: none;">${email}</a>
          </div>
          <div style="font-size: 12px; color: #6A7B70; margin-top: 8px;">Date: ${formattedDate} (Melbourne Time)</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #071F14; padding: 16px 28px; text-align: center; font-size: 12px; color: rgba(255, 255, 255, 0.6);">
        TaxNet CPA Accountants &amp; Mortgage Broking · Suite 6, 861 Doncaster Road, Doncaster East VIC 3109
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

          await transporter.sendMail({
            from: `"TaxNet System" <${gmailUser}>`,
            to: receiverEmail,
            replyTo: email,
            subject: adminSubject,
            text: adminTextContent,
            html: adminHtmlContent,
            headers: {
              "X-Mailer": "TaxNet Executive Mailer v2.0",
              Importance: "Normal",
            },
          });
        }

        // ── 2. WELCOME CONFIRMATION EMAIL TO THE SUBSCRIBER ──
        const subscriberSubject = `Welcome to TaxNet Insights | Strategic Tax & Wealth Advisory`;

        const subscriberText = `
Welcome to TaxNet Business Consultants Insights
==============================================

Thank you for subscribing to TaxNet's quarterly market and tax intelligence.

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
  <title>Welcome to TaxNet Insights</title>
</head>
<body style="margin: 0; padding: 30px; background-color: #F4F6F4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 14px; overflow: hidden; border: 1px solid #E1E8E2; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
    <tr>
      <td style="background: linear-gradient(135deg, #071F14 0%, #0D3E26 100%); padding: 36px 32px; text-align: center;">
        <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-family: Georgia, serif; font-weight: normal; letter-spacing: -0.01em;">TaxNet Business Consultants</h1>
        <p style="color: #C5A869; font-size: 13px; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 0.14em; font-weight: bold;">Strategic Tax &amp; Lending Intelligence</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 36px 32px;">
        <h2 style="color: #0D3E26; font-size: 20px; margin-top: 0; font-family: Georgia, serif; font-weight: normal;">Welcome to TaxNet Insights</h2>
        <p style="font-size: 15px; color: #3D4E44; line-height: 1.7; margin-bottom: 20px;">
          Thank you for subscribing. You have joined Australian business owners and property investors who rely on TaxNet for clear, proactive, and commercially astute financial guidance.
        </p>

        <div style="background-color: #F8FAF8; border-left: 3px solid #C5A869; padding: 18px 20px; border-radius: 6px; margin: 24px 0;">
          <div style="font-weight: bold; color: #0D3E26; font-size: 14px; margin-bottom: 8px;">What You Will Receive:</div>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #4A5A50; line-height: 1.7;">
            <li><strong>CPA Tax Minimization:</strong> Legal structuring strategies for small businesses, trusts, and family enterprises.</li>
            <li><strong>ATO Regulatory Alerts:</strong> Timely guidance on lodgement deadlines, STP Phase 2, and legislative changes.</li>
            <li><strong>Mortgage &amp; Refinancing Intel:</strong> Commercial lending capacity benchmarks and interest rate analysis.</li>
          </ul>
        </div>

        <p style="font-size: 14px; color: #5C6E64; line-height: 1.6; margin-bottom: 28px;">
          Need tailored advisory sooner? Our Doncaster East practice partners are always available for a confidential discovery consultation.
        </p>

        <div style="text-align: center; margin: 28px 0;">
          <a href="https://taxnet.com.au/contact" style="background-color: #C5A869; color: #05110A; font-weight: bold; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; display: inline-block;">
            Book Discovery Consultation &rarr;
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #071F14; padding: 22px 32px; text-align: center; font-size: 12px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">
        <div style="color: #FFFFFF; font-weight: bold; margin-bottom: 4px;">TaxNet Business Consultants</div>
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
          from: `"TaxNet Business Consultants" <${gmailUser}>`,
          to: email,
          replyTo: receiverEmail,
          subject: subscriberSubject,
          text: subscriberText,
          html: subscriberHtml,
          headers: {
            "X-Mailer": "TaxNet Executive Mailer v2.0",
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
      message: "Thank you for subscribing to TaxNet insights.",
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
