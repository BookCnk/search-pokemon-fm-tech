import type { Metadata, Viewport } from "next";
import { Mali } from "next/font/google";
import "./globals.css";

const mali = Mali({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mali",
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
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-scroll-behavior="smooth" className={`antialiased ${mali.variable}`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
