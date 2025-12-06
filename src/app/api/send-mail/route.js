// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: Number(process.env.MAIL_PORT),
//       secure: true,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     // 1️⃣ Send email to CLIENT
//     await transporter.sendMail({
//       from: `"CozyCabz" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_TO,
//       subject: "New CozyCabz Enquiry",
//       html: `
//         <h2>New Enquiry</h2>
//         <p><b>Name:</b> ${body.name}</p>
//         <p><b>Email:</b> ${body.email}</p>
//         <p><b>Phone:</b> ${body.phoneCode} ${body.phone}</p>
//         <p><b>Date:</b> ${body.date}</p>
//         <p><b>Travellers:</b> ${body.travellers}</p>
//         <p><b>City:</b> ${body.city}</p>
//         <p><b>Service Type:</b> ${body.serviceType}</p>
//         <p><b>Vehicle Type:</b> ${body.vehicleType}</p>
//         <p><b>Message:</b> ${body.message}</p>
//       `,
//     });

//     // 2️⃣ Send confirmation email to USER
//     await transporter.sendMail({
//       from: `"CozyCabz" <${process.env.MAIL_USER}>`,
//       to: body.email,
//       subject: "Thank You! Your CozyCazs Enquiry Was Received",
//       html: `
//         <h2>Hello ${body.name},</h2>
//         <p>Thank you for choosing CozyCabz!</p>
//         <p>We have received your enquiry and will contact you shortly.</p>

//         <h3>Your Submitted Details</h3>
//         <p><b>Name:</b> ${body.name}</p>
//         <p><b>Email:</b> ${body.email}</p>
//         <p><b>Phone:</b> ${body.phoneCode} ${body.phone}</p>
//         <p><b>Date:</b> ${body.date}</p>
//         <p><b>Travellers:</b> ${body.travellers}</p>
//         <p><b>City:</b> ${body.city}</p>
//         <p><b>Service Type:</b> ${body.serviceType}</p>
//         <p><b>Vehicle Type:</b> ${body.vehicleType}</p>
//         <p><b>Message:</b> ${body.message}</p>

//         <br/>
//         <p>We appreciate your interest. Our team will reach out as soon as possible.</p>
//         <p><b>-Team CozyCabz</b></p>
//       `,
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.log("SMTP ERROR:", error);
//     return Response.json({ success: false, error: error.message });
//   }
// }
