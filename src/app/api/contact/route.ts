import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-pool";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions: MailOptions = {
      from: `"Strateger Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message - Strateger.ai</title>
  <style>
    body {
      background-color: #f5f7fb;
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: #333;
    }

    .container {
      max-width: 650px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      overflow: hidden;
    }

    .header {
      background-color: #193278;
      color: #ffffff;
      text-align: center;
      padding: 40px 20px 30px;
    }

    .header img {
      width: 140px;
      margin-bottom: 10px;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
      letter-spacing: 0.5px;
      color:white;
      font:bold;
    }

    .content {
      padding: 30px 40px;
      line-height: 1.6;
    }

    .content h2 {
      color: #193278;
      font-size: 20px;
      margin-bottom: 20px;
      border-bottom: 2px solid #193278;
      display: inline-block;
      padding-bottom: 4px;
    }

    .content p {
      margin: 10px 0;
    }

    .content strong {
      color: #193278;
    }

    .footer {
      text-align: center;
      background: #f0f3fa;
      color: #555;
      font-size: 13px;
      padding: 20px;
    }

    .footer a {
      color: #193278;
      text-decoration: none;
      font-weight: 600;
    }

    .divider {
      height: 1px;
      background: #e5e8f0;
      margin: 25px 0;
    }

    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <img src="https://strateger.ai/strateger_logo.png" alt="Strateger.ai Logo" />
      <h1>New Contact Submission</h1>
    </div>https://strateger.ai/

    <div class="content">
      <h2>Contact Details</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <div class="divider"></div>

      <h2>Message</h2>
      <p>${message}</p>

      <div class="divider"></div>

      <p><em>This message was sent from the contact form on <a href="https://strateger.ai">Strateger.ai</a>.</em></p>
    </div>

    <div class="footer">
      <p>© ${new Date().getFullYear()} <a href="https://strateger.ai">Strateger.ai</a> </p>
    </div>
  </div>
</body>
</html>

      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
