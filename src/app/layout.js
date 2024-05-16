import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "V Glow",
  description: "face cream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <div className="bg-gray-300"><Navbar/></div>
        {children}
        </>
      </body>
    </html>
  );
}
