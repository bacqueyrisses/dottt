import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { ibm } from "@/app/fonts";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "DOTTT ICON-PACK",
  description: "High-quality UI icons for designers and developers.",
  metadataBase: new URL("https://getdottt.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: "#B6BBBE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
