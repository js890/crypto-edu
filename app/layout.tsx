import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Crypto and Technological Friends",
  description:
    "An interactive learning adventure about cryptocurrency, finance, and modern technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}