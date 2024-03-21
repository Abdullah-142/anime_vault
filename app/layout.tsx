import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Anime Vault is a website to watch anime online for free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="max-w-7xl bg-[#0F1117] mx-auto">
          <Hero />
          {children}
          <Footer />
          
        </main>
      </body>
    </html>
  );
}
