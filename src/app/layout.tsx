import type { Metadata } from "next";
import { Irish_Grover } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

// EXAMPLE FONT IMPORTS
const irish = Irish_Grover({
  variable: "--font-irish",
  subsets: ["latin"],
  weight: "400",
});

// GLOBALS METADATA
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${irish.variable} antialiased`}
      >

        <header><Navbar /></header>

        <main>
          {children}
        </main>

        <footer></footer>

      </body>
    </html>
  );
}
