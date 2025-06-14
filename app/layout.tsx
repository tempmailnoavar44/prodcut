import "./globals.css";
import type { Metadata } from "next";
import { StoreProvider } from "@/src/components";

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
    <html className={`font-yakan antialiased`} lang="fa" dir="rtl">
      <body>
        <div id="rootModal"></div>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
