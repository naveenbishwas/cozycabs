import nodemailer from "nodemailer";

// Helper — ony for defined values
const row = (label, value) => (value ? `<p><b>${label}:</b> ${value}</p>` : "");

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // This only for slug route
    const cabSection = body.route
      ? `
        <h3>🚗 Cab Details</h3>
        ${row("Route", body.route)}
        ${row("Cab", body.cabName && body.type ? `${body.cabName} (${body.type})` : body.cabName)}
        ${row("Price", body.price ? `₹${Number(body.price).toLocaleString("en-IN")}` : null)}
        <hr/>
      `
      : "";

    // Phone number
    const phone = body.phone
      ? `${body.phoneCode || "+91"} ${body.phone}`
      : null;

    // 1️⃣ Client confirmation email
    await transporter.sendMail({
      from: `"CozyCabz" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: body.route
        ? `New Booking: ${body.route} — ${body.cabName}`
        : "New CozyCabz Enquiry",
      html: `
        <h2>New Enquiry</h2>
        ${cabSection}
        <h3>👤 Customer Details</h3>
        ${row("Name", body.name)}
        ${row("Email", body.email)}
        ${row("Phone", phone)}
        ${row("Date", body.date)}
        ${row("Travellers", body.travellers)}
        ${row("City", body.city)}
        ${row("Service Type", body.serviceType)}
        ${row("Vehicle Type", body.vehicleType)}
        ${row("Message", body.message)}
      `,
    });

    // 2️⃣ User confirmation email
    await transporter.sendMail({
      from: `"CozyCabz" <${process.env.MAIL_USER}>`,
      to: body.email,
      subject: "Thank You! Your CozyCabz Enquiry Was Received",
      html: `
        <h2>Hello ${body.name},</h2>
        <p>Thank you for choosing CozyCabz!</p>
        <p>We have received your enquiry and will contact you shortly.</p>

        ${cabSection}

        <h3>📋 Your Submitted Details</h3>
        ${row("Name", body.name)}
        ${row("Email", body.email)}
        ${row("Phone", phone)}
        ${row("Date", body.date)}
        ${row("Travellers", body.travellers)}
        ${row("City", body.city)}
        ${row("Service Type", body.serviceType)}
        ${row("Vehicle Type", body.vehicleType)}
        ${row("Message", body.message)}

        <br/>
        <p>We appreciate your interest. Our team will reach out as soon as possible.</p>
        <p><b>— Team CozyCabz</b></p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("SMTP ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}
