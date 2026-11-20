import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto and Technological Friends",
  description:
    "An interactive game with two halves—Crypto and Technology—helping high schoolers learn finance and modern tech concepts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}