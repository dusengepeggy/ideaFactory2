import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/common/navbar";
import Footer from "@/common/footer";

export const metadata: Metadata = {
  title: "Idea factory",
  description: "Think tank website",


  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full min-h-[100vh] bg-[#F5F9E9] text-black"
      >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
