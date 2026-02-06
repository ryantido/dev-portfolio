import type { Metadata } from "next";
import { Outfit, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { social_links } from "@/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:
    new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app"),
  title: {
    default: "Ryan Tido – Full Stack Developer",
    template: "%s | Ryan Tido",
  },
  description:
    "Full Stack Developer specializing in scalable backend systems and intuitive UIs. Portfolio, projects, skills, and contact.",
  keywords: [
    "Ryan Tido",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Ryan Tido – Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable backend systems and intuitive UIs.",
    siteName: "Ryan Tido",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Ryan Tido – Full Stack Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Tido – Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable backend systems and intuitive UIs.",
    images: ["/api/og"],
    creator: "@ryantido34",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add tokens when available in environment variables
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0b0f1a" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} ${outfit.variable} ${sora.variable} antialiased dark`}
      >
        {/* JSON-LD: Person schema for better knowledge panels */}
        <Script id="ld-json-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ryan Tido",
            url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app"),
            sameAs: social_links.map((s) => s.link),
            jobTitle: "Full Stack Developer",
            image: (process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app") + "/ryan.jpg",
          })}
        </Script>
        <NavBar />
        <main className="container mx-auto min-h-[calc(100dvh-4rem)] max-[1285px]:px-4 max-xl:py-4 overflow-x-hidden">
          {children}
        </main>
        <footer className="p-4 border-t border-border">
          <p className="container mx-auto text-center text-muted-foreground text-sm font-medium font-outfit">
            &copy; {new Date().getFullYear()} Designed and Built by Ryan Tido.
          </p>
        </footer>
        <Toaster duration={5000} position="bottom-right" />
      </body>
    </html>
  );
}
