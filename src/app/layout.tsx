import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeInitializer } from "./theme-script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Guilherme Wanderley | Data - Science - Viz",
  description: "Personal portfolio of a senior software engineer specializing in data visualization",
  keywords: ["data visualization", "software engineer", "portfolio", "data science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${robotoSlab.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInitializer />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
