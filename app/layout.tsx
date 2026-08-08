import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Manuel Fernández | Abogado",
  description: "Abogado en Santa Fe...",
  verification: {
    google: [
      "3qkD8WGONgoIrknObVouhDew-pqxB52WvB_dGMzUocc",
      "g987xBvQfa-6YHAjBcqWz-gimBqs6FpFgMyJTQ3QfAM",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {children}
    </html>
  );
}