import nodemailer from "nodemailer";
import { adminDb } from "@/app/lib/firebaseAdmin";

const row = (label, value) => (value ? `<p><b>${label}:</b> ${value}</p>` : "");
const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

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

    // ══════════════════════════════════════════
    // OTP SEND FLOW
    // ══════════════════════════════════════════
    if (body.type === "otp") {
      if (!body.email) {
        return Response.json({ success: false, error: "Email required" });
      }

      const otp = generateOTP();

      await adminDb
        .collection("otp_verification")
        .doc(body.email)
        .set({
          otp: String(otp),
          createdAt: new Date(),
        });

      await transporter.sendMail({
        from: `"CozyCabz" <${process.env.MAIL_USER}>`,
        to: body.email,
        subject: "Your OTP Code 🔐 — CozyCabz",
        html: `
          <!DOCTYPE html>
          <html>
          <body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
              <tr><td align="center">
                <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:#d80117;padding:28px 36px 24px;text-align:center;">
                      <p style="margin:0;color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">CozyCabz</p>
                      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Outstation Cab Booking</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 36px 24px;">
                      <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#1a1a2e;">Hi there 👋</p>
                      <p style="margin:0 0 28px;font-size:14px;color:#666;line-height:1.6;">
                        Use the OTP below to verify your email and complete your CozyCabz account registration.
                      </p>

                      <!-- OTP Box -->
                      <div style="background:#fff0f1;border:1.5px dashed #ffc4c8;border-radius:12px;padding:24px;text-align:center;margin-bottom:28px;">
                        <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#999;letter-spacing:1px;text-transform:uppercase;">Your OTP Code</p>
                        <p style="margin:0;font-size:42px;font-weight:900;color:#d80117;letter-spacing:10px;font-family:monospace;">${otp}</p>
                        <p style="margin:10px 0 0;font-size:12px;color:#aaa;">Valid for 10 minutes</p>
                      </div>

                      <p style="margin:0;font-size:13px;color:#aaa;line-height:1.6;">
                        If you didn't request this, you can safely ignore this email. Do not share this OTP with anyone.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:16px 36px 28px;border-top:1px solid #f0f0f0;">
                      <p style="margin:0;font-size:12px;color:#bbb;text-align:center;">
                        © ${new Date().getFullYear()} CozyCabz · Safe & Verified Outstation Cabs
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
          </html>
        `,
      });

      return Response.json({ success: true });
    }

    // ══════════════════════════════════════════
    // OTP VERIFY FLOW
    // ══════════════════════════════════════════
    if (body.type === "verify-otp") {
      if (!body.email || !body.otp) {
        return Response.json({
          success: false,
          error: "Email and OTP required",
        });
      }

      const snap = await adminDb
        .collection("otp_verification")
        .doc(body.email)
        .get();

      if (!snap.exists) {
        return Response.json({
          success: false,
          error: "OTP expired or not found. Please request a new one.",
        });
      }

      const data = snap.data();

      // Check expiry — 10 minutes
      const createdAt = data.createdAt?.toDate
        ? data.createdAt.toDate()
        : new Date(data.createdAt);
      const diffMs = Date.now() - createdAt.getTime();

      if (diffMs > 10 * 60 * 1000) {
        await adminDb.collection("otp_verification").doc(body.email).delete();
        return Response.json({
          success: false,
          error: "OTP expired. Please request a new one.",
        });
      }

      if (String(data.otp) !== String(body.otp)) {
        return Response.json({
          success: false,
          error: "Incorrect OTP. Please try again.",
        });
      }

      // OTP matched — delete it so it can't be reused
      await adminDb.collection("otp_verification").doc(body.email).delete();
      return Response.json({ success: true });
    }

    // ══════════════════════════════════════════
    // BOOKING FLOW (UNCHANGED)
    // ══════════════════════════════════════════
    if (!body.email || !body.name) {
      return Response.json({
        success: false,
        error: "Missing required fields",
      });
    }

    const cabSection = body.route
      ? `
        <h3>🚗 Cab Details</h3>
        ${row("Route", body.route)}
        ${row("Cab", body.cabName && body.type ? `${body.cabName} (${body.type})` : body.cabName)}
        ${row("Price", body.price ? `₹${Number(body.price).toLocaleString("en-IN")}` : null)}
        <hr/>
      `
      : "";

    const phone = body.phone
      ? `${body.phoneCode || "+91"} ${body.phone}`
      : null;

    // Admin email
    await transporter.sendMail({
      from: `"CozyCabz" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: body.route
        ? `New Booking: ${body.route} — ${body.cabName}`
        : "New CozyCabz Enquiry",
      html: `
        <h2>New Booking</h2>
        ${cabSection}
        <h3>👤 Customer Details</h3>
        ${row("Name", body.name)}
        ${row("Email", body.email)}
        ${row("Phone", phone)}
        ${row("Date", body.date)}
        ${row("Travellers", body.travellers)}
        ${row("Message", body.message)}
      `,
    });

    // User confirmation email
    await transporter.sendMail({
      from: `"CozyCabz" <${process.env.MAIL_USER}>`,
      to: body.email,
      subject: "Booking Confirmed 🚗 CozyCabz",
      html: `
        <h2>Hello ${body.name},</h2>
        <p>Your booking request has been received successfully.</p>
        ${cabSection}
        <h3>📋 Your Details</h3>
        ${row("Name", body.name)}
        ${row("Email", body.email)}
        ${row("Phone", phone)}
        ${row("Date", body.date)}
        <br/>
        <p>Our team will contact you shortly.</p>
        <p><b>— Team CozyCabz</b></p>
      `,
    });

    // Save to Firestore
    const safe = (val) =>
      val !== undefined && val !== null && val !== "" ? val : null;

    await adminDb.collection("bookings").add({
      userId: safe(body.userId),
      name: body.name,
      email: body.email,
      phone: safe(body.phone),
      pickup: safe(body.pickup),
      drop: safe(body.drop),
      route: safe(body.route),
      pickupCoords: { lat: safe(body.pickupLat), lng: safe(body.pickupLng) },
      dropCoords: { lat: safe(body.dropLat), lng: safe(body.dropLng) },
      distanceKm: safe(body.distanceKm),
      durationMin: safe(body.durationMin),
      routeGeoJSON: safe(body.routeGeoJSON)
        ? JSON.stringify(body.routeGeoJSON)
        : null,
      carType: safe(body.cabName),
      price: safe(body.price),
      date: safe(body.date),
      travellers: safe(body.travellers),
      message: safe(body.message),
      status: "pending",
      createdAt: new Date(),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}
