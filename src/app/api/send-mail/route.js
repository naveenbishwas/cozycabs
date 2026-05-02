import nodemailer from "nodemailer";
import { adminDb } from "@/app/lib/firebaseAdmin";

// ✅ Helper function (IMPORTANT)
const row = (label, value) => (value ? `<p><b>${label}:</b> ${value}</p>` : "");

export async function POST(req) {
  try {
    // ✅ Get data from frontend
    const body = await req.json();

    // 🔐 Safety check
    if (!body.email || !body.name) {
      return Response.json({
        success: false,
        error: "Missing required fields",
      });
    }

    // 📧 Email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 🚗 Cab details section
    const cabSection = body.route
      ? `
        <h3>🚗 Cab Details</h3>
        ${row("Route", body.route)}
        ${row(
          "Cab",
          body.cabName && body.type
            ? `${body.cabName} (${body.type})`
            : body.cabName,
        )}
        ${row(
          "Price",
          body.price ? `₹${Number(body.price).toLocaleString("en-IN")}` : null,
        )}
        <hr/>
      `
      : "";

    const phone = body.phone
      ? `${body.phoneCode || "+91"} ${body.phone}`
      : null;

    // ===========================
    // ✅ 1. ADMIN EMAIL
    // ===========================
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

    // ===========================
    // ✅ 2. USER EMAIL
    // ===========================
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

    // ===========================
    // 🔥 3. SAVE TO FIRESTORE
    // ===========================
    const safe = (val) =>
      val !== undefined && val !== null && val !== "" ? val : null;

    await adminDb.collection("bookings").add({
      userId: safe(body.userId),

      // user
      name: body.name,
      email: body.email,
      phone: safe(body.phone),

      // route
      pickup: safe(body.pickup),
      drop: safe(body.drop),
      route: safe(body.route),

      // coords
      pickupCoords: {
        lat: safe(body.pickupLat),
        lng: safe(body.pickupLng),
      },
      dropCoords: {
        lat: safe(body.dropLat),
        lng: safe(body.dropLng),
      },

      // map data — routeData null ho toh null save hoga, crash nahi
      distanceKm: safe(body.distanceKm),
      durationMin: safe(body.durationMin),
      routeGeoJSON: safe(body.routeGeoJSON)
        ? JSON.stringify(body.routeGeoJSON)
        : null,

      // cab
      carType: safe(body.cabName),
      price: safe(body.price),

      // booking
      date: safe(body.date),
      travellers: safe(body.travellers),
      message: safe(body.message),
      status: "pending",

      createdAt: new Date(),
    });

    // ===========================
    return Response.json({ success: true });
  } catch (error) {
    console.log("ERROR:", error);
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
