import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import '@/public/favicon.ico'
import StoreProvider from "../lib/StoreProvider";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next Sneakers",
  description: "Pet project site on Next.js. Created by Vlashex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <ThemeRegistry>
      <html lang="en">
        <body style={{background: '#E7F6FF', height: '100vh'}} className={inter.className}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </body>
      </html>
    </ThemeRegistry>
  );
}
