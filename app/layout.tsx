import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ChatSupport from "./components/ChatSupport";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soraj Group",
  description: "Premium Real Estate Developer",
  icons: {
    icon: [
      { url: '/favicon-logo.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon-logo.jpg',
    apple: '/favicon-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-logo.jpg" />
        <link rel="shortcut icon" href="/favicon-logo.jpg" />
        <link rel="apple-touch-icon" href="/favicon-logo.jpg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <ChatSupport />
      </body>
    </html>
  );
}
