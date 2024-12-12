import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { ibm, dotted } from "@/styles/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
        <body
          className={`${ibm.variable} ${dotted.variable} antialiased bg-dottt-grey`}
        >
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
          <NuqsAdapter>{children}</NuqsAdapter>
        </body>
      </html>
    </ClerkProvider>
  );
}
