import { IBM_Plex_Mono } from "next/font/google";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// export const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
