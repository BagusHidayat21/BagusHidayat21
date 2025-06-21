import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bagus Hidayat - Portfolio",
  description: "Bagus Hidayat's Portfolio - Crafting Digital Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ClientLayout>
          <header><Topbar /></header>
          <main>{children}</main>
          <footer><Footer /></footer>
        </ClientLayout>
      </body>
    </html>
  );
}
