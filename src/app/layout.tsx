import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pokédex Search — FM Tech",
    template: "%s | Pokédex Search",
  },
  description:
    "A polished Pokemon search app built with Next.js, TypeScript, Apollo Client, and GraphQL.",
  applicationName: "search-pokemon-fm-tech",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`antialiased ${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
