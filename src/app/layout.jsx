import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Clientcomponent from "@/components/clientComponent/Clientcomponent";

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
          <div className=" relative">
            <Clientcomponent/>
            <Navbar />
          </div>
          {children}
        </>
      </body>
    </html>
  );
}
