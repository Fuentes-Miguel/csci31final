import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./componets/Footer";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Theme>
        <body
          className={`${inter.className} bg-gradient-to-r from-gray-800 to-gray-300`}
        >
          {children}
          <Footer /> {/* Include your Footer component here */}
          <Analytics />
        </body>
        {/* <ThemePanel /> */}
      </Theme>
    </html>
  );
}
