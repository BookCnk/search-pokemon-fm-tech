import type { Metadata, Viewport } from "next";
import { Kanit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-body",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Studio Starter Template",
    template: "%s | Studio Starter Template",
  },
  description:
    "Generic Next.js template for launching a polished marketing website without the old bus-management code.",
  applicationName: "Studio Starter Template",
};

export const viewport: Viewport = {
  themeColor: "#f8f2e6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className={`${kanit.className} min-h-screen`}>{children}</body>
    </html>
  );
}
