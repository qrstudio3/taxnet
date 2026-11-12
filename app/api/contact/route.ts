import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      businessName,
      selectedService,
      clientType,
      meetingFormat,
      source,
      message,
    } = data;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // SMTP Credentials Check
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS?.replace(/\s+/g, "");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    if (!gmailUser || !gmailPass) {
      console.error(
        "SMTP Error: GMAIL_USER or GMAIL_PASS is not set in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please add GMAIL_USER and GMAIL_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    // Create Nodemailer Transporter with Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const formattedDate = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Clean parameters for mailto response (preserve raw '@' for the recipient so email clients populate 'To' field)
    const cleanClientName = (name || "Client").trim();
    const cleanEmail = (email || "").trim();
    const cleanService = (selectedService || "Accounting & Advisory").trim();
    const mailtoSubject = encodeURIComponent(`Taxnet Consultation for ${cleanClientName}`);
    const mailtoBody = encodeURIComponent(
      `Hi ${cleanClientName},\n\nThank you for reaching out to Taxnet regarding ${cleanService}. We have received your enquiry and would be delighted to assist you.\n\nPlease let us know what day and time suits you best for a brief call, or feel free to reply directly to this email with any documents or details.\n\nWarm regards,\nPhilip Youssef\nPrincipal | Taxnet Business Consultants\nPhone: (03) 9802 5800\nWhatsApp: 0420 956 761\nSuite 6, 861 Doncaster Road, Doncaster East VIC 3109\nwww.taxnet.com.au`
    );
    const replyMailtoUrl = `mailto:${cleanEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Clean Plain Text Fallback
    const textContent = `
NEW TAXNET CLIENT CONSULTATION INQUIRY
=======================================
Date / Time: ${formattedDate} (Melbourne Time)

CLIENT CONTACT DETAILS
----------------------
Full Name:         ${name}
Email Address:     ${email}
Phone Number:      ${phone}
Entity / Business: ${businessName || "Not specified"}

ENGAGEMENT PREFERENCES
----------------------
Requested Service: ${selectedService || "General Advisory"}
${source ? `Source Page:       ${source}\n` : ""}${clientType ? `Client Profile:    ${clientType}\n` : ""}${meetingFormat ? `Meeting Format:    ${meetingFormat}\n` : ""}
CLIENT MESSAGE / REQUIREMENTS:
------------------------------
${message || "No additional notes provided."}

=======================================
Delivered securely via Taxnet Gmail SMTP Integration.
`.trim();

    // High-End Luxury HTML Email Template (Onyx Black & Warm Gold)
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Taxnet Client Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F7F8F7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0A0D0B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F7F8F7; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 36px rgba(0,0,0,0.08); border: 1px solid #E4EAE5;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A0D0B 0%, #171C19 100%); padding: 36px 32px; text-align: left; border-bottom: 2.5px solid #C5A869;">
              <div style="color: #C5A869; font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;">
                CPA Australia Practice · Consultation Desk
              </div>
              <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 600; margin: 0; line-height: 1.25; font-family: Georgia, 'Times New Roman', serif;">
                New Advisory Consultation Request
              </h1>
              <p style="color: rgba(229, 214, 182, 0.85); font-size: 13px; margin: 8px 0 0 0;">
                Received on ${formattedDate}
              </p>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td style="padding: 32px;">

              <!-- Primary Client Card -->
              <table role="presentation" width="100%" style="background-color: #FAFCFA; border: 1px solid #E4EAE5; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 22px;">
                    <div style="font-size: 11px; font-weight: 800; color: #A18650; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">
                      Client Contact Particulars
                    </div>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="6">
                      <tr>
                        <td width="35%" style="color: #6B7C72; font-size: 13px; font-weight: 600;">Full Name:</td>
                        <td style="color: #0A0D0B; font-size: 15px; font-weight: 700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="color: #6B7C72; font-size: 13px; font-weight: 600;">Email Address:</td>
                        <td style="font-size: 14px;">
                          <a href="${replyMailtoUrl}" style="color: #0A0D0B; text-decoration: underline; font-weight: 600;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #6B7C72; font-size: 13px; font-weight: 600;">Phone Number:</td>
                        <td style="font-size: 14px;">
                          <a href="tel:${phone.replace(/\s+/g, "")}" style="color: #0A0D0B; text-decoration: none; font-weight: 700;">${phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #6B7C72; font-size: 13px; font-weight: 600;">Business / Entity:</td>
                        <td style="color: #0A0D0B; font-size: 14px; font-weight: 600;">${businessName || "Not specified"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Engagement Criteria -->
              <div style="font-size: 11px; font-weight: 800; color: #A18650; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 12px;">
                Engagement Scope &amp; Preferences
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr style="border-bottom: 1px solid #EDF2EE;">
                  <td width="35%" style="color: #6B7C72; font-size: 13px;">Selected Service:</td>
                  <td style="color: #0A0D0B; font-size: 14px; font-weight: 700;">
                    <span style="display: inline-block; background-color: #F8F5EE; color: #8A7040; border: 1px solid rgba(197, 168, 105, 0.4); padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 700;">
                      ${selectedService || "General Advisory"}
                    </span>
                  </td>
                </tr>
                ${source ? `
                <tr style="border-bottom: 1px solid #EDF2EE;">
                  <td style="color: #6B7C72; font-size: 13px;">Source:</td>
                  <td style="color: #0A0D0B; font-size: 13px; font-weight: 600;">${source}</td>
                </tr>` : ""}
                ${clientType ? `
                <tr style="border-bottom: 1px solid #EDF2EE;">
                  <td style="color: #6B7C72; font-size: 13px;">Client Profile:</td>
                  <td style="color: #0A0D0B; font-size: 13px; font-weight: 600;">${clientType}</td>
                </tr>` : ""}
                ${meetingFormat ? `
                <tr style="border-bottom: 1px solid #EDF2EE;">
                  <td style="color: #6B7C72; font-size: 13px;">Preferred Format:</td>
                  <td style="color: #0A0D0B; font-size: 13px; font-weight: 600;">${meetingFormat}</td>
                </tr>` : ""}
              </table>

              <!-- Client Message Box -->
              <div style="font-size: 11px; font-weight: 800; color: #A18650; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px;">
                Client Notes / Scope Requirements
              </div>
              <div style="background-color: #FAFCFA; border: 1px solid #E4EAE5; border-left: 3.5px solid #C5A869; border-radius: 8px; padding: 18px; font-size: 14px; line-height: 1.65; color: #2C3530; margin-bottom: 28px;">
                ${(message || "I would like to schedule a discovery consultation with Taxnet.").replace(/\n/g, "<br>")}
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${replyMailtoUrl}" style="display: inline-block; background-color: #0A0D0B; color: #FFFFFF; border: 1.5px solid #C5A869; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.25);">
                      Reply Directly to Client (${email}) →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #0A0D0B; padding: 24px 32px; border-top: 1px solid rgba(197, 168, 105, 0.25); text-align: center; color: rgba(255, 255, 255, 0.75); font-size: 11px; line-height: 1.6;">
              <div style="color: #FFFFFF; font-weight: 700; margin-bottom: 4px; font-size: 12px;">Taxnet Business Consultants Pty Ltd · CPA Australia Practice</div>
              <div>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109</div>
              <div style="color: #C5A869; margin-top: 4px;">Phone: (03) 9802 5800 · Direct WhatsApp: 0420 956 761</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // Dispatch email via Gmail SMTP with anti-spam transactional headers
    await transporter.sendMail({
      from: `"Taxnet Notification" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `[Taxnet Web Inquiry] ${name} - ${selectedService || "Consultation Request"}`,
      text: textContent,
      html: htmlContent,
      headers: {
        "X-Mailer": "Taxnet Web Contact Form",
        "X-Priority": "3",
        "Importance": "Normal",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request sent successfully via Gmail SMTP.",
    });
  } catch (error: unknown) {
    console.error("Gmail SMTP Send Error:", error);

    const err = error as { message?: string; code?: string; responseCode?: number };
    let userFriendlyError = err?.message || "Failed to send email via SMTP.";
    if (err?.code === "EAUTH" || err?.responseCode === 535) {
      userFriendlyError =
        "Gmail authentication failed. Google requires a 16-character App Password (not your standard login password). Generate one at https://myaccount.google.com/apppasswords with 2-Step Verification enabled.";
    }

    return NextResponse.json(
      {
        error: userFriendlyError,
      },
      { status: 500 }
    );
  }
}
