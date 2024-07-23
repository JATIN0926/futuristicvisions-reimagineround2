import { Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/context/AnimationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Incredible-India",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimationProvider>
        <body className={inter.className}>{children}</body>
      </AnimationProvider>
    </html>
  );
}
