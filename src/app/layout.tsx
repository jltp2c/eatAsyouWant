import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryStack from "@/components/QueryStack";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EatAsYouWant",
  description: "eat as you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryStack>
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
            </div>
          </QueryStack>
        </AuthProvider>
      </body>
    </html>
  );
}
