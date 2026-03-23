import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-playground",
  description: "A parent workspace for experiments, prototypes, and future app launches.",
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
