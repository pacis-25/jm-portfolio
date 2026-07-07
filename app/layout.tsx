import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const description =
  "John Mark Pacis is a software engineer from Pangasinan, Philippines with 3+ years of experience shipping production systems end-to-end, from role-based access control and multi-repository safety infrastructure to real-time scheduling platforms and B2B SaaS features.";

export const metadata: Metadata = {
  title: "John Mark Pacis — Software Engineer",
  description,
  openGraph: {
    title: "John Mark Pacis — Software Engineer",
    description,
    type: "website",
    siteName: "John Mark Pacis",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
