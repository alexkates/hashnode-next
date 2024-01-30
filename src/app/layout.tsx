import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Scripts from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";
import { validateEnvVars } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hashnode-next",
  description: "The fastest way to go headless with Hashnode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnvVars();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex min-h-screen flex-col pt-2">
          <Providers>
            <Scripts />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
