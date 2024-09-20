import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "DOTTT",
  description: "Description.",
};

export const viewport: Viewport = {
  themeColor: "#B6BBBE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm.variable} antialiased bg-dottt-grey`}>
        <Toaster
          position={"bottom-center"}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "flex-nowrap w-full text-sm p-4 inline-flex rounded-2xl font-ibm items-center justify-center bg-dottt-light-grey",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
