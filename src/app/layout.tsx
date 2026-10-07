import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionRoot } from "@/components/site/Interactive";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dispatch | Hire AI agents by name",
  description:
    "Hire AI agents by name. Describe the job in plain English and the agent starts today. Dispatch is in private beta, invite-only.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
