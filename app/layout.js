import "./globals.css";

export const metadata = {
  title: "Mini Playground | Under Construction",
  description:
    "Mini Playground is under construction. A cleaner, faster experience is on the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
