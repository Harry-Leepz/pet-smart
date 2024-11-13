import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetSmart - Pet Daycare Software",
  description: "take care of people's pets responsibly with PetSmart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-sm text-slate-900 bg-[#e5e8ec] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
