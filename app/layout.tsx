import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://jm-portfolio-eta.vercel.app"),
  title: "John Mark Pacis — Software Engineer",
  description,
  openGraph: {
    title: "John Mark Pacis — Software Engineer",
    description,
    url: "https://jm-portfolio-eta.vercel.app",
    type: "website",
    siteName: "John Mark Pacis",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark Pacis — Software Engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0D141C" },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
