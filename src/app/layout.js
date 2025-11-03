import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Whatsapp from "./Components/Whatsapp/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "CozyCabz – Reliable & Affordable Car Rental Service in India",
//   description:
//     "Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          CozyCabz – Reliable & Affordable Car Rental Service in India
        </title>
        <meta
          name="description"
          content="Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip."
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <Whatsapp />
    </html>
  );
}
