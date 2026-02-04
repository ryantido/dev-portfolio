import type { Metadata } from "next";
import { Outfit, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Ryan Dev - Portfolio",
  description: "",
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
