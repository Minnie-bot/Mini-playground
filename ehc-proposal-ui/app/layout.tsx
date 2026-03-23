import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handy Homes Proposal",
  description: "Customer-facing handyman proposal UI for Handy Homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
