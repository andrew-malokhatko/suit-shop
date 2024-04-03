import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "WSuit Premium Suit Shop",
  description: "Best suits in the world. Be the best looking man in the room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">

        <Navbar />
        {children}

      </body>
    </html>
  );
}
