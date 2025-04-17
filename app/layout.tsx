import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ChatSupport from "./components/ChatSupport";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soraj Group",
  description: "Premium Real Estate Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ChatSupport />
      </body>
    </html>
  );
}
