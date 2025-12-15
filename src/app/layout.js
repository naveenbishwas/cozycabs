// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Whatsapp from "./Components/Whatsapp/page";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <>
//       <html lang="en">
//         <head>
//           <Script id="gtm-head" strategy="afterInteractive">
//             {`
//             (function(w,d,s,l,i){
//               w[l]=w[l]||[];
//               w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
//               var f=d.getElementsByTagName(s)[0],
//                   j=d.createElement(s),
//                   dl=l!='dataLayer' ? '&l='+l : '';
//               j.async=true;
//               j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//               f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-5VXRK94N');
//           `}
//           </Script>

//           {/* Global Google tag (GA4 + Google Ads) */}
//           <Script
//             src="https://www.googletagmanager.com/gtag/js?id=G-CVMF02X5Z3"
//             strategy="afterInteractive"
//           />

//           <Script id="google-tags" strategy="afterInteractive">
//             {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}

//             gtag('js', new Date());

//             // GA4
//             gtag('config', 'G-CVMF02X5Z3');

//             // Google Ads
//             gtag('config', 'AW-596807168');
//           `}
//           </Script>
//           <title>Car Rental Service in India | CozyCabz</title>
//           <meta
//             name="description"
//             content="Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip."
//           ></meta>
//         </head>

//         <body className={`${geistSans.variable} ${geistMono.variable}`}>
//           <noscript>
//             <iframe
//               src="https://www.googletagmanager.com/ns.html?id=GTM-5VXRK94N"
//               height="0"
//               width="0"
//               style={{ display: "none", visibility: "hidden" }}
//             />
//           </noscript>
//           {children}
//         </body>
//         <Whatsapp />
//       </html>
//     </>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Whatsapp from "./Components/Whatsapp/page";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VXRK94N');
          `}
        </Script>

        {/* Global Google tag (GA4 + Google Ads) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CVMF02X5Z3"
          strategy="afterInteractive"
        />

        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CVMF02X5Z3');
            gtag('config', 'AW-596807168');
          `}
        </Script>

        <Script id="google-tags" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('js', new Date());

    // GA4
    gtag('config', 'G-CVMF02X5Z3');

    // Google Ads (existing)
    gtag('config', 'AW-596807168');

    // Google Ads (NEW)
    gtag('config', 'AW-650029308');
  `}
        </Script>

        <title>Car Rental Service in India | CozyCabz</title>
        <meta
          name="description"
          content="Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip."
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VXRK94N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <Whatsapp />
        <div id="datepicker-portal"></div>
      </body>
    </html>
  );
}
