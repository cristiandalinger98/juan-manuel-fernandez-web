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
  title: "Juan Manuel Fernández | Abogado en Santa Fe",
  description:
    "Juan Manuel Fernández, abogado matriculado en Santa Fe y Entre Ríos. Asesoramiento y representación legal en distintas áreas del derecho.",
  keywords: [
    "Juan Manuel Fernández abogado",
    "abogado Santa Fe",
    "abogado San Carlos Centro",
    "abogado Santa Fe y Entre Ríos",
    "abogado en Santa Fe",
    "asesoramiento legal",
  ],
  verification: {
    google: "g987xBvQfa-6YHAjBcqWz-gimBqs6FpFgMyJTQ3QfAM",
  },
  openGraph: {
    title: "Juan Manuel Fernández | Abogado en Santa Fe",
    description:
      "Abogado matriculado en Santa Fe y Entre Ríos. Asesoramiento y representación legal.",
    type: "website",
    locale: "es_AR",
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