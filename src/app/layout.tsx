import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FloatingWA } from "@/components/layout/floating-wa";
import { InfoBar } from "@/components/layout/info-bar";

export const metadata: Metadata = {
  title: "Hisar Travel Malaysia — Layanan Sempurna Ibadah Sempurna",
  description: "Agensi pelancongan Umrah & Haji berlesen. Pakej bermula RM 6,990.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <InfoBar />
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <FloatingWA />
        </ThemeProvider>
      </body>
    </html>
  );
}
