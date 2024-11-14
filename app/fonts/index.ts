import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const dotted = localFont({
  src: "./5by7.ttf",
  variable: "--font-dotted",
  weight: "300",
});
