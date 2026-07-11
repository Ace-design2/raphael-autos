import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphael Autos | Curated Luxury Automobiles",
  description: "Where Exceptional Automobiles Find Their Next Owner. Experience Rolls-Royce style craftsmanship, provenance, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#111111]">{children}</body>
    </html>
  );
}
